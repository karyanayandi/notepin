<script>
  const wearStyles = [
    { name: "Wristband", image: "/wristband.jpg" },
    { name: "Necklace", image: "/necklace.jpg" },
    { name: "Clip", image: "/clip.jpg" },
  ]
</script>

<section class="py-24 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
      Wear your AI<br />your way
    </h2>

    <p class="text-center text-xl text-gray-600 mb-16">
      Versatility at its best—wear it as a necklace, a wristband, a clip, or a
      pin.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each wearStyles as style}
        <div class="rounded-3xl overflow-hidden">
          <img
            src={style.image}
            alt={style.name}
            class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      {/each}
    </div>
  </div>
</section>
