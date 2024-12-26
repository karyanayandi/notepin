<script>
  const colors = [
    { id: 1, hex: "#FFFFFF", name: "White", selected: true },
    { id: 2, hex: "#000000", name: "Black", selected: false },
    { id: 3, hex: "#C0C0C0", name: "Silver", selected: false },
  ]

  function selectColor(id) {
    colors.forEach((color) => (color.selected = color.id === id))
  }
</script>

<section class="py-24 bg-white">
  <div class="max-w-6xl mx-auto px-4 text-center">
    <div class="flex justify-center mb-12">
      <img src="/notepin-device.png" alt="NotePin Device" class="w-32 h-auto" />
    </div>

    <div class="flex justify-center gap-4 mb-8">
      {#each colors as color}
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <button
          class="w-12 h-12 rounded-full border-2 transition-transform hover:scale-110"
          style="background-color: {color.hex}; border-color: {color.selected
            ? '#FF4D4D'
            : 'transparent'}"
          on:click={() => selectColor(color.id)}
        />
      {/each}
    </div>
  </div>
</section>
