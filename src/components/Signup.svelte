<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import * as Card from '$lib/components/ui/card/index';
	import { enhance } from '$app/forms';
</script>

<div class="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="hidden bg-muted lg:col-span-1 lg:block">
		<img
			src="/loginbackground.jpeg"
			alt="placeholder"
			width="1920"
			height="1080"
			class="h-full w-full object-cover dark:brightness-[0.5]"
		/>
	</div>
	<div class="flex items-center justify-center py-12">
		<Card.Root class="min-w-sm mx-auto grid max-w-[500px] gap-6">
			<Card.Header class="grid gap-2 text-center">
				<Card.Title class="text-3xl font-bold">Sign Up</Card.Title>
				<Card.Description class="text-balance text-muted-foreground"
					>Enter your information to register an account</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<form method="POST" use:enhance>
					<div class="grid grid-cols-2 gap-4">
						<div class="grid gap-2">
							<Form.Field {form} name="first_name">
								<Form.Control let:attrs>
									<Form.Label>First Name</Form.Label>
									<Input {...attrs} bind:value={$formData.first_name} />
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>
						</div>
						<div class="grid gap-2">
							<Form.Field {form} name="last_name">
								<Form.Control let:attrs>
									<Form.Label>Last Name</Form.Label>
									<Input {...attrs} bind:value={$formData.last_name} />
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>
						</div>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="email">
							<Form.Control let:attrs>
								<Form.Label>Email</Form.Label>
								<Input {...attrs} bind:value={$formData.email} type="email" />
							</Form.Control>
							<Form.Description>This is your email and username.</Form.Description>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="password">
							<Form.Control let:attrs>
								<Form.Label>Password</Form.Label>
								<Input {...attrs} bind:value={$formData.password} type="password" />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<Form.Button type="submit" class="w-full">Register an account</Form.Button>
				</form>
				
					<div class="mt-4 flex items-center">
						<hr class="flex-grow border-t border-gray-300" />
						<span class="mx-2 text-gray-500">OR</span>
						<hr class="flex-grow border-t border-gray-300" />
					</div>
					<h3 class="text-center text-sm text-muted-foreground">Register with</h3>
					<div class="grid grid-cols-2 items-center gap-4 text-center text-sm">
						<Button href="/auth/login/github" variant="outline" class="items-center gap-2" size="sm"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								{...$$props}
							>
								<path
									fill="black"
									d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/>
							</svg><span>Github</span></Button
						>
						<Button href="/auth/login/google" variant="outline" class="items-center gap-2" size="sm"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="0.96em"
								height="1em"
								viewBox="0 0 488 512"
								{...$$props}
							>
								<path
									fill="black"
									d="M488 261.8C488 403.3 391.1 504 248 504C110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6c98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4"
								/>
							</svg>
							<span class="">Google</span></Button
						>
						<Button href="/auth/login/apple" variant="outline" class="items-center gap-2" size="sm"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="0.75em"
								height="1em"
								viewBox="0 0 384 512"
								{...$$props}
							>
								<path
									fill="black"
									d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8c-18.8-26.9-47.2-41.7-84.7-44.6c-35.5-2.8-74.3 20.7-88.5 20.7c-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2c25.2-.6 43-17.9 75.8-17.9c31.8 0 48.3 17.9 76.4 17.9c48.6-.7 90.4-82.5 102.6-119.3c-65.2-30.7-61.7-90-61.7-91.9m-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5c-24.1 1.4-52 16.4-67.9 34.9c-17.5 19.8-27.8 44.3-25.6 71.9c26.1 2 49.9-11.4 69.5-34.3"
								/>
							</svg><span>Apple</span></Button
						>
						<Button href="/auth/login/apple" variant="outline" class="items-center gap-2" size="sm"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								{...$$props}
							>
								<path
									fill="black"
									d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a7 7 0 0 0 .265.86a5.3 5.3 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927c1.497 0 2.633-.671 3.965-2.444c.76-1.012 1.144-1.626 2.663-4.32l.756-1.339l.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314c1.046.987 1.992 1.22 3.06 1.22c1.075 0 1.876-.355 2.455-.843a3.7 3.7 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745c0-2.72-.681-5.357-2.084-7.45c-1.282-1.912-2.957-2.93-4.716-2.93c-1.047 0-2.088.467-3.053 1.308c-.652.57-1.257 1.29-1.82 2.05c-.69-.875-1.335-1.547-1.958-2.056c-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999c1.132 1.748 1.647 4.195 1.647 6.4c0 1.548-.368 2.9-1.839 2.9c-.58 0-1.027-.23-1.664-1.004c-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a45 45 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327c1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446c.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338c-1.191 1.649-1.81 1.817-2.486 1.817c-.524 0-1.038-.237-1.383-.794c-.263-.426-.464-1.13-.464-2.046c0-2.221.63-4.535 1.66-6.088c.454-.687.964-1.226 1.533-1.533a2.26 2.26 0 0 1 1.088-.285"
								/>
							</svg><span>Meta</span></Button
						>
					</div>
				<div class="mt-4 text-center text-sm">
					Already have an account?
					<a href="/auth/login" class="underline"> Sign In </a>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
