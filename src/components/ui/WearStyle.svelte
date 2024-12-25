<script>
  export let name
  export let image
</script>

<div class="rounded-3xl overflow-hidden">
  <img
    src={image}
    alt={name}
    class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
