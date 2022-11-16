<script setup>
import Chart from "chart.js/auto";

import { onMounted } from "vue";

const props = defineProps({
  batch: String,
  sensor: String,
  description: String,
  unit: String,
  values: Object,
  timestamps: Object,
});

const randomBackgroundColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};
let backgroundColorA05 = randomBackgroundColor();
let backgroundColorA1 = backgroundColorA05.replace("0.5", "1");

onMounted(() => {
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
        "AP400E0101",
        "AC400E0151",
        "XP100A0102",
        "ER400E0102",
        "AP6540E0101",
        "SP420E0101",
        "DP400E0123",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [6000, 3456, 5000, 9876, 10222, 8730, 9123],
          backgroundColor: "rgb(251,188,35)",
          hoverOffset: 4,
        },
      ],
      label: "Dataset 1",
      data: [0, 10, 5, 2, 20, 30, 45],
      backgroundColor: backgroundColorA05,
    },
    options: {
      responsive: true,
      aspectRatio: 1,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Chart.js Doughnut Chart",
        },
      },
    },
  });
});
</script>

<template>
  <div class="relative">
    <canvas
      class=""
      id="myChart"
      aria-label="Data Visualisation"
      role="img"
    ></canvas>
  </div>
</template>
