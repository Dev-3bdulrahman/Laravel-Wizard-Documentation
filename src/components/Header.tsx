
import React from 'react';
import { Button } from "@/components/ui/button";
import { GithubIcon, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export function Header() {
  const { toast } = useToast();

  const openVSCodeWithExtension = () => {
    window.location.href = 'vscode:extension/Dev-3bdulrahman.Laravel-Wizard';
    toast({
      title: "Opening VS Code...",
      description: "VS Code should open and prompt you to install Laravel Wizard.",
    });
  };

  const openGitHubRepo = () => {
    window.open('https://github.com/Dev-3bdulrahman/laravel-wizard', '_blank');
    toast({
      title: "Opening GitHub...",
      description: "You'll be redirected to the Laravel Wizard GitHub repository.",
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <LaravelWizardLogo className="h-8 w-8" />
          </Link>
          <Link to="/" className="font-bold text-xl">Laravel Wizard</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link to="/installation" className="text-sm font-medium transition-colors hover:text-primary">
            Installation
          </Link>
          <Link to="/documentation" className="text-sm font-medium transition-colors hover:text-primary">
            Documentation
          </Link>
          <a href="https://github.com/Dev-3bdulrahman/laravel-wizard" target="_blank" rel="noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
            GitHub
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-1" onClick={openGitHubRepo}>
            <GithubIcon className="h-4 w-4" />
            <span>Star</span>
          </Button>
          <Button size="sm" onClick={openVSCodeWithExtension}>
            <Download className="mr-2 h-4 w-4" />
            Install
          </Button>
        </div>
      </div>
    </header>
  );
}

// Laravel Wizard Logo SVG component
function LaravelWizardLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      width="128"
      height="128"
    >
      <rect width="128" height="128" rx="16" fill="#FF2D20"/>
      <path d="M64 24L104 88H24L64 24Z" fill="white"/>
      <path d="M64 48L84 80H44L64 48Z" fill="#FF2D20"/>
      <path d="M64 72L74 88H54L64 72Z" fill="white"/>
      <path d="M64 96C68.4183 96 72 92.4183 72 88C72 83.5817 68.4183 80 64 80C59.5817 80 56 83.5817 56 88C56 92.4183 59.5817 96 64 96Z" fill="white"/>
      <path d="M104 88L112 100H16L24 88H104Z" fill="white"/>
      <path d="M112 100C112 104.418 108.418 108 104 108H24C19.5817 108 16 104.418 16 100H112Z" fill="white"/>
      <path d="M84 56L92 68H76L84 56Z" fill="white"/>
      <path d="M44 56L52 68H36L44 56Z" fill="white"/>
      <path d="M104 88C108.418 88 112 91.5817 112 96C112 100.418 108.418 104 104 104H24C19.5817 104 16 100.418 16 96C16 91.5817 19.5817 88 24 88" fill="#FF2D20"/>
    </svg>
  );
}
