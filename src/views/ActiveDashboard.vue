<template>
    <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.name"
            class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
            <dt class="text-sm font-medium leading-6 text-gray-500">{{ stat.name }}</dt>
            <dd :class="[stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700', 'text-xs font-medium']">{{
                stat.change }}</dd>
            <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">{{ stat.value }}
            </dd>
        </div>
    </dl>
</template>

<script setup>

const stats = [
    { name: 'Properties', value: '100', change: '', changeType: 'positive' },
    { name: 'Invoiced', value: 'KES.10,787,000', change: '', changeType: 'negative' },
    { name: 'Paid', value: '$245,988.00', change: '+27%', changeType: 'positive' },
    { name: 'Unpaid', value: '$30,156.00', change: '-73%', changeType: 'negative' },
]


</script>