<script lang="ts">
  import { writable } from "svelte/store"
  import { slide } from "svelte/transition"

  const professionals = [
    {
      title: "Digital nomad",
      subtitle: "1,000+ ideas and notes that travel light",
      content:
        "Your AI on-the-go is all you'll need. The power of AI at around the weight of a AA battery, the NotePin goes anywhere work takes you.",
      image: "/professionals/digital-nomad.webp",
    },
    {
      title: "Real estate agent",
      subtitle: "Convert conversations into closing deals",
      content:
        "The details are the difference between closing and not. Capture every word your client said so you can deliver exactly what they asked for.",
      image: "/professionals/real-estate-agent.webp",
    },
    {
      title: "Educator",
      subtitle: "Educating better starts with better insights",
      content:
        "Record, recall, review so you can improve your training programs and provide post session transcripts.",
      image: "/professionals/educator.webp",
    },
    {
      title: "Engineer",
      subtitle: "Designed to keep you on track and on time",
      content:
        "You build, we'll handle your meetings. Even when there's no network, NotePin captures everything, so your project is on schedule.",
      image: "/professionals/engineer.webp",
    },
    {
      title: "Doctor",
      subtitle: "Accurate summaries for healthier patients",
      content:
        "When it comes to health care, no detail can be missed. Capture every word with just one press. NotePin ensures better care and patient health.",
      image: "/professionals/doctor.webp",
    },
    {
      title: "Creative worker",
      subtitle: "Always ready to capture your next great idea",
      content:
        "We do your busy work so you can focus on creative work. AI powered summaries and insights means we took the mundane out of each job.",
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

<section class="py-12 md:py-24 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
      AI notetaker for all professionals
    </h2>
    <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div class="relative">
        {#key $currentImage}
          <img
            src={$currentImage}
            alt="Professional using NotePin"
            class="rounded-[12.5rem] w-full"
          />
        {/key}
      </div>
      <div>
        <div class="space-y-2 md:px-20">
          {#each professionals as item, index}
            <div class="border-b border-gray-200">
              <button
                class="w-full flex items-center justify-between py-4 text-left group hover:text-primary transition-colors"
                on:click={() => toggleItem(index)}
              >
                <span class="text-lg">{item.title}</span>
                <span
                  class="text-primary text-2xl font-bold transition-transform duration-200"
                >
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {#if activeIndex === index}
                <div
                  class="py-4 md:py-8 space-y-2 md:space-y-4"
                  transition:slide
                >
                  <p class="text-2xl md:text-4xl">{item.subtitle}</p>
                  <p>{item.content}</p>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="space-y-4 my-8 md:my-20">
    <p class="text-xl md:text-2xl text-center">
      And more professional use cases
    </p>
    <p class="text-xl md:text-2xl text-center">......</p>
  </div>
</section>
