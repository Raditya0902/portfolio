"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button"; // keep your existing path

type Status = "" | "sending" | "sent" | `error: ${string}`;

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<Status>("");

  const isSending = status === "sending";

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check (client-side): if the hidden field gets filled, bail out
    const form = e.currentTarget;
    const website = (
      form.querySelector('input[name="website"]') as HTMLInputElement | null
    )?.value;
    if (website && website.trim() !== "") {
      // likely bot — silently ignore (optionally set status to a generic message)
      setStatus("");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error: please enter a valid email");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      // parse JSON safely (SendGrid might return non-json on rare errors)
      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        // clear success notice after a short delay
        setTimeout(() => setStatus(""), 4000);
      } else {
        // surface server error message when available
        const errMsg = data?.error || res.statusText || "failed to send";
        setStatus(`error: ${String(errMsg)}`);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setStatus(`error: ${msg}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-live="polite">
      {/* Honeypot (invisible to users). Keep the name 'website' or similar.
          On the server, ignore requests where this field is non-empty. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <label className="sr-only" htmlFor="contact-name">
        Your name
      </label>
      <input
        id="contact-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded p-3 border"
        placeholder="Your name"
        required
        disabled={isSending}
      />

      <label className="sr-only" htmlFor="contact-email">
        Your email
      </label>
      <input
        id="contact-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="w-full rounded p-3 border"
        placeholder="Your email"
        required
        disabled={isSending}
      />

      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="w-full rounded p-3 border"
        placeholder="Message"
        required
        disabled={isSending}
      />

      <div className="flex flex-col sm:flex-row gap-2">
        <Button type="submit" disabled={isSending} className="w-full md:w-auto">
          {isSending ? "Sending…" : "Send"}
        </Button>

        {/* Replace the onClick to open your calendar / scheduling link if you have one */}
        <Button
          type="button"
          variant="outline"
          disabled={isSending}
          className="w-full md:w-auto"
          onClick={() => {
            // Example: open Google Calendar scheduling link
            // window.open("https://cal.com/your-link", "_blank");
          }}
        >
          Schedule a chat
        </Button>
      </div>

      {status && (
        <p
          className={
            status.startsWith("error")
              ? "text-sm text-red-600"
              : "text-sm text-green-600"
          }
        >
          {status}
        </p>
      )}
    </form>
  );
}
