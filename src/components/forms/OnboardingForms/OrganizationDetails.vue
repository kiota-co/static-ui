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
    <Card>
        <template #content>
            <div class="space-y-4">
                <div>
                    <p>Organization Details</p>
                </div>
                <div>
                    <div class="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label for="phone" class="font-bold block mb-2">Company/Business Name</label>
                            <span class="relative w-full">
                                <InputText v-model="formData.firstName" placeholder="Eg: Paradise Ventures Inc"
                                    class="w-full" />
                            </span>
                        </div>

                        <div>
                            <span class="relative">
                                <label for="phone" class="font-bold block mb-2">Number of Properties</label>
                                <InputText v-model="formData.lastName" placeholder="100" class="w-full" />
                            </span>
                        </div>

                        <div>
                            <span class="relative">
                                <label for="phone" class="font-bold block mb-2">Locations</label>
                                <InputText v-model="formData.email"
                                    placeholder="Eg: Waiyaki way, Lower Kabete, Kikuyu, Ruaka" class="w-full" />
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="my-4">
                        <p>Contact Persons Details</p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label for="phone" class="font-bold block mb-2">First Name</label>
                            <span class="relative w-full">
                                <InputText v-model="formData.phone" placeholder="Enter your First Name"
                                    class="w-full" />
                            </span>
                        </div>

                        <div>
                            <label for="phone" class="font-bold block mb-2">Last Name</label>
                            <span class="relative w-full">
                                <InputText v-model="formData.phone" placeholder="Enter your Last Name" class="w-full" />
                            </span>
                        </div>

                        <div>
                            <label for="phone" class="font-bold block mb-2">Phone Number</label>
                            <span class="relative w-full">
                                <InputText v-model="formData.phone" placeholder="Enter your phone number"
                                    class="w-full" />
                            </span>
                        </div>

                        <div>
                            <label for="phone" class="font-bold block mb-2">Email Address</label>
                            <span class="relative w-full">
                                <InputText v-model="formData.email" placeholder="Enter your email address"
                                    class="w-full" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>
