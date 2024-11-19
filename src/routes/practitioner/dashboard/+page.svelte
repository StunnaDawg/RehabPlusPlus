<script>

  import { CircleUser, ChartLine, Package, House, ShoppingCart, Bell, Activity, ArrowUpRight, CreditCard, DollarSign, Menu, Package2, Search, Users, Dumbbell, TrendingUp, CalendarDays, Bandage, Bike  } from 'lucide-svelte';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import * as Card from "$lib/components/ui/card/index";
  import * as Table from "$lib/components/ui/table/index";
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Input } from '$lib/components/ui/input/index';
	import * as Sheet from '$lib/components/ui/sheet/index';
  import { Progress } from "$lib/components/ui/progress/index";

  import ThemeToggle from "../../../components/ThemeToggle.svelte";

  import ExercisePlan from '../../../components/patients/ExercisePlan.svelte'
 
  // Sample data
  const exerciseStats = {
    completed: 24,
    total: 30,
    streak: 5
  };

  const patients = [
  {
    id: 1,
    fullName: "Liam Johnson",
    email: "liam.johnson@example.com",
    phone: "(902)123-4546",
    date: "2024-10-01",
    diagnosis: "ACL Tear",
    progress: "50%",
    status: "active | nonactive"
  },
  {
    id: 2,
    fullName: "Olivia Smith",
    email: "olivia.smith@example.com",
    phone: "(902)123-4546",
    date: "2024-10-05",
    diagnosis: "Shoulder Dislocation",
    progress: "80%",
  },
  {
    id: 3,
    fullName: "Ethan Brown",
    email: "ethan.brown@example.com",
    phone: "(902)123-4546",
    date: "2024-10-10",
    diagnosis: "Ankle Sprain",
    progress: "30%",
  },
  {
    id: 4,
    fullName: "Emma Davis",
    email: "emma.davis@example.com",
    phone: "(902)123-4546",
    date: "2024-10-15",
    diagnosis: "Knee Surgery",
    progress: "95%",
  },
];

  </script>

    <!-- Dashboard Content -->
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8">
      
      <!-- Stats Cards -->
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Analytics</Card.Title>
            <Bandage class="h-4 w-4 text-muted-foreground" />
          </Card.Header>
          <Card.Content>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-2xl font-bold">3/10</p>
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600">Average patient recovery rate</p>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header class="pb-2">
            <Card.Description>Analytics</Card.Description>
            <Card.Title class="text-4xl">44%</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-muted-foreground text-xs">Percentage of patients following their protocols</div>
          </Card.Content>
          <Card.Footer>
            <Progress value={25} aria-label="25% increase" />
          </Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Active Patients</Card.Title>
            <Bandage class="h-4 w-4 text-muted-foreground" />
          </Card.Header>
          <Card.Content>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-2xl font-bold">96</p>
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600">Number of patients</p>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-sm font-medium">Protocols</Card.Title>
            <Bike class="h-4 w-4 text-muted-foreground" />
          </Card.Header>
          <Card.Content>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-2xl font-bold">8/10</p>
              </div>
            </div>
            <p class="mt-2 text-sm text-gray-600">Number of protocols assigned</p>
          </Card.Content>
        </Card.Root>
      </div>

      <!-- Client list -->
      <Card.Root>
        <Card.Header class="px-6">
          <Card.Title>Patients</Card.Title>
          <Card.Description>Patients from ProActive Clinic</Card.Description>
        </Card.Header>
        <Card.Content>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head class="md:table-cell">Full Name</Table.Head>
                <Table.Head class="md:table-cell text-left">Date</Table.Head>
                <Table.Head class="md:table-cell text-left">Diagnosis</Table.Head>
                <Table.Head class="md:table-cell text-left">Progress</Table.Head>
                <Table.Head class="md:table-cell text-left">Actions</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {#each patients as patient (patient.id)}
                <Table.Row>
                  <Table.Cell>
                    <div class="font-medium">{patient.fullName}</div>
                    <div class="text-muted-foreground text-sm md:inline">
                      {patient.email}
                    </div>
                    <div class="text-muted-foreground text-sm md:inline">
                      {patient.phone}
                    </div>
                  </Table.Cell>
                  <Table.Cell class="md:table-cell">{patient.date}</Table.Cell>
                  <Table.Cell class="md:table-cell">{patient.diagnosis}</Table.Cell>
                  <Table.Cell class="md:table-cell">
                    {patient.progress}
                  </Table.Cell>
                  <Table.Cell class="md:table-cell">
                    <Button variant="ghost">View</Button>
                    <Button variant="ghost">Edit</Button>
                  </Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>
        </Card.Content>
      </Card.Root>
    </main>