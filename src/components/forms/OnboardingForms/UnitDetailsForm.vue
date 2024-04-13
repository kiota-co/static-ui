<script setup>
import { ref } from "vue";

import InputText from "primevue/inputtext";
import Card from "primevue/card";

const formData = ref({
    unitNumber: "",
    number_of_Beds: "",

});

</script>

<template>
    <div>

        <Card>
            <template #content>
                <div class="space-y-4">
                    <div class="flex justify-between">
                        <p>Unit Details</p>

                        <div class="hidden">
                            <button type="button"
                                class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <!-- <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg> -->
                                Property
                            </button>
                        </div>
                    </div>
                    <div>
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label for="phone" class="font-bold block mb-2">Unit Number</label>
                                <span class="relative w-full">
                                    <InputText v-model="formData.unitNumber" placeholder="Eg: 3A" class="w-full" />
                                </span>
                            </div>



                            <div>
                                <span class="relative">
                                    <label for="phone" class="font-bold block mb-2">Number of Beds</label>
                                    <InputText v-model="formData.number_of_Beds" placeholder="2 Bedroom"
                                        class="w-full" />
                                </span>
                            </div>

                            <div>
                                <span class="relative">
                                    <label for="phone" class="font-bold block mb-2">Number of Beds</label>
                                    <InputText v-model="formData.number_of_Beds" placeholder="2 Bedroom"
                                        class="w-full" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>


</template>