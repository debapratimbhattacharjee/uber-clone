<template>
  <div id="Home" class="flex flex-col h-screen">
    <div class="m-3 mb-auto">
      <!-- Grid layout for services -->
      <div class="grid grid-cols-2 gap-4 my-4">
        <ServiceSelectLarge
          text="Ride"
          imagewidth="100"
          image="ride"
        />
        <ServiceSelectLarge
          text="Food"
          imagewidth="100"
          image="food"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceSelectLarge from '@/components/ServiceSelectLarge.vue';
</script>

<style scoped>
/* Grid-specific styles */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  gap: 19px; /* Space between items */
}

#Home {
  padding: 10px;
}
</style>
