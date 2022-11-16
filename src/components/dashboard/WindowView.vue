<script setup>
import { ref } from "vue";
import BigWidget from "./BigWidget.vue";
import MediumWidget from "./MediumWidget.vue";
import SmallWidget from "./SmallWidget.vue";
import PieWidget from "./PieWidget.vue";

import dataJson from "../../data/data.json";

// Check if no json file is loaded and reload page
if (!dataJson) {
  alert("Dataset is not uploaded!");
  location.reload();
}

// Current time and data
let today = new Date();
let date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
let time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let currentTimeDate = date + " " + time;
let currentTimeDateCaption = "Last updated";

// Number of batches and sensors
let numberOfBatches = 0;
let numberOfBatchesCaption = "Batches analysed";
let numberOfSensors = 0;
let numberOfSensorsCaption = "Sensors analysed";

for (let batch in dataJson.data) {
  numberOfBatches++;
  for (let sensor in dataJson.data[batch]) {
    numberOfSensors++;
  }
}

// Tempreture values
let highestTemperatureCaption = "Highest temperature";
let highestTemperature = 0;
let highestTemperatureBatch = "";
let highestTemperatureSensor = "";
let highestTemperatureTimestamp = "";
let highestTemperatureUnit = "";

let lowestTemperatureCaption = "Lowest temperature";
let lowestTemperature = 0;
let lowestTemperatureBatch = "";
let lowestTemperatureSensor = "";
let lowestTemperatureTimestamp = "";
let lowestTemperatureUnit = "";

// Pressure values
let highestPressureCaption = "Highest Pressure";
let highestPressure = 0;
let highestPressureBatch = "";
let highestPressureSensor = "";
let highestPressureTimestamp = "";
let highestPressureUnit = "";

let lowestPressureCaption = "Lowest Pressure";
let lowestPressure = 0;
let lowestPressureBatch = "";
let lowestPressureSensor = "";
let lowestPressureTimestamp = "";
let lowestPressureUnit = "";

// Get Lowest and highest temperature and pressure samples
for (let batch in dataJson.data) {
  for (let sensor in dataJson.data[batch]) {
    if (dataJson.data[batch][sensor]["description"] === "Temperature") {
      let maxTemp = Math.max(...dataJson.data[batch][sensor]["values"]);
      let maxTempIndex =
        dataJson.data[batch][sensor]["values"].indexOf(maxTemp);
      let maxTempTime =
        dataJson.data[batch][sensor]["timestamps"][maxTempIndex];
      highestTemperatureUnit = dataJson.data[batch][sensor]["unit"];

      if (maxTemp > highestTemperature) {
        highestTemperatureBatch = batch;
        highestTemperatureSensor = sensor;
        highestTemperature = maxTemp.toFixed(3);
        highestTemperatureTimestamp = maxTempTime;
      }

      let minTemp = Math.min(...dataJson.data[batch][sensor]["values"]);
      let minTempIndex =
        dataJson.data[batch][sensor]["values"].indexOf(minTemp);
      let minTempTime =
        dataJson.data[batch][sensor]["timestamps"][minTempIndex];
      lowestTemperatureUnit = dataJson.data[batch][sensor]["unit"];

      if (minTemp < lowestTemperature) {
        lowestTemperatureBatch = batch;
        lowestTemperatureSensor = sensor;
        lowestTemperature = minTemp.toFixed(3);
        lowestTemperatureTimestamp = minTempTime;
      }
    }
    if (dataJson.data[batch][sensor]["description"] === "Pressure") {
      console.log("hello from pressure");

      let maxPres = Math.max(...dataJson.data[batch][sensor]["values"]);
      let maxPresIndex =
        dataJson.data[batch][sensor]["values"].indexOf(maxPres);
      let maxPresTime =
        dataJson.data[batch][sensor]["timestamps"][maxPresIndex];
      highestPressureUnit = dataJson.data[batch][sensor]["unit"];

      if (maxPres > highestPressure) {
        highestPressureBatch = batch;
        highestPressureSensor = sensor;
        highestPressure = maxPres.toFixed(3);
        highestPressureTimestamp = maxPresTime;
      }

      let minPres = Math.min(...dataJson.data[batch][sensor]["values"]);
      let minPresIndex =
        dataJson.data[batch][sensor]["values"].indexOf(minPres);
      let minPresTime =
        dataJson.data[batch][sensor]["timestamps"][minPresIndex];
      lowestPressureUnit = dataJson.data[batch][sensor]["unit"];

      if (minPres < lowestPressure) {
        lowestPressureBatch = batch;
        lowestPressureSensor = sensor;
        lowestPressure = minPres.toFixed(3);
        lowestPressureTimestamp = minPresTime;
      }
    }
  }
}

// get total amount of samples for each sensor
let totalSamples = 0;
let sensors = [];
for (let batch in dataJson.data) {
  // console.log(batch)
  for (let sensor in dataJson.data[batch]) {
    console.log(sensor);
  }
}
console.log(totalSamples);
</script>

<template>
  <section class="p-6">
    <h1 class="text-3xl font-semibold mb-4">Dashboard</h1>

    <BigWidget
      class=""
      :numberOne="currentTimeDate"
      :numberOneCaption="currentTimeDateCaption"
      :numberTwo="numberOfBatches"
      :numberTwoCaption="numberOfBatchesCaption"
      :numberThree="numberOfSensors"
      :numberThreeCaption="numberOfSensorsCaption"
    />

    <div class="flex flex-wrap justify-around">
      <MediumWidget
        class="mt-12"
        :numberOneCaption="highestTemperatureCaption"
        :numberOneBatch="highestTemperatureBatch"
        :numberOneSensor="highestTemperatureSensor"
        :numberOneValue="highestTemperature"
        :numberOneTimeStamp="highestTemperatureTimestamp"
        :numberOneUnit="highestTemperatureUnit"
        :numberTwoCaption="lowestTemperatureCaption"
        :numberTwoBatch="lowestTemperatureBatch"
        :numberTwoSensor="lowestTemperatureSensor"
        :numberTwoValue="lowestTemperature"
        :numberTwoTimeStamp="lowestTemperatureTimestamp"
        :numberTwoUnit="lowestTemperatureUnit"
      />
      <MediumWidget
        class="mt-12"
        :numberOneCaption="highestPressureCaption"
        :numberOneBatch="highestPressureBatch"
        :numberOneSensor="highestPressureSensor"
        :numberOneValue="highestPressure"
        :numberOneTimeStamp="highestPressureTimestamp"
        :numberOneUnit="highestPressureUnit"
        :numberTwoCaption="lowestPressureCaption"
        :numberTwoBatch="lowestPressureBatch"
        :numberTwoSensor="lowestPressureSensor"
        :numberTwoValue="lowestPressure"
        :numberTwoTimeStamp="lowestPressureTimestamp"
        :numberTwoUnit="lowestPressureUnit"
      />
    </div>

    <!-- Total collected samples visualisation -->
    <div class="flex justify-center">
      <div
        class="w-1/2 mt-12 p-6 rounded-lg border dark:text-white shadow-md dark:bg-neutral dark:border-gray-700 bg-base-200"
      >
        <h3 class="text-center pt-6 pb-3 sm:text-xl text-md font-semibold">
          Total samples collected
        </h3>
        <div class="pb-1 flex justify-center">
          <button class="mb-2 xl:text-3xl text-md font-extrabold btn btn-warning">
            48 2342
          </button>
        </div>
  
        <PieWidget />
      </div>
    </div>
  </section>
</template>
