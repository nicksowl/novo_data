
<script setup>
import Chart from 'chart.js/auto'

import { onMounted } from 'vue';

const props = defineProps({
    batch: String,
    sensor: String,
    description: String,
    unit: String,
    values: Object,
    timestamps: Object
})

// Creating chart
onMounted(() => {    
    const ctx = document.getElementById('myChart');

    const myChart = new Chart(ctx, {
        
    //     type: 'line',
    //     data: {
    //         // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         labels: props.timestamps,
    //         datasets: [{
    //             label: `Batch "${props.batch}" - Sensor "${props.sensor}"`,
    //             data: props.values,
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // });

        type: 'line',
        data: {
            labels: props.timestamps,
            datasets: [{
                label: `Batch "${props.batch}" - Sensor "${props.sensor}"`,
                data: props.values,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            }]
        }
    })

})


</script>

<template>

    <div>
        <canvas id="myChart" aria-label="Test Diagram" role="img" width="400" height="400"></canvas>
    </div>

    <!-- <div>
        <h1>{{ batch }}</h1>
        <h1>{{ sensor }}</h1>
        <h1>{{ description }}</h1>
        <h1>{{ unit }}</h1>
        <p>{{ values }}</p>
        <p>{{ timestamps }}</p>
    </div> -->


</template> 

