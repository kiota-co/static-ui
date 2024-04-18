<script>
import BreadCrumbComponent from '@/components/BreadCrumbComponent.vue';
import PropertyHeaderComponent from '@/components/PropertyHeaderComponent.vue';

export default {
    components: { PropertyHeaderComponent, BreadCrumbComponent },
}

</script>

<template>

    <main class="">

        <PropertyHeaderComponent />

        <BreadCrumbComponent />

        <div class="mx-auto max-w-7xl px-6 py-16 lg:px-0  ">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                <div
                    class="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
                    <div class="flex justify-between">
                        <div>
                            <h2 class="text-base font-semibold leading-6 text-gray-900">Invoice #1029933</h2>
                        </div>
                        <div class="flex items-center space-x-1 pt-6 font-medium text-gray-900 sm:pt-0">
                            <div class="flex-none self-end px-6 text-center">
                                <dt class="sr-only">Status</dt>

                                <dd
                                    class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                                    Unpaid</dd>
                            </div>
                            <div>
                                <dd class="sm:mt-1">KES. 20,000.00</dd>
                            </div>
                        </div>
                    </div>

                    <dl class="grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                        <div class="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                            <dt class="font-semibold text-gray-900">To</dt>

                            <dd class="mt-2 text-gray-500"><span class="font-medium text-gray-900">Alex
                                    Cosmas</span><br />Unit 3A<br /></dd>
                        </div>
                        <div class="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                            <dt class="font-semibold text-gray-900">From</dt>
                            <dd class="mt-2 text-gray-500"><span class="font-medium text-gray-900">Landscape
                                    Properties</span><br />886 Walter Street<br /></dd>
                        </div>
                    </dl>

                    <table class="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
                        <colgroup>
                            <col class="w-full" />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead class="border-b border-gray-200 text-gray-900">
                            <tr>
                                <th scope="col" class="px-0 py-3 font-semibold">Description</th>
                                <th scope="col" class="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                                    Unit</th>
                                <th scope="col" class="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                                    Rate</th>
                                <th scope="col" class="py-3 pl-8 pr-0 text-right font-semibold">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-100">
                                <td class="max-w-0 px-0 py-5 align-top">
                                    <!-- <div class="truncate font-medium text-gray-900">Logo redesign</div> -->
                                    <div class="truncate text-gray-500">Rent</div>
                                </td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    1</td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    100</td>
                                <td class="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">20,000.00
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="max-w-0 px-0 py-5 align-top">
                                    <!-- <div class="truncate font-medium text-gray-900">Logo redesign</div> -->
                                    <div class="truncate text-gray-500">Water</div>
                                </td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    5</td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    150</td>
                                <td class="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">750.00</td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="max-w-0 px-0 py-5 align-top">
                                    <div class="truncate text-gray-500">Garbage</div>
                                </td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    1</td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    250</td>
                                <td class="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">250.00</td>
                            </tr>

                            <tr class="border-b border-gray-100">
                                <td class="max-w-0 px-0 py-5 align-top">
                                    <div class="truncate text-gray-500">Security</div>
                                </td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    1</td>
                                <td
                                    class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                                    500</td>
                                <td class="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">500.00</td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <h3 class="sr-only">Order placed on <time datetime="2021-01-22">Jan 22, 24</time></h3>

                        <div class=" bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                            <dl
                                class="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                <div class="flex justify-between sm:block">
                                    <dt class="font-medium text-gray-900">Issued</dt>
                                    <dd class="sm:mt-1">
                                        <time datetime="2021-01-22">22 Jan 2024</time>
                                    </dd>
                                </div>
                                <div class="flex justify-between pt-6 sm:block sm:pt-0">
                                    <dt class="font-medium text-gray-900">Due on</dt>
                                    <dd class="sm:mt-1">
                                        <time datetime="2021-01-22">22 Jan 2024</time>
                                    </dd>
                                </div>
                            </dl>
                            <a href="#"
                                class="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto">
                                Make Payment
                                <span class="sr-only">for order WU88191111</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </main>

</template>