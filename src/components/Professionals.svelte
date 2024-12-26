<script lang="ts">
  import { writable } from "svelte/store"
  import { slide } from "svelte/transition"

  const professionals = [
    {
      title: "Digital nomad",
      content:
        "Your AI on-the-go is all you need. The power of AI at around the weight of a AA battery. The NotePin goes anywhere work takes you.",
      image: "/professionals/digital-nomad.webp",
    },
    {
      title: "Real estate agent",
      content:
        "The details are the difference between closing and not. Capture every word your client said so you can deliver exactly what they asked for.",
      image: "/professionals/real-estate-agent.webp",
    },
    {
      title: "Educator",
      content:
        "Record and transcribe lectures instantly, making lesson planning and student feedback more efficient.",
      image: "/professionals/educator.webp",
    },
    {
      title: "Engineer",
      content:
        "Capture technical specifications and field observations with precision and clarity.",
      image: "/professionals/engineer.webp",
    },
    {
      title: "Doctor",
      content:
        "Document patient consultations and medical observations seamlessly during your rounds.",
      image: "/professionals/doctor.webp",
    },
    {
      title: "Creative worker",
      content:
        "Never lose a creative idea again - capture inspiration whenever and wherever it strikes.",
      image: "/professionals/creative-worker.webp",
    },
  ]

  const currentImage = writable(professionals[0].image)

  let activeIndex: number | null = null

  function toggleItem(index: number) {
    activeIndex = activeIndex === index ? null : index
    if (activeIndex !== null) {
      currentImage.set(professionals[activeIndex].image)
    } else {
      currentImage.set(professionals[0].image)
    }
  }
</script>

<section class="py-24 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
      AI notetaker for all professionals
    </h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="relative">
        {#key $currentImage}
          <img
            src={$currentImage}
            alt="Professional using NotePin"
            class="rounded-3xl w-full"
          />
        {/key}
      </div>
      <div>
        <div class="space-y-2">
          {#each professionals as item, index}
            <div class="border-b border-gray-200">
              <button
                class="w-full flex items-center justify-between py-4 text-left group hover:text-primary transition-colors"
                on:click={() => toggleItem(index)}
              >
                <span class="text-lg">{item.title}</span>
                <span
                  class="text-primary text-2xl font-light transition-transform duration-200"
                  style:transform="rotate({activeIndex === index
                    ? '45deg'
                    : '0deg'})"
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {#if activeIndex === index}
                <div class="pb-4" transition:slide>
                  <p class="text-gray-600">{item.content}</p>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
