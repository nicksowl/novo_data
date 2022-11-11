<script setup>
import { ref } from "vue";
import Visualisation from "./Visualisation.vue";
// Get json file using HTTP REST fetch or axios
// import apiGetData from "../services/apiGetData";
// Add check if json file is there and imported properly
// import dataJson from '../assets/data/.data.json'
import dataJson from "../../../public/data/.data.json";

// Check if no json file is loaded
if (!dataJson) {
  alert("Dataset is not uploaded!");
  location.reload();
}

const batchesJson = dataJson.data;

// This is how direct access to values looks like
// console.log(batchesJson.CP400E0102["400E_Pres1"].values[0])

let batchNames = [];
let sensorNames = [];

let activeBatch = ref("");
let activeSensor = ref("");
let localBatch = "";
let localSensor = "";

// Visualisation varibles; can be added to externally as TS; can we not hardcode it?
let activeDataSet = ref([]);
let dataDescription = ref("");
let dataUnit = ref("");
let dataValues = ref({});
let dataTimestamps = ref({});

let showVisualisation = ref(false);

let intervalFilter = ref(1);

// Get batch names and sensor names
for (let name in batchesJson) {
  batchNames.push(name);
  for (let sensor in batchesJson[name]) {
    // if sensor name is already there do not push it. This could be refactored since there might be bugs.
    if (!sensorNames.includes(sensor)) {
      sensorNames.push(sensor);
    }
  }
}

// Get user inputs. Probably not correct way; but it works for now
function getBatchValue(element) {
  activeBatch.value = event.currentTarget.textContent;
  // console.log(activeBatch.value)
  localBatch = activeBatch.value;
}
function getSensorValue(element) {
  // console.log(event.currentTarget.textContent)
  activeSensor.value = event.currentTarget.textContent;
  // console.log(activeSensor.value)
  localSensor = activeSensor.value;
}

// drop down menu with preselects time, like 
// we get array of time and after remove every 5, 10, 100 element depending from time
function getEveryNth(arr, nth) {
  const result = [];

  for (let i = 0; i < arr.length; i += nth) {
    result.push(arr[i]);
  }

  return result;
}

// Resets current user input
const reset = {
  all: function () {
    activeBatch.value = "";
    activeSensor.value = "";
    localBatch = "";
    localSensor = "";
    showVisualisation.value = false;
  },
  batch: function () {
    activeBatch.value = "";
    showVisualisation.value = false;
  },
  sensor: function () {
    activeSensor.value = "";
    showVisualisation.value = false;
  },
};

// Write case where new visualisation is fired just under depending on new parameters

function getDataSet() {
  // Can be an issue here
  if (!localSensor || !localBatch) {
    alert("No branch and no sensor data are selected.");
  } else {
    if (intervalFilter.value > 1) {
      activeDataSet.value = batchesJson[localBatch][localSensor];
      dataDescription.value = activeDataSet.value["description"];
      dataUnit.value = activeDataSet.value["unit"];
      dataValues.value = getEveryNth(activeDataSet.value["values"], intervalFilter.value)
      dataTimestamps.value = getEveryNth(activeDataSet.value["timestamps"], intervalFilter.value)
    } else {
        activeDataSet.value = batchesJson[localBatch][localSensor];
        dataDescription.value = activeDataSet.value["description"];
        dataUnit.value = activeDataSet.value["unit"];
        dataValues.value = activeDataSet.value["values"];
        dataTimestamps.value = activeDataSet.value["timestamps"];
    }
    showVisualisation.value = true;

  }
}

// depict that data in histogram type of chart as seperate Vue component to which we pass our values
// pass data to other components and depict it there on the page
// connect vue charts
// depict data in vue chart
// Play around and see what is best

// let activeDataSet = ref([])
// let activeBatch = ref('')
// let activeSensor = ref('')
// let dataDescription = ref('')
// let dataUnit = ref('')
// let dataValues = ref({})
// let dataTimestamps = ref({})
</script>

<template>
  <section class="p-6">
    <div class="p-6 mockup-window border bg-base-200">
      <div class="flex space-x-4">
        <button
          @click="reset.batch()"
          v-if="activeBatch"
          class="btn btn-warning"
        >
          {{ activeBatch }}
        </button>
        <button
          @click="reset.sensor()"
          v-if="activeSensor"
          class="btn btn-warning"
        >
          {{ activeSensor }}
        </button>

        <img v-if="!activeBatch" class="h-12 ml-2" src="../../assets/visuals/beer.svg" alt="beer-icon">

        <button v-if="activeBatch" class="btn btn-warning">
          {{ intervalFilter }}Min
        </button>

        <button v-if="activeBatch" @click="reset.all()" class="btn btn-square btn-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <button
          v-if="activeBatch && activeSensor"
          @click="getDataSet()"
          class="btn btn-active btn-primary"
        >
          See data
        </button>
      </div>

      <div class="pt-6 flex">
        <div>
          <h2 class="text-center">Sample</h2>
          <div v-for="batchName in batchNames">
            <button @click="getBatchValue()" id="batchButton" class="m-2 btn">
              {{ batchName }}
            </button>
          </div>
        </div>

        <div v-if="activeBatch">
          <h2 class="text-center">Sensor</h2>
          <div v-for="sensorName in sensorNames">
            <button @click="getSensorValue()" id="sensorButton" class="m-2 btn">
              {{ sensorName }}
            </button>
          </div>
        </div>

        <!-- // 1 min = 1
// 5 min = 5
// 30 min = 30
// 60 min / 1 hour = 60
// 2 hours = 120 -->

        <div v-if="activeBatch">
          <h2 class="text-center">Filter in minutes</h2>
          <select v-model.number="intervalFilter" class="select m-2 select-ghost w-full max-w-xs">
            <option selected>1</option>
            <option>3</option>
            <option>5</option>
            <option>10</option>
            <option>30</option>
            <option>60</option>
            <option>120</option>
          </select>
        </div>

      </div>
    </div>

    <!-- Display / data visualisation component -->
    <!-- 

        ToDo:
        - Rewrite logic that strikes new view everytime or just adds it to active visualisation
        - Active selected branch and sensor are highlighted

     -->

    <div
      v-if="showVisualisation"
      class="mt-6 p-6 mockup-window border bg-base-200"
    >
    <p class="text-center text-xs pl-5">Batch - <i>{{ activeBatch }} </i> , Sensor - <i>{{ activeSensor }}</i>, Interval - <i>{{ intervalFilter }} min</i>, Period from <i>{{ dataTimestamps[0] }}</i> to <i>{{ dataTimestamps[dataTimestamps.length - 1] }}</i></p>
      <Visualisation
        :batch="activeBatch"
        :sensor="activeSensor"
        :description="dataDescription"
        :unit="dataUnit"
        :values="dataValues"
        :timestamps="dataTimestamps"
      />
    </div>

  </section>
</template>
