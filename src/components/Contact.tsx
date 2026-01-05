import React from "react";
import ContactForm from "@/src/components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-bold mb-6">Contact</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Contact form */}
        <div>
          <p className="text-slate-600">
            Interested in collaboration, internships, or roles? Send a message —
            I typically reply within a few business days.
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        {/* Right: Contact details */}
        <aside className="rounded-lg p-6 bg-white shadow">
          <h5 className="font-semibold">Contact details</h5>

          <p className="mt-3 text-slate-600">arallapa@asu.edu</p>
          <p className="mt-1 text-slate-600">+1 (480) 995-0109</p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/Raditya0902"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/aditya-rallapalli"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a href="mailto:arallapa@asu.edu" aria-label="Email">
              <Mail />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
