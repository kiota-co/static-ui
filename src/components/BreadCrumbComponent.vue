<template>
    <div class="card flex ">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home'
            },
            items: [
                { label: 'Units' },
                { label: 'Tenants' },
                { label: 'Invoices' },
                { label: '1029933' },

            ]
        }
    }
}
</script>
