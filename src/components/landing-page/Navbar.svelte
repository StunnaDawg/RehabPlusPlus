<script>
	import { clsx } from 'clsx';

	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import ThemeToggle from '../ThemeToggle.svelte';
	import { onMount } from 'svelte';
	let state = false;
	/**
	 * @type {HTMLElement}
	 */
	let navRef;

	// Navigation links
	const navigation = [
		{ title: 'Solutions', path: '/' },
		{ title: 'Features', path: '/' },
		{ title: 'Pricing', path: '/' },
		{ title: 'Resources', path: '/' },
		{ title: 'Contact', path: '/' }
	];

	onMount(() => {
		const body = document.body;

		// Sticky nav logic
		const customBodyStyle = ['overflow-hidden', 'lg:overflow-visible'];
		const customStyle = ['sticky-nav', 'fixed', 'border-b'];

		const handleScroll = () => {
			if (window.scrollY > 80) {
				navRef.classList.add(...customStyle);
			} else {
				navRef.classList.remove(...customStyle);
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Cleanup event listener when component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMenu() {
		state = !state;
		const body = document.body;
		const customBodyStyle = ['overflow-hidden', 'lg:overflow-visible'];
		if (state) body.classList.add(...customBodyStyle);
		else body.classList.remove(...customBodyStyle);
	}
</script>

<nav bind:this={navRef} class="top-0 z-20 w-full bg-background shadow-md">
	<div
		class="relative mx-auto flex max-w-screen-xl items-center justify-between px-4 md:px-8 lg:h-16"
	>
		<!-- Ensure relative positioning -->

		<!-- Left side: Logo -->
		<div class="absolute left-0 flex items-center">
			<a href="/">
				<img src="logo.png" width={50} height={50} alt="RehabPlus Logo" />
			</a>
			<div class="lg:hidden">
				<button
					class="rounded-md p-2 text-primary outline-none focus:border focus:border-gray-400"
					on:click={toggleMenu}
				>
					{#if state}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width={2}
								d="M4 8h16M4 16h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Center: Navigation Links -->
		<div class="flex flex-1 items-center justify-center">
			<ul class="flex space-x-6">
				{#each navigation as item}
					<li class="font-bold tracking-wide text-primary hover:text-primary/60">
						<a href={item.path}>{item.title}</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Right side: Buttons and Theme Toggle -->
		<div class="absolute right-0 flex items-center space-x-6">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger><Button variant="default">Login</Button></DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Item>
							<a href="/">Healthcare Login</a>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<a href="/auth/login">Patient Login</a>
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<Button>Book a Demo</Button>
			<ThemeToggle />
		</div>
	</div>
</nav>
