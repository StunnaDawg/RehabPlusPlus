<script lang="ts">
    import type { PageData } from "./$types.js";
    import SignUpForm from "./SignUpForm.svelte";
    export let data: PageData;
  </script>
   
  <SignUpForm data={data.form} />
