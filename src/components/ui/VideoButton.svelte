<script>
  import { dispatch } from "svelte"
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
  class="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 group"
  on:click={() => dispatch("click")}
>
  <div class="relative w-16 h-16 flex items-center justify-center">
    <div class="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
    <div class="relative bg-white rounded-full p-4">
      <svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
</button>
