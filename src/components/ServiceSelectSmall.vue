<template>
  <div id="ServiceSetupSmall">
    <div 
      class="
        bg-gray-100 
        custom-height 
        w-full 
        rounded-xl 
        shadow-sm 
        relative 
        hover:bg-gray-200 
        transition-all 
        cursor-pointer
      "
    >
      <!-- Image -->
      <div 
        class="
          absolute 
          top-1/2 
          left-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/2
        "
      >
        <img :src="'img/uber/' + image + '.png'" alt="Service Icon" width="40">
      </div>
    </div>

    <!-- Label -->
    <div class="text-sm font-medium text-center mt-2 text-gray-800">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  text: String,
  image: String,
});
const { text, image } = toRefs(props);
</script>

<style scoped lang="scss">
#ServiceSetupSmall {
  .custom-height {
    height: 70px;
  }
  .hover\:bg-gray-200:hover {
    background-color: #e5e7eb;
  }
  .shadow-sm {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
