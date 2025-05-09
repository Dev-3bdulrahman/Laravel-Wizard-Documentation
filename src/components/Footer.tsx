
import React from 'react';
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 Laravel Wizard. Developed by <a href="https://3bdulrahman.com/" className="font-medium underline underline-offset-4 hover:text-primary" target="_blank" rel="noreferrer">3bdulrahman</a>.
          </p>
          <p className="text-xs text-muted-foreground">
            Laravel is a registered trademark of Taylor Otwell. VS Code is a trademark of Microsoft Corporation.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/Dev-3bdulrahman" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="rounded-full">
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://3bdulrahman.com/" target="_blank" rel="noreferrer" aria-label="Website">
            <Button variant="ghost" size="icon" className="rounded-full">
              <WebsiteIcon className="h-4 w-4" />
              <span className="sr-only">Website</span>
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function WebsiteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
