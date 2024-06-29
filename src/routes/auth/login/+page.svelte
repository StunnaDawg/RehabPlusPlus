<script>
	import Card from '$lib/components/ui/card/card.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<Card>
	<CardHeader>Login to the site!</CardHeader>
	<CardContent>
		<Button href="/auth/login/github">Login to the site</Button>
	</CardContent>
</Card>
