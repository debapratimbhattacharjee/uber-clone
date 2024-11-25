<template>
  <div id="ServiceSetupLarge">
    <div 
      class="
        bg-gray-100 
        custom-height 
        w-full 
        rounded-2xl 
        shadow-md 
        relative 
        hover:bg-gray-200 
        transition-all 
        cursor-pointer
      "
    >
      <!-- Promo Badge -->
      <div v-if="promo" class="absolute top-2 right-2 z-10">
        <span 
          class="
            bg-green-700 
            text-gray-100 
            px-2 
            py-1 
            text-xs 
            rounded-full 
            shadow-sm
          "
        >
          Promo
        </span>
      </div>

      <!-- Content -->
      <div class="flex justify-between items-center h-full p-4">
        <!-- Text -->
        <div class="text-base font-medium text-gray-800">
          {{ text }}
        </div>
        <!-- Image -->
        <div class="mr-1">
          <img :width="imageWidth" :src="'img/uber/' + image + '.png'" alt="Service Icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  text: String,
  imageWidth: {
    type: Number,
    default: 64,
  },
  image: String,
  promo: {
    type: Boolean,
    default: false,
  },
});
const { text, imageWidth, image, promo } = toRefs(props);
</script>

<style scoped lang="scss">
#ServiceSetupLarge {
  .custom-height {
    height: 100px;
  }
  .hover\:bg-gray-200:hover {
    background-color: #e5e7eb;
  }
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
