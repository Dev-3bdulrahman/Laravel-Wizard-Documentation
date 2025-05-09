
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DemoVideo() {
  return (
    <div className="space-y-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">See it in Action</h2>
        <p className="text-muted-foreground mt-2">
          Watch how Laravel Wizard boosts your productivity
        </p>
      </div>
      
      <Tabs defaultValue="intellisense">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="intellisense">IntelliSense</TabsTrigger>
          <TabsTrigger value="goto">Go to Definition</TabsTrigger>
          <TabsTrigger value="snippets">Snippets</TabsTrigger>
          <TabsTrigger value="artisan">Artisan</TabsTrigger>
        </TabsList>
        
        {/* IntelliSense Demo */}
        <TabsContent value="intellisense">
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/90 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">IntelliSense Demo</h3>
                  <p className="text-muted-foreground mb-4">
                    Smart suggestions for Laravel classes, models, routes, and more
                  </p>
                  <div className="bg-sidebar w-full max-w-lg mx-auto rounded border border-border/40 p-4 font-mono text-xs text-left overflow-x-auto">
                    <span className="text-blue-400">use</span> <span className="text-green-400">App\Models\</span>
                    <span className="inline-block w-2 h-4 bg-white/80 animate-pulse"></span>
                    <div className="mt-2 border border-gray-700 bg-gray-900 rounded-md">
                      <div className="px-2 py-1 bg-primary hover:bg-primary/80 text-white">User</div>
                      <div className="px-2 py-1 hover:bg-gray-800">Post</div>
                      <div className="px-2 py-1 hover:bg-gray-800">Comment</div>
                      <div className="px-2 py-1 hover:bg-gray-800">Category</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Go to Definition Demo */}
        <TabsContent value="goto">
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/90 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">Go to Definition</h3>
                  <p className="text-muted-foreground mb-4">
                    Jump directly to controllers, models, and views with a click
                  </p>
                  <div className="bg-sidebar w-full max-w-lg mx-auto rounded border border-border/40 p-4 font-mono text-xs text-left">
                    <div className="text-blue-400">route<span className="text-white">(</span><span className="text-orange-400">'posts.show'</span><span className="text-white">)</span>;</div>
                    <div className="border-l-2 border-primary mt-2 pl-2 text-muted-foreground">
                      <div className="mt-1">Go to route definition</div>
                      <div className="mt-1 text-[10px]">routes/web.php:24</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Snippets Demo */}
        <TabsContent value="snippets">
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/90 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">Code Snippets</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready-to-use templates for common Laravel files
                  </p>
                  <div className="bg-sidebar w-full max-w-lg mx-auto rounded border border-border/40 p-4 font-mono text-xs text-left">
                    <div className="text-white">lv:model<span className="inline-block w-1 h-4 bg-white/80 animate-pulse"></span></div>
                    <div className="border-l-2 border-primary mt-2 pl-2 text-muted-foreground">
                      <div>Laravel Model</div>
                      <div>Generate a new Laravel Eloquent model</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Artisan Demo */}
        <TabsContent value="artisan">
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/90 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-4">Artisan Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Run and manage Artisan commands directly in VS Code
                  </p>
                  <div className="bg-sidebar w-full max-w-lg mx-auto rounded border border-border/40 p-4 font-mono text-xs text-left">
                    <div className="text-green-400">$ php artisan make:controller BlogController --resource</div>
                    <div className="text-white mt-1">Controller created successfully.</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
