<script setup lang="ts">
useSeoMeta({
  title: 'Astronomy Picture of the Day',
});
</script>

<template>
  <div class="p-4 space-y-8">
    <main class="lg:flex gap-4">
      <section class="p-8 bg-slate-700 lg:w-3/5">
        <ApodDefault />
      </section>

      <aside class="p-4 lg:w-2/5">
        <ApodGallery />
      </aside>
    </main>

    <aside class="p-8 bg-black/25">
      <MarsGallery />
    </aside>
  </div>
</template>
