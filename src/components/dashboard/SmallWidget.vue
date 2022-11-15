<script setup>

defineProps({
    numberOne: Number,
    numberOneCaption: String,
    numberTwo: Number,
    numberTwoCaption: String,
    numberThree: Number,
    numberThreeCaption: String
})


</script>

<template>

    <div class="rounded-lg border shadow-md dark:bg-neutral bg-base-200 dark:border-gray-700">

        <div class="p-4 bg-base-200 rounded-lg md:p-8 dark:bg-neutral" id="stats" role="tabpanel" aria-labelledby="stats-tab">

            <dl class="grid grid-cols-1 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-1 xl:grid-cols-1 dark:text-white sm:p-8">
                
                <div class="flex flex-col justify-center items-center">
                    <dt class="mb-2 xl:text-xl text-md font-bold">Lowest pressure</dt>
                    <dd class="mb-2 xl:text-3xl text-md font-extrabold btn btn-warning">1.7 Bar</dd>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Batch 324234</dd>
                    <dd class="font-light text-gray-500 dark:text-gray-400">Sesnor LD1432</dd>
                    <dd class="font-light text-gray-500 dark:text-gray-400">2020-10-02 16:11:00</dd>
                </div>
            </dl>

        </div>

    </div>

</template>