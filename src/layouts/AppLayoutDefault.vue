<template>
    <div>
        <h1>App Layout Default</h1>
        <slot />
    </div>
</template>

<script>

import { lifecycleLoggerMixin } from "@/mixins/lifecycleLoggerMixin";

export default {
    name: "AppLayoutDefault",
    mixins: [lifecycleLoggerMixin]
}
</script>

<style scoped></style>
