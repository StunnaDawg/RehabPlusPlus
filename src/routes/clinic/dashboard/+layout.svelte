<script lang="ts">
	import '../../../app.css';
	import {
		CircleUser,
		House,
		Menu,
		Dumbbell,
		UserPlusIcon,
		BookOpenText,
		ChartNoAxesCombined
	} from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Sheet from '$lib/components/ui/sheet/index';
	import ThemeToggle from '../../../components/ThemeToggle.svelte';
	import { ModeWatcher } from 'mode-watcher';

	type NavItem = {
		href: string;
		label: string;
		icon: any; 
	};

	const navItems: NavItem[] = [  
		{ href: '/clinic/dashboard', label: 'Overview', icon: House },
		{ href: '/clinic/dashboard/practitioners', label: 'Practitioners', icon: UserPlusIcon},
    	{ href: '/clinic/dashboard/patients', label: 'Patients', icon: UserPlusIcon},
		{ href: '/clinic/dashboard', label: 'Protocols', icon: BookOpenText },
		{ href: '/clinic/dashboard', label: 'Analytics', icon: ChartNoAxesCombined },

	];

	const mobileNavItems: NavItem[] = [
		{ href: '/clinic/dashboard', label: 'Overview', icon: House },
		{ href: '/clinic/dashboard/practitioners', label: 'Practitioners', icon: UserPlusIcon},
    	{ href: '/clinic/dashboard/patients', label: 'Patients', icon: UserPlusIcon},
		{ href: '/clinic/dashboard', label: 'Protocols', icon: BookOpenText },
		{ href: '/clinic/dashboard', label: 'Analytics', icon: ChartNoAxesCombined }, 
	];
</script>

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	<div class="hidden border-r border-muted  bg-muted/40 md:block">
		<div class="flex h-full max-h-screen flex-col gap-2">
			<div class="flex h-14 items-center border-b border-muted  px-4 lg:h-[60px] lg:px-6">
				<a href="/" class="flex items-center gap-2 font-semibold">
					<img src="/logo.png" width={30} height={25} alt="RehabPlus Logo" />
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
					<p class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground/70">
						Main Menu
					</p>
					{#each navItems as { href, label, icon }}
						<a
							{href}
							class="flex items-center gap-3 rounded-lg px-3 py-2 text-lg text-muted-foreground transition-all hover:bg-blue-100 hover:text-primary"
						>
							<svelte:component this={icon} class="h-5 w-5 text-primary" />
							{label}
						</a>
					{/each}
				</nav>
			</div>
			<div class="mt-auto p-4">
				<Card.Root></Card.Root>
			</div>
		</div>
	</div>

	<!--Mobile Menu-->
	<div class="flex flex-col overflow-x-hidden">
		<header
			class="flex h-14 w-full items-center gap-4 border-muted border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"
		>
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
						<Menu class="h-5 w-5" />
						<span class="sr-only">Toggle navigation menu</span>
					</Button>
				</Sheet.Trigger>
				<Sheet.Content side="left" class="flex flex-col">
					<nav class="grid gap-2 text-lg font-medium">
						<a href="/clinic/dashboard" class="flex items-center gap-2 text-lg font-semibold">
							<img src="logo.png" width={30} height={25} alt="RehabPlus Logo" />
							<span class="">Rehab Plus</span>
						</a>
						{#each mobileNavItems as { href, label, icon }}
							<a
								{href}
								class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
							>
								<svelte:component this={icon} class="h-5 w-5 text-primary" />
								{label}
							</a>
						{/each}
					</nav>
					<div class="mt-auto">
						<Card.Root></Card.Root>
					</div>
				</Sheet.Content>
			</Sheet.Root>
			<div class="w-full flex-1">
				<form>
					<div class="relative"></div>
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
					<DropdownMenu.Item href="/auth/logout">Log Out</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>

		<!-- Dashboard Content -->
		<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
			<slot />
		</main>
	</div>
</div>

<ModeWatcher />
