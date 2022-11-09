
<script setup>
import Chart from 'chart.js/auto'

import { onMounted, ref } from 'vue';

const props = defineProps({
    batch: String,
    sensor: String,
    description: String,
    unit: String,
    values: Object,
    timestamps: Object,
})

// time could be devided or shortened, like the pin itself
// show of time under

// Creating chart
onMounted(() => {    
    // const ctx = document.getElementById(chartName);
    const ctx = document.getElementById('myChart');

    // Playing around still
    const myChart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: props.timestamps,

            datasets: [{
                label: `${props.description}(${props.unit}) dataset from batch "${props.batch}", sensor "${props.sensor}". From ${props.timestamps[0]} to ${props.timestamps[props.timestamps.length - 1]}`,
                data: props.values,
                // ---
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',   
            }]
        },

        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return value + ' ' + props.unit;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }

    });
})
</script>


<!-- TOdo
    - Slider on the bottom that can select samples/aka value inrerval

    - Do something with dates
    - Fix high on fullscreen
    - Remove dots and add filling


-->


<template>

    <div class="">
        <canvas class="" id="myChart" aria-label="Test Diagram" role="img"></canvas>
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

