<script setup lang="ts">
defineProps<{ tag: string }>();
</script>

<template>
  <component :is="tag" class="uppercase tracking-wide text-white/40">
    <slot />
  </component>
</template>
