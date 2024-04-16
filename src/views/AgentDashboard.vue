<template>


    <div>
        <GreetingsComponent />


        <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.name"
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
                <dt class="text-sm font-medium leading-6 text-gray-500">{{ stat.name }}</dt>
                <dd
                    :class="[stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700', 'text-xs font-medium']">
                    {{
                        stat.change }}</dd>
                <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">{{ stat.value
                    }}
                </dd>
            </div>
        </dl>

        <div class="my-10">
            <div>
                <div class="px-4 ">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <h1 class="text-base font-semibold leading-6 text-gray-900">Properties</h1>
                            <p class="mt-2 text-sm text-gray-700">A list of all the properties in your Organization
                            </p>
                        </div>
                        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <button type="button"
                                class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                @click="addProperty">
                                Add Property
                            </button>
                        </div>
                    </div>
                    <div class="mt-8 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">
                                                Property Name</th>
                                            <th scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Number
                                                of
                                                Units</th>
                                            <th scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Locality
                                            </th>

                                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 bg-white">
                                        <tr v-for="(property, index) in properties" :key="index">
                                            <td
                                                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                                {{ property.propertyName }}
                                            </td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{
                                                property.units
                                            }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{
                                                property.locality }}</td>
                                            <td
                                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                                                <a @click="goToLandScapeProperties"
                                                    class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import GreetingsComponent from '@/components/GreetingsComponent.vue';

export default {
    components: { GreetingsComponent },
    data() {
        return {
            properties: [
                { propertyName: 'Land Scape Properties', units: 25, locality: 'Lower Kabete' },
                { propertyName: 'Water Creek', units: '20', locality: 'Lower Kabete' },
                { propertyName: 'ABC Lofts', units: '15', locality: 'Kikuyu Kabete' },
                { propertyName: 'Eageles Nests', units: '40', locality: 'Lower Kabete' },
                { propertyName: 'Land Scape Properties', units: '25', locality: 'Ruaka' },

            ],
            stats: [
                { name: 'Properties', value: '5', change: '', changeType: 'positive' },
                { name: 'Invoiced', value: 'KES.0', change: '98%', changeType: 'negative' },
                { name: 'Paid', value: 'KES.0', change: '+27%', changeType: 'positive' },
                { name: 'Unpaid', value: 'KES.0', change: '-73%', changeType: 'negative' },
            ]
        };
    },
    methods: {
        addProperty() {
            // Implement functionality to add a new property
            const newProperty = { propertyName: 'New Property', units: 10, locality: 'New Locality' };
            this.properties.push(newProperty);
        },

        goToLandScapeProperties() {
            this.$router.push("/landscape-properties");
        },
    },
};
</script>
