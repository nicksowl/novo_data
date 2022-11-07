<script setup>
import apiGetData from "../services/apiGetData";
import { ref, onMounted } from "vue";

// Add check if json file is there and imported properly
import dataJson from '../assets/data/.data.json'
const batchesJson = dataJson.data

// console.log(batchesJson.CP400E0102["400E_Pres1"].values[0])

let batchNames = []
let sensorNames = []

for(let name in batchesJson) {
    batchNames.push(name)
    for (let sensor in batchesJson[name]) {
        // if sensor name is already there do not push it
        if(!sensorNames.includes(sensor)) {
            // console.log('sensors is already there')
            sensorNames.push(sensor)
        } 
    }
}
let batchesLength = batchNames.length

function alertValue() {
    alert(this.name)
    // console.log(this.get.dataJson)
}

let sensorButtons = ref({})

onMounted(() => {
    sensorButtons = document.querySelectorAll('#sensorButton')
    // console.log(buttons)
    // console.log(sensorButton[0].textContent)

    // for every element selected, read its textContent

    for(let value in sensorButtons) {
        console.log(sensorButtons[value].textContent)
    }

    // function getContentValue() {
    //     console.log('hello')
    // }

})

function oneGetContentValue() {
        // document.querySelector()
        console.log(this)
}


// on click function that grabs the name of the element - sensor
// and alert it



</script>

<template>
  <section class="p-6">

    <div class="p-6 h-auto 
    mockup-window border bg-base-300">
      <!-- Playground starts here -->

      <div class="pt-6 flex">
          <div>
              <h2 class="text-center">Sample</h2>
              <div v-for="batchName in batchNames">
                <button id='batchButton' class="m-2 btn">{{ batchName }}</button>
              </div>
          </div>
    
          <div>
              <h2 class="text-center">Sensor</h2>
              <div v-for="sensorName in sensorNames">
                <button @click=oneGetContentValue() id='sensorButton' class="m-2 btn">{{ sensorName }}</button>
              </div>
          </div>
      </div>




    </div>

    <button @click=alertValue() href="">Looool</button>


  </section>
</template>
