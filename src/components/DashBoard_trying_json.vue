<script setup>
import apiGetData from "../services/apiGetData";
import { ref } from "vue";

// Add check if json file is there and imported properly
import dataJson from '../assets/data/.data.json'

const batchesJson = dataJson.data
let batchNames = []
console.log(dataJson.data.CP400E0102["400E_Pres1"].values[0])

// console.log(JSON.stringify(dataJson.data.CP400E0102))

// const batchesJs = JSON.Parse(batchesJson)

// here we need for loop for each batch to save it to new object batch 


// console.table(batchesJson.AP400E0101['400E_Temp1'])



let sensorNames = []

// object 
let sensorsObjects = []
let otherSensors = []
let properties = []

// Get batch name
for (let name in batchesJson) {
    let counter = 0
    batchNames.push(name)
    console.log(batchesJson.name)

    
    // console.log(name)
    // console.log(batchesJson[name])
    // console.log(batchesJson.name)

    // sensorsObjects.push(batchesJson[name])
    // counter += 1
    for(let key in batchesJson[name]) {
        // console.log(batchesJson.name[key])
        // console.log(key)
        sensorNames.push(key)
    }
    // console.log(name)
    
}
// console.log(batchNames[0])
// console.log(batchesJson.batchNames[0]['400E_Temp1'])
// console.log(batchesJson)
// console.log(batchesJson)

console.log(batchNames)
// console.log(sensorNames)

// console.log(batchesJson.batchNames)

let numberOfSensors = sensorsObjects.length

// console.log(batchNames[5])
// console.log(sensorsObjects)

let i = 0
let s = ''
let p = ''

while(i < numberOfSensors) {
    // console.log(sensorsObjects[i])
    // console.log(typeof(sensorsObjects[i]))
    // for(let key of sensorsObjects[i]) {
    //     console.log(key)
    //     // console.log(value)
    // }
    s = JSON.stringify(sensorsObjects[i])
    // p = JSON.parse(sensorsObjects[s])

    i++
}

// console.log(s[0])




// console.log(sensorsObjects.length)
// console.log(numberOfSensors)

// for(let i = 0; i < sensorsObjects.length; i++) {
//     console.log(sensorsObjects[i])
// }

// let i = 0

// while(i < sensors.length) {
//     otherSensors.push(sensors[i])
//     // console.log(sensors[i])
//     i++
// }

// console.log(sensors)


// for (let sensor in batchesJson.name) {
//         // sensors.push(sensor)
//         console.log(sensor)
//     }

// 

// console.log(batchesJson.AP400E0101)
// console.log(sensors)
// console.log(batchNames.length)
// console.log(sensors)


// const test = {
//     'me': 'you',
//     'lool': 'looll'
// }

// console.log(test['me'])

// data.data - Batch  - 
    // AP400E0101 , AP400E0102 , BP400E0101 , BP400E0102 , CP400E0101 , CP400E0102 ,
//  Sensors - 
// // 400E_Temp1 , 400E_Temp2, 400E_Pres1, 400E_Pres2
// Properties - 
// // description , unit , values , timestamps

// console.log(dataJson.data.AP400E0101['400E_Pres2'])

// 


// const dataSet = ref({});
// console.log(typeof(dataSet))
// async function importData() {
//   try {
//     const response = await apiGetData.get();
//     dataSet.value = response.data;
//   }
//    catch (error) {
//     console.log(error);
//   }
// }
// importData();
// console.log(dataSet);
// console.log(typeof(dataSet))




</script>

<template>
  <section class="p-12">
    <div class="h-screen mockup-window border bg-base-300">
      <!-- Playground starts here -->

      <div v-for="batchName in batchesJson">
        {{ batchName }}
      </div>


      <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
    </div>
  </section>
</template>
