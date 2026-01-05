import React from "react";
import { Button } from "@/src/components/ui/button";
import { FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold">
          Aditya Rallapalli
        </h1>
      </div>

      {/* Responsive nav: inline on md+, collapsible on small screens using native details */}
      <nav className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-3">
          <a href="#projects" className="text-sm hover:underline">
            Projects
          </a>
          <a href="#about" className="text-sm hover:underline">
            About
          </a>
          <a href="#experience" className="text-sm hover:underline">
            Experience
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
          <a href="/resume.pdf" aria-label="Resume" className="ml-2">
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
        </div>

        {/* Mobile collapsible menu */}
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer p-2 rounded-md hover:bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-3 z-10">
            <a href="#projects" className="block py-1 text-sm hover:underline">
              Projects
            </a>
            <a href="#about" className="block py-1 text-sm hover:underline">
              About
            </a>
            <a
              href="#experience"
              className="block py-1 text-sm hover:underline"
            >
              Experience
            </a>
            <a href="#contact" className="block py-1 text-sm hover:underline">
              Contact
            </a>
            <a href="/resume.pdf" className="block py-2">
              <Button variant="outline" size="sm">
                Resume
              </Button>
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
