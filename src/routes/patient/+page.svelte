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
		<!-- Dashboard Content -->
		<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8">
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
  
		</main>
