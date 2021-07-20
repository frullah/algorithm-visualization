<script>
  import { onMount } from "svelte";

  import "virtual:windi.css";

  if (!import.meta.env.PROD) {
    onMount(() => {
      // @ts-ignore
      import("virtual:windi-devtools");
    });
  }
</script>

<main class="p-4">
  <slot />
</main>
