<script lang="ts">
  import type { Icon as LucideIcon } from "lucide-svelte"

  type Props = {
    Icon: typeof LucideIcon
  }

  export const { Icon }: Props = $props()
</script>

<Icon />
