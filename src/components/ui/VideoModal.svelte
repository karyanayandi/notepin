<script>
  import { fade } from "svelte/transition"

  export let videoId
  export let isOpen = false

  function closeModal() {
    isOpen = false
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 bg-black/80 z-10 flex items-center justify-center p-4"
    on:click={closeModal}
    transition:fade
  >
    <div
      class="relative w-full max-w-4xl aspect-video"
      on:click|stopPropagation
    >
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
        on:click={closeModal}
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
