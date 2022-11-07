// Add check if file is there and imported properly
import dataJson from '../assets/data/.data.json'

const batchesJson = dataJson.data
// console.log(batchesJson)
// const batchesJs = JSON.Parse(batchesJson)

// here we need for loop for each batch to save it to new object batch 


// console.table(batchesJson.AP400E0101['400E_Temp1'])

let batchNames = []
// object 
let sensorsObjects = []
let otherSensors = []
let properties = []

for (let name in batchesJson) {
    let counter = 0
    batchNames.push(name)
    // console.log(name)
    // console.log(batchesJson[name])

    sensorsObjects.push(batchesJson[name])
    

    counter += 1
    
}

let numberOfSensors = sensorsObjects.length