<script setup>
import { ref } from "vue";
import Visualisation from './Visualisation.vue'
import BarChart from './BarChart.vue'
// Get json file using HTTP REST fetch or axios
// import apiGetData from "../services/apiGetData";
// Add check if json file is there and imported properly
// import dataJson from '../assets/data/.data.json'
import dataJson from '../../../public/data/.data.json'

if(!dataJson) {
    alert('Dataset is not uploaded!')
    location.reload()
}

const batchesJson = dataJson.data

// This is how direct access to values looks like
// console.log(batchesJson.CP400E0102["400E_Pres1"].values[0])

let batchNames = []
let sensorNames = []

let activeBatch = ref('')
let activeSensor = ref('')
let localBatch = ''
let localSensor = ''

// Visualisation varibles; can be added to externally as TS; can we not hardcode it?
let activeDataSet = ref([])
let dataDescription = ref('')
let dataUnit = ref('')
let dataValues = ref({})
let dataTimestamps = ref({})

let showVisualisation = ref(false)

for(let name in batchesJson) {
    batchNames.push(name)
    for (let sensor in batchesJson[name]) {
        // if sensor name is already there do not push it. This could be refactored since there might be bugs.
        if(!sensorNames.includes(sensor)) {
            sensorNames.push(sensor)
        } 
    }
}

// Probably not correct way, but it works for now
function getBatchValue(element) {
    activeBatch.value = event.currentTarget.textContent
    // console.log(activeBatch.value)
    localBatch = activeBatch.value
}
function getSensorValue(element) {
    // console.log(event.currentTarget.textContent)
    activeSensor.value = event.currentTarget.textContent
    // console.log(activeSensor.value)
    localSensor = activeSensor.value
}
function resetActive() {
    activeBatch.value = ''
    activeSensor.value = ''
    localBatch = ''
    localSensor = ''
    showVisualisation.value = false
}

function getDataSet() {
    // Can be an issue here
    if (!localSensor || !localBatch) {
        alert('No branch and no sensor data are selected.')
    } else {
        activeDataSet.value = batchesJson[localBatch][localSensor]
        dataDescription.value = activeDataSet.value['description']
        dataUnit.value = activeDataSet.value['unit']
        dataValues.value = activeDataSet.value['values']
        dataTimestamps.value = activeDataSet.value['timestamps']

        console.log(showVisualisation)

        console.log(activeBatch.value)
        console.log(activeSensor.value)

        console.log(dataDescription.value)
        console.log(dataUnit.value)
        console.log(dataValues.value)
        console.log(dataTimestamps.value)

        showVisualisation.value = true
        console.log(showVisualisation)
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

    <div class="p-6 
    mockup-window border bg-base-300">

        <div class="flex space-x-4">
            <button v-if="activeBatch" class="btn btn-warning">{{ activeBatch }}</button>
            <button v-if="activeSensor" class="btn btn-warning">{{ activeSensor }}</button>

            <button @click='resetActive()' class="btn btn-square btn-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button v-if="activeBatch && activeSensor" @click="getDataSet()" class="btn btn-active btn-primary">See data</button>
        </div>


      <div class="pt-6 flex">

          <div>
              <h2 class="text-center">Sample</h2>
              <div v-for="batchName in batchNames">
                <button @click='getBatchValue()' id='batchButton' class="m-2 btn">{{ batchName }}</button>
              </div>
          </div>
    
          <div v-if='activeBatch'>
              <h2 class="text-center">Sensor</h2>
              <div v-for="sensorName in sensorNames">
                <button @click=getSensorValue() id='sensorButton' class="m-2 btn">{{ sensorName }}</button>
              </div>
          </div>

      </div>

    </div>

    <!-- Display / data visualisation component -->

    <div v-if="showVisualisation" class="mt-6 p-6 mockup-window border bg-base-300">
    <!-- <div class="mt-6 p-6 max-h-22  -->

    <!-- All this props could be putted in single object -->
        <Visualisation
            :batch="activeBatch" 
            :sensor="activeSensor" 
            :description="dataDescription"
            :unit="dataUnit" 
            :values="dataValues" 
            :timestamps="dataTimestamps"  />
    </div>

    <!-- Play-test zone -->
    <!-- <div class="mt-6 p-6 max-h-22  -->
    <!-- mockup-window border bg-base-300"> -->

    <!-- <BarChart /> -->

    <!-- <Visualisation /> -->

    <!-- </div> -->


  </section>
</template>
