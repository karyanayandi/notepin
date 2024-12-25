<script>
  export let variant = "primary"
  export let size = "md"
</script>

<button
  class="
    font-bold rounded-full transition-colors
    {variant === 'primary'
    ? 'bg-primary hover:bg-red-600 text-white'
    : 'text-white hover:text-primary'}
    {size === 'lg' ? 'py-3 px-8' : 'py-2 px-6'}
  "
  on:click
>
  <slot />
</button>
