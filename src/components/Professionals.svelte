<script lang="ts">
  const professionals = [
    "Real estate agent",
    "Educator",
    "Engineer",
    "Doctor",
    "Creative worker",
  ]
</script>

<section class="py-24 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
      AI notetaker for all professionals
    </h2>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="relative">
        <img
          src="/professional.jpg"
          alt="Professional using NotePin"
          class="rounded-3xl w-full"
        />
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4">Digital nomad</h3>
        <h4 class="text-3xl md:text-4xl font-bold mb-6">
          1,000+ ideas and notes<br />that travel light
        </h4>
        <p class="text-gray-600 mb-8">
          Your AI on-the-go is all you need. The power of AI at around the
          weight of a AA battery. The NotePin goes anywhere work takes you.
        </p>

        <div class="space-y-4">
          {#each professionals as prof}
            <div
              class="flex items-center justify-between py-3 border-b border-gray-200"
            >
              <span class="text-lg">{prof}</span>
              <span class="text-primary">+</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
