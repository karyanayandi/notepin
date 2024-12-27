<script>
  import { onMount } from "svelte"

  import CartIcon from "@/components/CartIcon.svelte"

  let isScrolled = false

  onMount(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features")
      const featuresTop = featuresSection.getBoundingClientRect().top
      isScrolled = featuresTop <= 0
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
</script>

<nav
  class="fixed w-full z-50"
  class:bg-black={isScrolled}
  class:bg-transparent={!isScrolled}
>
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <div class="text-white font-bold text-2xl">PLAUD</div>
      <div class="flex items-center space-x-8">
        <CartIcon />
      </div>
    </div>
  </div>
</nav>
