<script setup>
defineProps({
  numberOneCaption: String,
  numberOneBatch: String,
  numberOneSensor: String,
  numberOneValue: String,
  numberOneTimeStamp: String,
  numberOneUnit: String,

  numberTwoCaption: String,
  numberTwoBatch: String,
  numberTwoSensor: String,
  numberTwoValue: String,
  numberTwoTimeStamp: String,
  numberTwoUnit: String,
});
</script>

<template>
  <div
    class="rounded-lg border shadow-md dark:bg-neutral bg-base-200 dark:border-gray-700"
  >
    <div
      class="p-4 bg-base-200 rounded-lg md:p-8 dark:bg-neutral"
      id="stats"
      role="tabpanel"
      aria-labelledby="stats-tab"
    >
      <dl
        class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-2 xl:grid-cols-2 dark:text-white sm:p-8"
      >
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 xl:text-xl text-md font-semibold">
            {{ numberOneCaption }}
          </dt>
          <dd class="mb-2 xl:text-3xl text-md font-extrabold btn btn-warning">
            {{ numberOneValue }} {{ numberOneUnit }}
          </dd>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            {{ numberOneBatch }}
          </dd>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            {{ numberOneSensor }}
          </dd>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            {{ numberOneTimeStamp }}
          </dd>
        </div>
        <div class="flex flex-col justify-center items-center">
          <dt class="mb-2 xl:text-xl text-md font-semibold">
            {{ numberTwoCaption }}
          </dt>
          <dd class="mb-2 xl:text-3xl text-md font-extrabold btn btn-warning">
            {{ numberTwoValue }} {{ numberTwoUnit }}
          </dd>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            {{ numberTwoBatch }}
          </dd>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            {{ numberTwoSensor }}
          </dd>
          <dd class="font-light text-gray-500 dark:text-gray-400">
            {{ numberTwoTimeStamp }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
