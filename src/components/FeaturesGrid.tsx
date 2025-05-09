
import React from 'react';
import { 
  Code, 
  FileCode, 
  Terminal, 
  Compass, 
  FileJson, 
  Lightbulb, 
  Puzzle, 
  RefreshCw, 
  CodeXml 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesGrid() {
  const features = [
    {
      title: 'Laravel IntelliSense',
      description: 'Smart suggestions for classes, factories, models, routes and more.',
      icon: <Lightbulb className="h-10 w-10 text-primary" />
    },
    {
      title: 'Go to Definition',
      description: 'Jump directly to models, controllers, routes, Blade files and Livewire components.',
      icon: <Compass className="h-10 w-10 text-primary" />
    },
    {
      title: 'Smart Autocomplete',
      description: 'Intelligent autocompletion for Laravel functions like view(), route(), trans() and more.',
      icon: <Code className="h-10 w-10 text-primary" />
    },
    {
      title: 'Snippet Library',
      description: 'Ready-to-use snippets for models, controllers, migrations, seeders, requests and more.',
      icon: <Puzzle className="h-10 w-10 text-primary" />
    },
    {
      title: 'Blade Support',
      description: 'Syntax highlighting and intelligence for Blade templates.',
      icon: <FileCode className="h-10 w-10 text-primary" />
    },
    {
      title: 'Route Intelligence',
      description: 'Parses web.php and api.php to provide automatic suggestions for route names.',
      icon: <CodeXml className="h-10 w-10 text-primary" />
    },
    {
      title: 'Composer Integration',
      description: 'Reads composer.json to discover packages and provide analysis.',
      icon: <FileJson className="h-10 w-10 text-primary" />
    },
    {
      title: 'Artisan Commands',
      description: 'Run Artisan commands directly from within the editor.',
      icon: <Terminal className="h-10 w-10 text-primary" />
    },
    {
      title: 'Auto Updates',
      description: 'Keeps pace with new Laravel versions and features.',
      icon: <RefreshCw className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <Card key={i} className="overflow-hidden border border-border/40 bg-background/60">
          <CardHeader className="pb-2">
            <div className="mb-2">{feature.icon}</div>
            <CardTitle className="text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
