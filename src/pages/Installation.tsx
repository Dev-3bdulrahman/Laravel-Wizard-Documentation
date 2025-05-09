
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InstallationGuide } from '@/components/InstallationGuide';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

const Installation = () => {
  const { toast } = useToast();
  
  const openVSCodeWithExtension = () => {
    window.location.href = 'vscode:extension/Dev-3bdulrahman.Laravel-Wizard';
    toast({
      title: "Opening VS Code...",
      description: "VS Code should open and prompt you to install Laravel Wizard.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container px-4 py-12 mx-auto space-y-12 flex-1">
        <section className="text-center space-y-6 py-6">
          <Badge variant="outline" className="px-3.5 py-1.5 text-sm font-medium">
            Installation Guide
          </Badge>
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl">
            Install Laravel <span className="text-primary">Wizard</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Follow these simple steps to install and set up the Laravel Wizard extension in your VS Code environment.
          </p>
          <div className="pt-4">
            <Button size="lg" onClick={openVSCodeWithExtension}>
              <Download className="mr-2 h-5 w-5" />
              Install Now
            </Button>
          </div>
        </section>
        
        <InstallationGuide />
      </main>
      
      <Footer />
    </div>
  );
};

export default Installation;
