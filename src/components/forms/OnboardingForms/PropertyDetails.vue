<script setup>
import { ref } from "vue";

import InputText from "primevue/inputtext";
import Card from "primevue/card";

const formData = ref({
    propertyName: "",
    unitCount: "",
    locationArea: "",

});
</script>

<template>
    <Card>
        <template #content>
            <div class="space-y-4">
                <div>
                    <p>Property Details</p>
                </div>
                <div>
                    <div class="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label for="phone" class="font-bold block mb-2">Property Name</label>
                            <span class="relative w-full">
                                <InputText v-model="formData.propertyName" placeholder="Eg: Landscape Properties"
                                    class="w-full" />
                            </span>
                        </div>

                        <div>
                            <span class="relative">
                                <label for="phone" class="font-bold block mb-2">Number of Units</label>
                                <InputText v-model="formData.unitCount" placeholder="Eg: 20" class="w-full" />
                            </span>
                        </div>

                        <div>
                            <span class="relative">
                                <label for="phone" class="font-bold block mb-2">Location Area</label>
                                <InputText v-model="formData.locationArea" placeholder="Lower Kabete" class="w-full" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>
