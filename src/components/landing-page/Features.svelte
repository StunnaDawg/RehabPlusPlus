<script lang="ts">
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Calendar, Activity, Video, Users, Clipboard, Award } from 'lucide-svelte';
  </script>
  
  <section class="py-16 bg-primary">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Streamlining Rehabilitation Management
        </h2>
        <p class="mt-4 text-lg text-foreground/80 font-medium max-w-2xl mx-auto">
          Our platform enhances healthcare professionals to efficiently manage and monitor patient rehabilitation protocols, improving outcomes and fostering collaboration.
        </p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <Calendar class="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Customizable Protocols</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Create and manage tailored rehabilitation programs that align with your clinic’s specific methodologies.
            </CardDescription>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <Activity class="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Data-Driven Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Track patient progress in real-time with analytics and reports that help refine treatment plans.
            </CardDescription>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <Video class="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Exercise Video Library</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Provide patients with a professional, easy-to-access video library to ensure proper exercise execution.
            </CardDescription>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <Users class="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Patient Engagement Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Foster better patient adherence with integrated check-ins, reminders, and communication tools.
            </CardDescription>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <Clipboard class="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Automated Reporting</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Generate detailed reports automatically to keep track of patient milestones and clinic performance.
            </CardDescription>
          </CardContent>
        </Card>
  
        <Card>
          <CardHeader>
            <Award class="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Compliance Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Ensure patients stay on track with real-time updates on adherence to prescribed exercises and protocols.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
