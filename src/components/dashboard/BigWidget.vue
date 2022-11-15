<script setup>

defineProps({
    numberOne: String,
    numberOneCaption: String,
    numberTwo: Number,
    numberTwoCaption: String,
    numberThree: Number,
    numberThreeCaption: String
})


</script>

<template>

    <div class="w-full rounded-lg border shadow-md dark:bg-neutral bg-base-200 dark:border-gray-700">

        <div class="p-4 bg-base-200 rounded-lg md:p-8 dark:bg-neutral" id="stats" role="tabpanel" aria-labelledby="stats-tab">

            <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                
                <div class="flex flex-col justify-center items-center">
                    <dt class="xl:text-3xl text-md mb-2 font-extrabold text-red-accent btn btn-warning">{{ numberOne }}</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">{{ numberOneCaption }}</dd>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <dt class="mb-2 xl:text-3xl text-md font-extrabold btn btn-warning">{{ numberTwo }}</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">{{ numberTwoCaption }}</dd>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <dt class="mb-2 xl:text-3xl text-md font-extrabold btn btn-warning">{{ numberThree }}</dt>
                    <dd class="font-light text-gray-500 dark:text-gray-400">{{ numberThreeCaption }}</dd>
                </div>
            </dl>

        </div>

    </div>

</template>