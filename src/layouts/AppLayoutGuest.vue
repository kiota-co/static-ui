<template>
    <div>
        <h1>App Layout Guest</h1>
        <slot />
    </div>
</template>

<script>

import { lifecycleLoggerMixin } from "@/mixins/lifecycleLoggerMixin";

export default {
    name: "AppLayoutGuest",
    mixins: [lifecycleLoggerMixin]
}
</script>

<style scoped></style>
