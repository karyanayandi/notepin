<script lang="ts">
  import { fade } from "svelte/transition"

  let opened = $state(false)
  const { videoId } = $props()
</script>

{#if opened}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class="fixed inset-0 bg-black/80 z-10 flex items-center justify-center p-4"
    role="dialog"
    transition:fade
    onclick={() => (opened = false)}
  >
    <div class="relative w-full max-w-4xl aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
        class="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
        onclick={() => (opened = false)}
      >
        <svg
          class="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
{/if}
<button
  aria-label="Play video"
  class="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 group"
  onclick={() => (opened = true)}
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
