<script setup>
import { ref } from "vue";
import SingleVisualisation from "./SingleGraph.vue";
import DoubleVisualisation from "./DoubleGraph.vue";
import dataJson from "../../data/data.json";

// Check if no json file is loaded and reload page
if (!dataJson) {
  alert("Dataset is not uploaded!");
  location.reload();
}

const batchesJson = dataJson.data;

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

let showSingleVisualisation = ref(false);
let showDoubleVisualisation = ref(false);

let intervalFilter = ref(1);

let showSecondSelection = ref(false);

// Second selection variables
let secondActiveDataSet = ref([]);
let secondSelectionBatch = ref("");
let secondSelectionSensor = ref("");
let secondSelectionDescription = ref("");
let secondSelectionUnit = ref("");
let secondSelectionValues = ref({});
let secondSelectionTimestamps = ref({});

// Get batch names and sensor names - SHOULD BE CHANGED
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
  localBatch = activeBatch.value;
}
function getSensorValue(element) {
  activeSensor.value = event.currentTarget.textContent;
  localSensor = activeSensor.value;
}
const getSecondSelection = {
  batch: function (e) {
    secondSelectionBatch.value = event.currentTarget.textContent;
  },
  sensor: function (e) {
    secondSelectionSensor.value = event.currentTarget.textContent;
  },
};


// Apply filter (Helper function)
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
    showSingleVisualisation.value = false;
    showSecondSelection.value = false;
    showSecondSelection.value = false;

    showSecondSelection.value = false;
    secondSelectionBatch.value = "";
    secondSelectionSensor.value = "";
    secondSelectionUnit.value = "";

    showDoubleVisualisation.value = false;

    // location.reload();
  },
  batch: function () {
    activeBatch.value = "";
    showSingleVisualisation.value = false;
  },
  sensor: function () {
    activeSensor.value = "";
    showSingleVisualisation.value = false;
  },
  interval: function () {
    intervalFilter.value = 1;
  },
};

// Present visualisation component. Logic can be improved
function getDataSet() {
  // Can be an issue here
  if (!localSensor || !localBatch) {
    alert("No branch and no sensor data are selected.");
  } else {
    // With double selection
    if (showSecondSelection.value === true) {
      secondSelectionUnit.value =
        batchesJson[secondSelectionBatch.value][
          secondSelectionSensor.value
        ].unit;
      secondSelectionDescription.value =
        batchesJson[secondSelectionBatch.value][
          secondSelectionSensor.value
        ].description;
      if (
        activeBatch.value == secondSelectionBatch.value &&
        activeSensor.value == secondSelectionSensor.value
      ) {
        alert("Can not select the same source for comparison.");
      } else if (
        dataDescription.value != secondSelectionDescription.value &&
        dataUnit.value != secondSelectionUnit.value
      ) {
        alert("Selections must be of the same unit.");
      } else {
        if (intervalFilter.value > 1) {
          // First batch
          activeDataSet.value = batchesJson[localBatch][localSensor];
          dataDescription.value = activeDataSet.value["description"];
          dataUnit.value = activeDataSet.value["unit"];
          dataValues.value = getEveryNth(
            activeDataSet.value["values"],
            intervalFilter.value
          );
          dataTimestamps.value = getEveryNth(
            activeDataSet.value["timestamps"],
            intervalFilter.value
          );
          //  Second batch
          secondActiveDataSet.value =
            batchesJson[secondSelectionBatch.value][
              secondSelectionSensor.value
            ];
          secondSelectionDescription.value =
            secondActiveDataSet.value["description"];
          secondSelectionUnit.value = secondActiveDataSet.value["unit"];
          secondSelectionValues.value = getEveryNth(
            secondActiveDataSet.value["values"],
            intervalFilter.value
          );
          secondSelectionTimestamps.value = getEveryNth(
            secondActiveDataSet.value["timestamps"],
            intervalFilter.value
          );
        } else {
          // First batch
          activeDataSet.value = batchesJson[localBatch][localSensor];
          dataDescription.value = activeDataSet.value["description"];
          dataUnit.value = activeDataSet.value["unit"];
          dataValues.value = getEveryNth(
            activeDataSet.value["values"],
            intervalFilter.value
          );
          dataTimestamps.value = getEveryNth(
            activeDataSet.value["timestamps"],
            intervalFilter.value
          );
          // Second batch
          secondActiveDataSet.value =
            batchesJson[secondSelectionBatch.value][
              secondSelectionSensor.value
            ];
          secondSelectionDescription.value =
            secondActiveDataSet.value["description"];
          secondSelectionUnit.value = secondActiveDataSet.value["unit"];
          (secondSelectionValues.value = secondActiveDataSet.value["values"]),
            intervalFilter.value;
          (secondSelectionTimestamps.value =
            secondActiveDataSet.value["timestamps"]),
            intervalFilter.value;
        }
        showDoubleVisualisation.value = true;
      }
    }
    // With single selection
    else if (showSecondSelection.value === false) {
      if (intervalFilter.value > 1) {
        activeDataSet.value = batchesJson[localBatch][localSensor];
        dataDescription.value = activeDataSet.value["description"];
        dataUnit.value = activeDataSet.value["unit"];
        dataValues.value = getEveryNth(
          activeDataSet.value["values"],
          intervalFilter.value
        );
        dataTimestamps.value = getEveryNth(
          activeDataSet.value["timestamps"],
          intervalFilter.value
        );
      } else {
        activeDataSet.value = batchesJson[localBatch][localSensor];

        // console.log('local storage is not consistent with the data :(');
        // localStorage.setItem("batch", localBatch);
        // localStorage.setItem("sensor", localSensor);
        // localStorage.setItem("filter", intervalFilter.value);

        dataDescription.value = activeDataSet.value["description"];
        dataUnit.value = activeDataSet.value["unit"];
        dataValues.value = activeDataSet.value["values"];
        dataTimestamps.value = activeDataSet.value["timestamps"];
      }
      showSingleVisualisation.value = true;
    }
  }
}
// Add extra data layer to visualisation
function addExtraDataSet() {
  showSecondSelection.value = true;

  dataUnit.value = batchesJson[localBatch][localSensor].unit;
  dataDescription.value = batchesJson[localBatch][localSensor].description;
}
</script>

