// app/api/contact/route.ts
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const htmlBody = `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${String(
      message
    ).replace(/\n/g, "<br/>")}</p>`;

    const msg = {
      to: process.env.CONTACT_RECIPIENT as string,
      from: process.env.SENDGRID_FROM as string, // must be a verified sender in SendGrid
      subject: `Portfolio message from ${name} <${email}>`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: htmlBody,
    };

    const response = await sendgrid.send(msg); // send returns an array with response(s)

    // Optionally inspect response to detect non-2xx from SendGrid
    const statusCode =
      Array.isArray(response) && response[0] && response[0].statusCode
        ? response[0].statusCode
        : 202;

    if (statusCode >= 400) {
      console.error("SendGrid returned error status:", statusCode, response);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    // log error for debugging (don't leak to clients)
    console.error("Mail send error:", err);
    return NextResponse.json(
      { error: err?.message || "SendGrid error" },
      { status: 500 }
    );
  }
}
