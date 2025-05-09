
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Copy, CheckCheck, BookOpen, FileText, Link as LinkIcon } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';

const Documentation = () => {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
    });
    
    setTimeout(() => setCopied(null), 2000);
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container px-4 py-12 mx-auto space-y-12 flex-1">
        <section className="text-center space-y-6 py-6">
          <Badge variant="outline" className="px-3.5 py-1.5 text-sm font-medium">
            Documentation
          </Badge>
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl">
            Laravel Wizard <span className="text-primary">Docs</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Complete reference guide for Laravel Wizard extension features, capabilities, and integrations.
          </p>
        </section>
        
        <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="config">Configuration</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="getting-started" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Quick Start Guide
                </CardTitle>
                <CardDescription>Get up and running with Laravel Wizard in minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Prerequisites</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Visual Studio Code (1.60.0 or higher)</li>
                    <li>PHP 8.0 or higher</li>
                    <li>Laravel project (7.x, 8.x, 9.x, 10.x, or 11.x)</li>
                  </ul>
                </div>

                <Separator />
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Step 1: Install Laravel Wizard</h3>
                  <p className="text-muted-foreground">Install directly from VS Code marketplace</p>
                  <div className="relative p-4 bg-muted rounded-md font-mono text-sm mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0"
                      onClick={() => copyCode('ext install 3bdulrahman.laravel-wizard', 'install-cmd')}
                    >
                      {copied === 'install-cmd' ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span className="sr-only">Copy</span>
                    </Button>
                    <code>ext install 3bdulrahman.laravel-wizard</code>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Step 2: Configure Laravel Wizard</h3>
                  <p className="text-muted-foreground">Open settings.json and customize your experience</p>
                  <div className="relative p-4 bg-muted rounded-md font-mono text-sm mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0"
                      onClick={() => copyCode('{\n  "laravelWizard.enableIntelliSense": true,\n  "laravelWizard.enableSnippets": true,\n  "laravelWizard.artisanIntegration": true\n}', 'settings-cmd')}
                    >
                      {copied === 'settings-cmd' ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span className="sr-only">Copy</span>
                    </Button>
                    <code>
                      {`{
  "laravelWizard.enableIntelliSense": true,
  "laravelWizard.enableSnippets": true,
  "laravelWizard.artisanIntegration": true
}`}
                    </code>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Step 3: Open your Laravel project</h3>
                  <p className="text-muted-foreground">Laravel Wizard will automatically detect your project structure</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Feature Reference
                </CardTitle>
                <CardDescription>Detailed explanation of all Laravel Wizard features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">IntelliSense</TableCell>
                      <TableCell>Smart code suggestions for Laravel classes, factories, models, routes, and more</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Go to Definition</TableCell>
                      <TableCell>Navigate directly to model, controller, route, or any class definitions in your project</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Autocomplete</TableCell>
                      <TableCell>Intelligent autocomplete for common Laravel functions like view(), route(), trans(), config(), env()</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Code Snippets</TableCell>
                      <TableCell>Ready-to-use templates for creating Laravel files (models, controllers, migrations, etc.)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Blade Support</TableCell>
                      <TableCell>Syntax highlighting and IntelliSense inside .blade.php files</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Route Intelligence</TableCell>
                      <TableCell>Reads routes/web.php and routes/api.php to provide route name suggestions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Artisan Integration</TableCell>
                      <TableCell>Execute Artisan commands directly from VS Code</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="config" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Configuration Options
                </CardTitle>
                <CardDescription>Customize Laravel Wizard to match your workflow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Setting</TableHead>
                      <TableHead>Default</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">laravelWizard.enableIntelliSense</TableCell>
                      <TableCell>true</TableCell>
                      <TableCell>Enable/disable IntelliSense suggestions</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">laravelWizard.enableSnippets</TableCell>
                      <TableCell>true</TableCell>
                      <TableCell>Enable/disable code snippets</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">laravelWizard.artisanIntegration</TableCell>
                      <TableCell>true</TableCell>
                      <TableCell>Enable/disable Artisan command integration</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">laravelWizard.bladeFormatting</TableCell>
                      <TableCell>true</TableCell>
                      <TableCell>Enable/disable Blade template auto-formatting</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">laravelWizard.livewireSupport</TableCell>
                      <TableCell>true</TableCell>
                      <TableCell>Enable/disable Livewire component support</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">laravelWizard.filamentSupport</TableCell>
                      <TableCell>true</TableCell>
                      <TableCell>Enable/disable Filament admin panel support</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about Laravel Wizard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Does Laravel Wizard work with Laravel 11?</h3>
                  <p className="text-muted-foreground">Yes, Laravel Wizard fully supports Laravel 11 and includes all the latest features.</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="font-medium">Can I use Laravel Wizard with other PHP frameworks?</h3>
                  <p className="text-muted-foreground">Laravel Wizard is specifically designed for Laravel, but some PHP intelligence features may work with other frameworks.</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="font-medium">Does Laravel Wizard support Livewire?</h3>
                  <p className="text-muted-foreground">Yes, Laravel Wizard includes full Livewire support with intelligent suggestions for component properties and methods.</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="font-medium">How often is Laravel Wizard updated?</h3>
                  <p className="text-muted-foreground">Laravel Wizard is updated regularly to support new Laravel releases and add new features.</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h3 className="font-medium">Is Laravel Wizard free to use?</h3>
                  <p className="text-muted-foreground">Yes, Laravel Wizard is completely free and open-source under the MIT license.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
