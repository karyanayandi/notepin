<script lang="ts">
  import Accordion from "@/components/ui/Accordion.svelte"

  const professionals = [
    {
      title: "Digital nomad",
      content:
        "Your AI on-the-go is all you need. The power of AI at around the weight of a AA battery. The NotePin goes anywhere work takes you.",
    },
    {
      title: "Real estate agent",
      content:
        "The details are the difference between closing and not. Capture every word your client said so you can deliver exactly what they asked for.",
    },
    {
      title: "Educator",
      content:
        "Record and transcribe lectures instantly, making lesson planning and student feedback more efficient.",
    },
    {
      title: "Engineer",
      content:
        "Capture technical specifications and field observations with precision and clarity.",
    },
    {
      title: "Doctor",
      content:
        "Document patient consultations and medical observations seamlessly during your rounds.",
    },
    {
      title: "Creative worker",
      content:
        "Never lose a creative idea again - capture inspiration whenever and wherever it strikes.",
    },
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
          src="/use.jpg"
          alt="Professional using NotePin"
          class="rounded-3xl w-full"
        />
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4">Digital nomad</h3>
        <h4 class="text-3xl md:text-4xl font-bold mb-6">
          Convert conversations<br />into closing deals
        </h4>
        <p class="text-gray-600 mb-8">
          The details are the difference between closing and not. Capture every
          word your client said so you can deliver exactly what they asked for.
        </p>

        <Accordion items={professionals} />
      </div>
    </div>
  </div>
</section>
