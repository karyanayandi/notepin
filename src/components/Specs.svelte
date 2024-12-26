<script>
  const specs = [
    {
      title: "Battery Life",
      description: "24+ hours of continuous use",
      icon: "/icons/battery.svg",
    },
    {
      title: "Weight",
      description: "Less than 20 grams",
      icon: "/icons/weight.svg",
    },
    {
      title: "Storage",
      description: "32GB built-in memory",
      icon: "/icons/storage.svg",
    },
  ]
</script>

<section class="py-24 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
      Technical Specifications
    </h2>

    <div class="grid md:grid-cols-3 gap-8">
      {#each specs as spec}
        <div class="text-center">
          <div class="mb-4">
            <img src={spec.icon} alt={spec.title} class="w-12 h-12 mx-auto" />
          </div>
          <h3 class="text-xl font-bold mb-2">{spec.title}</h3>
          <p class="text-gray-600">{spec.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
