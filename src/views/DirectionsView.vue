<template>
  <div id="Directions">
    <div class="grid grid-cols-12 mt-4 shadow-md">
      <div class="col-span-2 mx-auto">
        <div @click="router.push('/')">
          <ArrowLeftIcon :size="35" />
        </div>
        <div class="h-16 mt-4 w-full">
          <div :class="[isPickupActive ? 'circle-black' : 'circle-gray']" />
          <div class="line"></div>
          <div :class="[!isPickupActive ? 'square-black' : 'square-gray']" />
        </div>
      </div>
      <div class="col-span-10 pr-4">
        <div class="w-full h-5"></div>
        <div class="mb-2 mt-5">
          <AutoCompleteInput
            theId="firstInput"
            v-model:input="pickup"
            placeholder="Enter pick-up location"
            @input="findAddress(pickup)"
            @clearInput="clearInputFunc('firstInput')"
            @isActive="isPickupActive = true"
          />
        </div>
        <div class="mb-3">
          <AutoCompleteInput
            theId="secondInput"
            v-model:input="destination"
            placeholder="Where to?"
            @input="findAddress(destination)"
            @clearInput="clearInputFunc('secondInput')"
            @isActive="isPickupActive = false"
          />
        </div>
      </div>
    </div>
    <div v-for="address in addressData" :key="address">
      <div
        @click="storeAddress(address.description)"
        class="flex items-center custom-border-bottom"
      >
        <div class="bg-gray-400 mx-5 my-3.5 p-1.5 rounded-full">
          <MapMarkerIcon :size="30" fillColor="#f5f5f5" />
        </div>
        <div>
          <div class="text-lg text-gray-600">{{ address.description }}</div>
          <div class="text-lg text-gray-400">{{ address.terms[2].value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { debounce } from "lodash";
import { useRouter } from "vue-router";
import axios from "axios";
import { useDirectionStore } from "@/store/direction-store";
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue";
import AutoCompleteInput from "../components/AutoCompleteInput.vue";

const router = useRouter();
const direction = useDirectionStore();

const isPickupActive = ref(true);
const pickup = ref("");
const destination = ref("");
const addressData = ref("");

onMounted(() => {
  document.getElementById("firstInput").focus();
});

const storeAddress = (address) => {
  if (isPickupActive.value) {
    direction.pickup = address;
    pickup.value = address;
    addressData.value = "";
  } else {
    direction.destination = address;
    destination.value = address;
  }

  if (direction.pickup.length > 0 && direction.destination.length > 0) {
    router.push("/map");
  }
};

const clearInputFunc = (inputId) => {
  if (inputId === "firstInput") {
    pickup.value = "";
    direction.pickup = "";
  }
  if (inputId === "secondInput") {
    destination.value = "";
    direction.destination = "";
  }
};

const findAddress = debounce(async (address) => {
  if (!address) {
    addressData.value = "";
    return;
  }
  try {
    const res = await axios.get(`/address/${address}`);
    addressData.value = res.data;
  } catch (err) {
    console.error(err);
  }
}, 300);
</script>

<style lang="scss" scoped>
#Directions {
  height: 100vh;

  .circle-black,
  .circle-gray,
  .square-black,
  .square-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
  }
  .circle-black {
    background-color: black;
    border-radius: 100%;
  }
  .circle-gray {
    background-color: rgb(191, 191, 191);
    border-radius: 100%;
  }
  .square-black {
    background-color: black;
  }
  .square-gray {
    background-color: rgb(191, 191, 191);
  }
  .line {
    margin: 0 auto;
    width: 2px;
    height: 45px;
    background-color: rgb(191, 191, 191);
  }
  .custom-border-bottom {
    border-bottom: 1px solid rgb(230, 230, 230);
  }
}
</style>

