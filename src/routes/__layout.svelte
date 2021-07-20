<script>
  import "virtual:windi.css";

  import { onMount } from "svelte";

  import AppHeader from "~/components/AppHeader.svelte";

  if (!import.meta.env.PROD) {
    onMount(() => {
      // @ts-ignore
      import("virtual:windi-devtools");
    });
  }
</script>

<AppHeader />

<main class="p-4">
  <slot />
</main>
