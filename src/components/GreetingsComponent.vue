<template>
    <div class="py-10">
        <header>
            <div class="px-4 sm:px-6 lg:px-8  md:justify-between md:items-center sm:flex">

                <div class="pt-1.5">
                    <p class="text-sm font-medium text-gray-500"><time datetime="2020-08-25">August 25, 2020</time></p>

                    <h1 class="text-2xl font-bold text-gray-900">Hi,Ricardo Cooper</h1>
                </div>

                <div>
                    <div class="my-4">
                        <button type="button" @click="goToAgentDashboard"
                            class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <!-- <svg class="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg> -->
                            Complete your profile (80%)
                        </button>
                    </div>
                </div>
            </div>
        </header>

    </div>
</template>

<script>
export default {
    name: "App",

    methods: {
        goToAgentDashboard() {
            this.$router.push("/agent-dashboard");
        },
    },
};
</script>
