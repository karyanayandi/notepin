<script>
  import { fade } from "svelte/transition"

  import VideoModal from "@/components/ui/VideoModal.svelte"

  const videoId = "LVm3YG7hdQQ"
</script>

<section class="relative h-screen flex items-center text-white overflow-hidden">
  <div class="absolute inset-0 z-0">
    <img
      src="/hero.jpg"
      alt="Hero background"
      class="w-full h-full object-cover brightness-50"
    />
  </div>

  <div
    class="text-center md:text-left relative z-10 w-full max-w-full mx-auto md:px-24"
    in:fade
  >
    <div class="max-w-4xl">
      <h1 class="text-4xl md:text-5xl mb-6">
        The World's Most Wearable AI Voice Recorder
      </h1>
      <h2 class="text-5xl md:text-8xl mb-8">
        PLAUD<br />NotePin
      </h2>
      <button
        class="bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-colors"
      >
        Pre-order Now
      </button>
    </div>
  </div>

  <div class="absolute bottom-8 right-8 z-10">
    <VideoModal {videoId} />
  </div>
</section>
