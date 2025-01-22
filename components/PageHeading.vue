<script setup lang="ts">
defineProps<{ tag: string }>();
</script>

<template>
  <component :is="tag" class="uppercase tracking-wide text-slate-400">
    <slot />
  </component>
</template>
