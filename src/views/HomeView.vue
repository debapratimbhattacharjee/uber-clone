<template>
  <div id="Home" class="flex flex-col h-screen bg-gray-100">
    <div class="m-4 mb-auto text-center">

      <!-- Uber Logo -->
      <div class="my-16">
        <img width="150" src="img/uber/uber2.svg" class="mx-auto" />
      </div>

      <!-- Service Options (Large Icons) -->
      <div class="grid grid-cols-2 gap-4 my-6">
        <ServiceSelectLarge
          @click="router.push('/directions')" 
          text="Ride"
          imageWidth="80"
          image="ride"
          class="shadow-lg rounded-lg"
        />
        <ServiceSelectLarge
          text="Food"
          imageWidth="72"
          image="food"
          :promo="true"
          class="shadow-lg rounded-lg"
        />
      </div>

      <!-- Additional Services (Small Icons) -->
      <div class="grid grid-cols-4 gap-4 my-4">
        <ServiceSelectSmall
          text="2 Wheels"
          image="2wheels"
          class="shadow-md rounded-md"
        />
        <ServiceSelectSmall
          text="Transit"
          image="transit"
          class="shadow-md rounded-md"
        />
        <ServiceSelectSmall
          text="Reserve"
          image="reserve"
          class="shadow-md rounded-md"
        />
        <ServiceSelectSmall
          text="Travel"
          image="travel"
          class="shadow-md rounded-md"
        />
      </div>

      <!-- Search Box -->
      <div 
        @click="router.push('/directions')" 
        class="
          w-full 
          bg-white 
          h-14 
          rounded-full 
          flex 
          items-center 
          p-3 
          shadow-lg
          border
        "
      >
        <MagnifyIcon :size="30" class="text-gray-700" />
        <div class="ml-3 text-sm font-semibold text-gray-600">
          Enter pick-up point
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer 
      class="
        w-full 
        flex 
        justify-around 
        items-center 
        p-2 
        border-t 
        border-gray-200
        bg-white
        shadow-sm
      "
    >
      <div class="grid place-items-center">
        <HomeIcon :size="28" fillColor="#1f1e1e" />
        <div class="text-xs text-center text-gray-800 font-medium">
          Home
        </div>
      </div>
      <div @click="router.push('/directions')" class="grid place-items-center">
        <MapMarkerIcon :size="28" fillColor="#b3b1b1" />
        <div class="text-xs text-center text-gray-400 font-medium">
          Destination
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import ServiceSelectSmall from '@/components/ServiceSelectSmall.vue';
import ServiceSelectLarge from '@/components/ServiceSelectLarge.vue';

import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
</script>

<style lang="scss" scoped>
#Home {
  background-color: #f7f7f7;

  .bg-gray-100 {
    background-color: #f2f2f2;
  }

  .shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .shadow-md {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  footer {
    position: sticky;
    bottom: 0;
  }
}
</style>
