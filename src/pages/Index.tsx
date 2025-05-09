
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { InstallationGuide } from '@/components/InstallationGuide';
import { DemoVideo } from '@/components/DemoVideo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  
  const openVSCodeWithExtension = () => {
    window.location.href = 'vscode:extension/Dev-3bdulrahman.Laravel-Wizard';
    toast({
      title: "Opening VS Code...",
      description: "VS Code should open and prompt you to install Laravel Wizard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12 mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-10">
          <Badge variant="outline" className="px-3.5 py-1.5 text-sm font-medium">
            VS Code Extension
          </Badge>
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl">
            Laravel <span className="text-primary">Wizard</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            The ultimate VS Code extension for Laravel development with intelligent code assistance,
            snippets, and powerful tools to supercharge your PHP workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={openVSCodeWithExtension}>
              <Download className="mr-2 h-5 w-5" />
              Install Extension
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/Dev-3bdulrahman/laravel-wizard', '_blank')}>
              View on GitHub
            </Button>
          </div>
        </section>

        {/* Main content tabs */}
        <Tabs defaultValue="features" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="demo">Demo</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="pt-6">
            <FeaturesGrid />
          </TabsContent>
          
          <TabsContent value="installation" className="pt-6">
            <InstallationGuide />
          </TabsContent>
          
          <TabsContent value="demo" className="pt-6">
            <DemoVideo />
          </TabsContent>
        </Tabs>

        {/* Technical Section */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
              <CardDescription>
                Under the hood of Laravel Wizard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Built with</h3>
                    <p className="text-muted-foreground">TypeScript, Node.js, VS Code API</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">License</h3>
                    <p className="text-muted-foreground">MIT License</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Version</h3>
                    <p className="text-muted-foreground">1.0.0</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Laravel Compatibility</h3>
                    <p className="text-muted-foreground">Laravel 8.x, 9.x, 10.x, 11.x</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=Dev-3bdulrahman.Laravel-Wizard', '_blank')}>View Documentation</Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
