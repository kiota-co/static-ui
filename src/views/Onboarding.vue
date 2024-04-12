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






    </div>
</template>

<style></style>