<script>
import OrganizationDetails from '@/components/forms/OnboardingForms/OrganizationDetails.vue';
export default {
    name: "App",
    components: {
        OrganizationDetails
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
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
                        sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>



    </div>
</template>

<style></style>