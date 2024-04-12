<script setup>
import { ref } from "vue";

import InputText from "primevue/inputtext";
import Card from "primevue/card";

const formData = ref({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
});
</script>

<template>

    <Card class="">
        <template #content>
            <div class="grid gap-6 grid-cols-2">
                <div>
                    <label for="phone" class="font-bold block mb-2">First Name</label>
                    <span class="relative w-full">
                        <InputText v-model="formData.firstName" placeholder="Enter your first name" class="w-full" />
                    </span>
                </div>

                <div>
                    <span class="relative">
                        <label for="phone" class="font-bold block mb-2">Last Name</label>
                        <InputText v-model="formData.lastName" placeholder="Enter your last name" class="w-full" />
                    </span>
                </div>

                <div>
                    <span class="relative">
                        <label for="phone" class="font-bold block mb-2">Email Address</label>
                        <InputText v-model="formData.email" placeholder="Enter your email address" class="w-full" />
                    </span>
                </div>

                <div>
                    <span class="relative">
                        <label for="phone" class="font-bold block mb-2">Phone Number</label>
                        <InputText v-model="formData.phone" placeholder="Enter your phone number" class="w-full" />
                    </span>
                </div>


            </div>
        </template>
    </Card>
</template>