<script>

	import { CircleUser, ChartLine, Package, House, ShoppingCart, Bell, Activity, ArrowUpRight, CreditCard, DollarSign, Menu, Package2, Search, Users, Dumbbell, TrendingUp, CalendarDays, Bandage, Bike  } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Input } from '$lib/components/ui/input/index';
	import * as Sheet from '$lib/components/ui/sheet/index';
  
	import ThemeToggle from "../../components/ThemeToggle.svelte";
  
	import ExercisePlan from '../../components/patients/ExercisePlan.svelte'
   
	
	// Sample data
	const exerciseStats = {
	  completed: 24,
	  total: 30,
	  streak: 5
	};
  
	const exerciseList = [
	  { name: 'Push Up'},
	  { name: 'Pull Up'},
	  { name: 'Bench Press'},
  ]
	
	const painProgress = [
	  { week: 'Week 1', pain: 7, mobility: 4 },
	  { week: 'Week 2', pain: 5, mobility: 5 },
	  { week: 'Week 3', pain: 4, mobility: 7 },
	  { week: 'Week 4', pain: 2, mobility: 8 }
	];
	
	const upcomingExercises = [
	  { name: 'Shoulder Rotation', duration: '15 mins', time: '2:00 PM' },
	  { name: 'Wrist Flexion', duration: '10 mins', time: '3:30 PM' },
	  { name: 'Finger Stretches', duration: '10 mins', time: '5:00 PM' }
	];
  
	const numberOfWeeks = 2;
  
	</script>
	
	<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	  <div class="hidden border-r border-muted bg-muted/40 md:block">
		<div class="flex h-full max-h-screen flex-col gap-2">
		  <div class="flex h-14 items-center border-b border-muted px-4 lg:h-[60px] lg:px-6">
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
				href="/patient"
				class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
			  >
				<House class="h-5 w-5 text-primary" />
				Overview
			  </a>
			  <a
				href="/patient/exercises"
				class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
			  >
				<Dumbbell class="h-5 w-5 text-primary" />
				Exercises
			  </a>
			  <a
				href="/patient/progress"
				class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
			  >
				<TrendingUp class="h-5 w-5 text-primary" />
				Progress
			  </a>
			  <a
			  href="/patient/resources"
			  class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground text-lg transition-all hover:text-primary hover:bg-blue-100"
			>
				<CalendarDays class="h-5 w-5 text-primary" />
				Resources
			  </a>
			 
			</nav>
		  </div>
		  <div class="mt-auto p-4"></div>
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
				<a href="##" class="flex items-center gap-2 text-lg font-semibold">
				  <img
				  src="logo.png"
				  width={30}
				  height={25}
				  alt="RehabPlus Logo"
			  />
				  <span class="">Rehab Plus</span>
				</a>
				<a
				  href="/patient"
				  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
				>
				  <House class="h-5 w-5 text-primary" />
				  Overview
				</a>
				<a
				  href="/patient/exercises"
				  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
				>
				<Dumbbell class="h-5 w-5 text-primary" />
				Exercises
				</a>
				<a
				  href="/patient/progress"
				  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
				>
				<TrendingUp class="h-5 w-5 text-primary" />
				Progress
				</a>
				<a
				  href="/patient/resources"
				  class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
				>
				<CalendarDays class="h-5 w-5 text-primary" />
				Resources
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
			  <DropdownMenu.Item><ThemeToggle /></DropdownMenu.Item>
			  <DropdownMenu.Separator />
			  <DropdownMenu.Item>Logout</DropdownMenu.Item>
			</DropdownMenu.Content>
		  </DropdownMenu.Root>
		</header>
	
		<!-- Dashboard Content -->
		<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
		  <!-- Stats Cards -->
		  <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
			<!-- Daily streak = how many days they login in a row -->
			<Card.Root>
			  <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Daily Streak</Card.Title>
				<Activity class="h-4 w-4 text-muted-foreground" />
			  </Card.Header>
			  <Card.Content>
				<div class="text-2xl font-bold">{exerciseStats.streak} days</div>
				<p class="mt-2 text-sm text-primary">Keep up the great work!</p>
			  </Card.Content>
			</Card.Root>
  
			<!-- Based off their input -->
			<Card.Root>
			  <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Pain Level</Card.Title>
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
  
			<!-- Based off their input -->
			<Card.Root>
			  <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Mobility</Card.Title>
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
				<p class="mt-2 text-sm text-gray-600">Increased from last week</p>
			  </Card.Content>
			</Card.Root>
		  </div>
	
		  <!-- Protocol Weekly Exercise Chart -->
		  <Card.Root class="flex ">
			<Card.Header class="flex flex-col"> 
			  <Card.Title class="text-4xl font-bold">Current Protocol</Card.Title>
			  <Card.Header class="flex space-y-0 pb-2">
				<Card.Content class="flex items-start justify-start -my-8 -mx-12">
				  <ExercisePlan {numberOfWeeks} />
				</Card.Content>
			  </Card.Header>
			</Card.Header>
		  </Card.Root>
  
		  <!-- Upcoming Exercises -->
		
		</main>
	  </div>
	</div>
