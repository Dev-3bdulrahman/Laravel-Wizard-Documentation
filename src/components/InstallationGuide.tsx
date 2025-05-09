
import React from 'react';
import { Check, Copy, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/components/ui/use-toast';

export function InstallationGuide() {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const installCommand = 'ext install Dev-3bdulrahman.Laravel-Wizard';
  const extensionUri = 'vscode:extension/Dev-3bdulrahman.Laravel-Wizard';
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    toast({
      title: "Command copied!",
      description: "The installation command has been copied to your clipboard.",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  const openVSCodeWithExtension = () => {
    window.location.href = extensionUri;
    toast({
      title: "Opening VS Code...",
      description: "VS Code should open and prompt you to install Laravel Wizard.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Installation Options</h2>
        <p className="text-muted-foreground mt-2">
          Choose the method that works best for you
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* VS Code Marketplace */}
        <Card>
          <CardHeader>
            <CardTitle>Option 1: VS Code Marketplace</CardTitle>
            <CardDescription>Install directly through VS Code</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Open VS Code</li>
              <li>Go to Extensions (Ctrl+Shift+X)</li>
              <li>Search for "Laravel Wizard"</li>
              <li>Click "Install"</li>
            </ol>
            <Button 
              className="w-full"
              onClick={openVSCodeWithExtension}
            >
              <Download className="mr-2 h-4 w-4" />
              Install in VS Code
            </Button>
          </CardContent>
        </Card>
        
        {/* Command Line */}
        <Card>
          <CardHeader>
            <CardTitle>Option 2: Command Line</CardTitle>
            <CardDescription>Install using VS Code CLI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <div className="bg-muted rounded-md p-3 font-mono text-sm overflow-x-auto">
                {installCommand}
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-1 top-1.5 h-8 w-8 p-0"
                onClick={copyToClipboard}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Run this command in your terminal to install the extension
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Configuration Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Configuration (Optional)</CardTitle>
          <CardDescription>
            Customize Laravel Wizard for your workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Open VS Code Settings (File &gt; Preferences &gt; Settings)</li>
            <li>Search for "Laravel Wizard"</li>
            <li>Customize settings as needed</li>
          </ol>
          <div className="mt-4 p-3 bg-muted rounded-md">
            <p className="font-mono text-xs">
              // settings.json example<br />
              &#123;<br />
              &nbsp;&nbsp;"laravelWizard.enableIntelliSense": true,<br />
              &nbsp;&nbsp;"laravelWizard.enableSnippets": true,<br />
              &nbsp;&nbsp;"laravelWizard.artisanIntegration": true<br />
              &#125;
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
