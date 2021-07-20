<script>
  let klass;

  export { klass as class };
</script>

<button
  class="px-4 py-2 text-white rounded disabled:cursor-not-allowed {klass}"
  {...$$restProps}
  on:click
>
  <slot />
</button>
