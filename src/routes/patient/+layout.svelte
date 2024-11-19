<script lang="ts">
	import '../../app.css';
	import ThemeToggle from '../../components/ThemeToggle.svelte';
	import { ModeWatcher } from 'mode-watcher';


</script>

<slot />
<ModeWatcher />
