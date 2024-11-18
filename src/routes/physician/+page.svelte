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

  import ThemeToggle from "../../components/ThemeToggle.svelte";

  import ExercisePlan from '../../components/patients/ExercisePlan.svelte'
 
  
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
  
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <img
                  src="logo.png"
                  width={30}
                  height={25}
                  alt="RehabPlus Logo"
              />
            <span class="">Rehab Plus</span>
          </a>

          <!-- Notification button for future 
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
          -->
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <p
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground/70 text-sm"
          >
            
            Main Menu
          </p>
            <a
              href="/physician"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
            >
              <House class="h-5 w-5 text-primary" />
              Overview
            </a>
            <a
            href="/physician"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
          >
            <Dumbbell class="h-5 w-5 text-primary" />
            Protocols
          </a>
            <a
              href="/physician"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
            >
              <Dumbbell class="h-5 w-5 text-primary" />
              Exercises
            </a>
            <a
              href="/physician"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
            >
              <TrendingUp class="h-5 w-5 text-primary" />
             Analytics
            </a>
            <a
            href="/physician"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
          >
              <CalendarDays class="h-5 w-5 text-primary" />
              Patients
            </a>
           
          </nav>
        </div>
        <div class="mt-auto p-4">
          <Card.Root>
          
          </Card.Root>
        </div>
      </div>
    </div>
  
    <!--Mobile Menu-->
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40  w-full px-4 lg:h-[60px] lg:px-6">
        <Sheet.Root>
          <Sheet.Trigger asChild let:builder>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </Sheet.Trigger>
          <Sheet.Content side="left" class="flex flex-col">
            <nav class="grid gap-2 text-lg font-medium">
              <a href="/physician" class="flex items-center gap-2 text-lg font-semibold">
                <img
                src="logo.png"
                width={30}
                height={25}
                alt="RehabPlus Logo"
            />
                <span class="">Rehab Plus</span>
              </a>
              <a
                href="/physician"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <House class="h-5 w-5 text-primary" />
                Overview
              </a>
              <a
              href="/physician"
              class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            >
            <Dumbbell class="h-5 w-5 text-primary" />
            Protocols
            </a>
              <a
                href="/physician"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
              <Dumbbell class="h-5 w-5 text-primary" />
              Exercises
              </a>
              <a
                href="/physician"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
              <TrendingUp class="h-5 w-5 text-primary" />
              Progress
              </a>
              <a
              href="/physician"
              class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
            <TrendingUp class="h-5 w-5 text-primary" />
            Analytics
            </a>
              <a
                href="/physician"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
              <CalendarDays class="h-5 w-5 text-primary" />
              Patients
              </a>
              
            </nav>
            <div class="mt-auto">
              <Card.Root></Card.Root>
            </div>
          </Sheet.Content>
        </Sheet.Root>
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              
            </div>
          </form>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-8 w-8" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Item>
                <ThemeToggle />
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>
  
      <!-- Dashboard Content -->
      <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
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
                <div class="w-10 h-10">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="#F2C94C" />
                  </svg>
                </div>
              </div>
              <p class="mt-2 text-sm text-gray-600">Decreased from last week</p>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header class="pb-2">
              <Card.Description>This Week</Card.Description>
              <Card.Title class="text-4xl">$1329</Card.Title>
            </Card.Header>
            <Card.Content>
              <div class="text-muted-foreground text-xs">+25% from last week</div>
            </Card.Content>
            <Card.Footer>
              <Progress value={25} aria-label="25% increase" />
            </Card.Footer>
          </Card.Root>
          

          <!-- Based off their input -->
          <Card.Root>
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-sm font-medium">Patients</Card.Title>
              <Bandage class="h-4 w-4 text-muted-foreground" />
            </Card.Header>
            <Card.Content>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-2xl font-bold">96</p>
                </div>
                <div class="w-10 h-10">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="#F2C94C" />
                  </svg>
                </div>
              </div>
              <p class="mt-2 text-sm text-gray-600">Number of patients</p>
            </Card.Content>
          </Card.Root>

          <!-- Based off their input -->
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
                <div class="w-10 h-10">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="green" />
                  </svg>
                </div>
              </div>
              <p class="mt-2 text-sm text-gray-600">Number of protocols assigned</p>
            </Card.Content>
          </Card.Root>
        </div>
  
        <!--Client list.. can prob make into a component-->
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

        <!-- Upcoming Exercises -->
      
      </main>
    </div>
  </div>