<template>
  <section class="p-6">
    <h1 class="text-3xl font-semibold mb-4">View</h1>

    <!-- Selection -->
    <div
      class="p-6 rounded-lg border dark:text-gray-400 shadow-md dark:bg-neutral dark:border-gray-700 bg-base-200 h-full"
    >
      <!-- Progress bar -->
      <div class="flex flex-col">
        <!-- First / Main line -->
        <div id="main-select" class="space-y-2 space-x-2">
          <!-- Batch -->
          <p v-if="activeBatch" class="btn btn-warning">
            {{ activeBatch }}
          </p>
          <!-- Sensor -->
          <p v-if="activeSensor" class="btn btn-warning">
            {{ activeSensor }}
          </p>
          <!-- No input status icon -->
          <p
            v-if="!activeBatch"
            class="h-12 ml-2 mt-2 pt-4 text-md font-light text-gray-500 dark:text-gray-400"
          >
            Start by selecting batch bellow
          </p>
          <!-- Filter -->
          <p v-if="activeBatch" class="btn btn-warning">
            {{ intervalFilter }} Min
          </p>
          <!-- See data button -->
          <button
            v-if="
              activeBatch &&
              activeSensor &&
              !showSingleVisualisation &&
              !showDoubleVisualisation
            "
            @click="getDataSet()"
            class="btn btn-accent text-md font-bold"
          >
            See data
          </button>
          <!-- Add Extra Data Set button -->
          <button
            v-if="
              activeBatch &&
              activeSensor &&
              !showSecondSelection &&
              !showSingleVisualisation
            "
            @click="addExtraDataSet()"
            class="btn btn-accent text-md font-bold"
          >
            Add Extra set
          </button>
          <!-- Reset button -->
          <button v-if="activeBatch" @click="reset.all()" class="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.05em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 23"
            >
              <g transform="rotate(-90 11.5 11.5)">
                <path
                  fill="currentColor"
                  d="M23.314 8.518V.686l-2.84 2.84A11.962 11.962 0 0 0 11.981.004c-6.627 0-12 5.373-12 12s5.373 12 12 12c4.424 0 8.289-2.394 10.37-5.958l.031-.057l-2.662-1.536c-1.57 2.695-4.447 4.478-7.739 4.478a8.927 8.927 0 1 1 6.32-15.232l-2.82 2.82h7.834z"
                />
              </g>
            </svg>
          </button>
        </div>
        <!-- Extra line -->
        <div
          id="extra-select"
          v-if="showSecondSelection"
          class="pt-2 space-x-2"
        >
          <!-- No input status icon -->
          <p
            v-if="!secondSelectionBatch"
            class="h-10 ml-2 mt-2 pt-4 text-md font-light text-gray-500 dark:text-gray-400"
          >
            Select additional data entry bellow
          </p>
          <!-- Batch -->
          <button
            @click=""
            v-if="activeBatch && secondSelectionBatch"
            class="btn btn-warning"
          >
            {{ secondSelectionBatch }}
          </button>
          <!-- Sensor -->
          <button
            @click=""
            v-if="secondSelectionBatch && !!secondSelectionSensor"
            class="btn btn-warning"
          >
            {{ secondSelectionSensor }}
          </button>
        </div>
      </div>
      <!-- Input selector   -->
      <div
        v-if="!showSingleVisualisation && !showDoubleVisualisation"
        class="flex flex-col"
      >
        <!-- Selection 1 -->
        <div v-if="!showSecondSelection" class="pt-6 flex">
          <!-- Batch -->
          <div>
            <h2 class="text-center font-light text-gray-500 dark:text-gray-400">
              Batch
            </h2>
            <div v-for="batchName in batchNames">
              <button @click="getBatchValue()" id="batchButton" class="m-2 btn">
                {{ batchName }}
              </button>
            </div>
          </div>
          <!-- Sensor -->
          <div v-if="activeBatch">
            <h2 class="text-center font-light text-gray-500 dark:text-gray-400">
              Sensor
            </h2>
            <div v-for="sensorName in sensorNames">
              <button
                @click="getSensorValue()"
                id="sensorButton"
                class="m-2 btn"
              >
                {{ sensorName }}
              </button>
            </div>
          </div>
          <!-- Filter -->
          <div v-if="activeBatch">
            <h2 class="text-center font-light text-gray-500 dark:text-gray-400">
              Sample Interval in minutes
            </h2>
            <select
              v-model.number="intervalFilter"
              class="select m-2 select-ghost w-full max-w-xs"
            >
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
        <!-- Extra Selection 2 -->
        <div
          v-if="showSecondSelection && activeBatch && activeSensor"
          class="pt-6 flex"
        >
          <!-- Batch -->
          <div>
            <h2 class="text-center">Batch</h2>
            <div v-for="batchName in batchNames">
              <button
                @click="getSecondSelection.batch()"
                id="batchButton"
                class="m-2 btn"
              >
                {{ batchName }}
              </button>
            </div>
          </div>
          <!-- Sensor -->
          <div v-if="activeBatch && secondSelectionBatch">
            <h2 class="text-center">Sensor</h2>
            <div v-for="sensorName in sensorNames">
              <!-- something like:
                  - for loop in batchesJson.
                  in the future, for alert blocks are there. -->
              <button
                @click="getSecondSelection.sensor()"
                id="sensorButton"
                class="m-2 btn"
              >
                {{ sensorName }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Single Visualisation - Line chart with Chart.js -->
    <div
      v-if="showSingleVisualisation"
      class="mt-6 p-6 rounded-lg border dark:text-white shadow-md dark:bg-neutral dark:border-gray-700 bg-base-200"
    >
      <!-- Should go in charts under label with coloring, it also mutates filter daata next to diagram-->
      <p class="text-center text-xs pl-5">
        Batch - <i>{{ activeBatch }} </i> , Sensor - <i>{{ activeSensor }}</i
        >, Interval - <i>{{ intervalFilter }} min</i>, Period from
        <i>{{ dataTimestamps[0] }}</i> to
        <i>{{ dataTimestamps[dataTimestamps.length - 1] }}</i>
      </p>

      <SingleVisualisation
        :batch="activeBatch"
        :sensor="activeSensor"
        :description="dataDescription"
        :unit="dataUnit"
        :values="dataValues"
        :timestamps="dataTimestamps"
      />
    </div>

    <!-- Double Visualisation - Line chart with Chart.js -->
    <div
      v-if="showDoubleVisualisation"
      class="mt-6 p-6 rounded-lg border dark:text-white shadow-md dark:bg-neutral dark:border-gray-700 bg-base-200"
    >
      <!-- Should go in charts under label with coloring, it also mutates filter daata next to diagram-->
      <p
        class="text-center text-xs pl-5 font-light text-gray-500 dark:text-gray-400"
      >
        Batch 1 - <i>{{ activeBatch }} </i> , Sensor - <i>{{ activeSensor }}</i
        >, Interval - <i>{{ intervalFilter }} min</i>, Period from
        <i>{{ dataTimestamps[0] }}</i> to
        <i>{{ dataTimestamps[dataTimestamps.length - 1] }}</i>
      </p>
      <p
        class="text-center text-xs pl-5 font-light text-gray-500 dark:text-gray-400"
      >
        Batch 2 - <i>{{ secondSelectionBatch }} </i> , Sensor -
        <i>{{ secondSelectionSensor }}</i
        >, Interval - <i>{{ intervalFilter }} min</i>, Period from
        <i>{{ secondSelectionTimestamps[0] }}</i> to
        <i>{{ secondSelectionTimestamps[dataTimestamps.length - 1] }}</i>
      </p>

      <DoubleVisualisation
        :batch="activeBatch"
        :sensor="activeSensor"
        :description="dataDescription"
        :unit="dataUnit"
        :values="dataValues"
        :timestamps="dataTimestamps"
        :secondBatch="secondSelectionBatch"
        :secondSensor="secondSelectionSensor"
        :secondDescription="secondSelectionDescription"
        :secondUnit="secondSelectionUnit"
        :secondValues="secondSelectionValues"
        :secondTimestamps="secondSelectionTimestamps"
      />
    </div>
    
  </section>
</template>
