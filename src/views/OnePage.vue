<template>
    <div>
        <p>This is an One page</p>
    </div>
</template>

<script>

import { lifecycleLoggerMixin } from "@/mixins/lifecycleLoggerMixin";

export default {
    name: 'OnePage',
    mixins: [lifecycleLoggerMixin]
}
</script>