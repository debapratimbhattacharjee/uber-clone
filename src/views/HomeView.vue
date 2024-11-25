<template>
  <div id="Home" class="flex flex-col h-screen bg-gray-100">
    <div class="m-4 mb-auto text-center">

      <!-- Uber Logo -->
      <div class="my-16">
        <img width="150" src="img/uber/uber2.svg" class="mx-auto" />
      </div>

      <!-- Service Options -->
      <div class="services-container">
        <!-- Large Options (Ride and Food) -->
        <div class="large-services grid grid-cols-2 gap-4">
          <ServiceSelectLarge
            text="Ride"
            imageWidth="74"
            image="ride"
            class="service-large"
            @click="router.push('/directions')"
          />
          <ServiceSelectLarge
            text="Food"
            imageWidth="72"
            image="food"
            :promo="true"
            class="service-large"
          />
        </div>

        <!-- Smaller Options (2 Wheels, Transit, Reserve, Travel) -->
        <div class="small-services grid grid-cols-4 gap-4 mt-6">
          <ServiceSelectSmall
            text="2 Wheels"
            image="2wheels"
            class="service-small"
          />
          <ServiceSelectSmall
            text="Transit"
            image="transit"
            class="service-small"
          />
          <ServiceSelectSmall
            text="Reserve"
            image="reserve"
            class="service-small"
          />
          <ServiceSelectSmall
            text="Travel"
            image="travel"
            class="service-small"
          />
        </div>
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
          mt-8
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
import { useRouter } from 'vue-router';
import { useDirectionStore } from '@/store/direction-store';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import { onMounted } from '@vue/runtime-core';

const router = useRouter()
    const direction = useDirectionStore()

    onMounted(() => {
      direction.pickup = null
      direction.destination = null
    })
      

    </script>

<style lang="scss" scoped>
#Home {
  background-color: #f7f7f7;

  .bg-gray-100 {
    background-color: #f2f2f2;
  }

  .services-container {
    padding: 0 20px;
  }

  .large-services {
    display: grid;
    gap: 20px;
  }

  .small-services {
    display: grid;
    gap: 15px;
  }

  .service-large {
    background-color: #f3f3f3;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    cursor: pointer;
  }

  .service-small {
    background-color: #f3f3f3;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    cursor: pointer;
  }

  .service-large:hover,
  .service-small:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  footer {
    position: sticky;
    bottom: 0;
  }
}
</style>
