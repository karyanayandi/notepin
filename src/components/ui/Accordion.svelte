<script lang="ts">
  import { writable } from "svelte/store"
  import { slide } from "svelte/transition"

  export let items: { title: string; content: string; image: string }[] = []
  export let onchange: (index: number | null) => void

  const activeIndex = writable<number | null>(null)

  function toggleItem(index: number) {
    activeIndex.update((current) => {
      const newIndex = current === index ? null : index
      onchange(newIndex)
      return newIndex
    })
  }
</script>

<div class="space-y-2">
  {#each items as item, index}
    <div class="border-b border-gray-200">
      <button
        class="w-full flex items-center justify-between py-4 text-left group hover:text-primary transition-colors"
        on:click={() => toggleItem(index)}
      >
        <span class="text-lg">{item.title}</span>
        <span
          class="text-primary text-2xl font-light transition-transform duration-200"
          style:transform="rotate({$activeIndex === index ? '45deg' : '0deg'})"
        >
          {$activeIndex === index ? "−" : "+"}
        </span>
      </button>
      {#if $activeIndex === index}
        <div class="pb-4" transition:slide>
          <p class="text-gray-600">{item.content}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>
