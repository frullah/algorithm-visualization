<script lang="typescript" type="text/javascript">
  import Button from "./Button.svelte";
  import Status, { SolvingStatus } from "./SolvingStatus.svelte";

  let oldData = null;
  let data = [7, 3, 2, 6, 1];
  let status = SolvingStatus.Unsolved;

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function sort() {
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i] > data[j]) {
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          await sleep(200);
        }
      }
    }
  }

  async function solve() {
    oldData = [...data];
    status = SolvingStatus.Processing;
    await sort();
    status = SolvingStatus.Solved;
  }

  function reset() {
    data = oldData;
    status = SolvingStatus.Unsolved;
  }
</script>

<h2 class="text-xl mb-4">Bubble Sort</h2>

<div class="fixed bottom-0 px-2 py-2 inset-x-0 border-t-2">
  {#if status != SolvingStatus.Solved}
    <Button
      class="bg-green-700"
      on:click={solve}
      disabled={status == SolvingStatus.Processing}>Solve</Button
    >
  {:else}
    <Button class="bg-red-700" on:click={reset}>Reset</Button>
  {/if}
</div>

<Status {status} />

<ul class="my-4 flex items-end">
  {#each data as value, i}
    <li>
      <div class="border border-gray-700 w-3" style="height: {value * 10}pt" />
    </li>
  {/each}
</ul>
