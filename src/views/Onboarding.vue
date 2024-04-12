<script>
import EmptyState from '@/components/forms/EmptyState.vue';
import OrganizationDetails from '@/components/forms/OnboardingForms/OrganizationDetails.vue';
import PropertyDetails from '@/components/forms/OnboardingForms/PropertyDetails.vue';
import KYCUnitTableDetails from '@/components/tables/KYCUnitTableDetails.vue';

import OrganizationPaymentSettings from '@/components/forms/Payment/OrganizationPaymentSettings.vue';

export default {
    name: "App",
    components: {
        OrganizationDetails, PropertyDetails, EmptyState, KYCUnitTableDetails, OrganizationPaymentSettings
    },
};
</script>


<template>
    <div>
        <h1 class="text-xl  text-gray-900 mb-10">Lets help you get started</h1>

        <div>
            <Accordion multiple expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                <AccordionTab header="Add your Organization">

                    <OrganizationDetails />

                </AccordionTab>
                <AccordionTab header="Add your property/ies">

                    <div class=" grid space-y-4">
                        <EmptyState />
                        <PropertyDetails />

                        <KYCUnitTableDetails />
                    </div>



                    <!-- <UnitDetailsForm /> -->
                </AccordionTab>
                <AccordionTab header="Configure your Payment">
                    <OrganizationPaymentSettings />
                </AccordionTab>
            </Accordion>
        </div>

        <div>
            <div class="my-4">
                <button type="button"
                    class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <!-- <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg> -->
                    Save your profile
                </button>
            </div>
        </div>




    </div>
</template>

<style></style>