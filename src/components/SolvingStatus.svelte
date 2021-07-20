<script context="module" lang="ts">
  export enum SolvingStatus {
    Unsolved,
    Solved,
    Processing,
  }

</script>
<script lang="ts">
  export let status: SolvingStatus;
</script>

<h3
  class={status == SolvingStatus.Unsolved
    ? "bg-red-200"
    : status == SolvingStatus.Processing
    ? "bg-orange-200"
    : "bg-green-200"}
>
  Status : {SolvingStatus[status]}
</h3>
