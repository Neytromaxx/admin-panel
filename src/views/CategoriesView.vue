<template>
    
    <div class="p-4 sm:ml-64">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        №
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name En
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name Ru
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Images
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Actions
                    </th>
                    <th scope="col" class="px-6 py-3" style="text-align: right;">
                        <button @click="modal = true" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                            Add a product
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="(categories, index) in categories" :key="index">
                    <td class="border px-4 py-2">{{index+1}}</td>
                    <td class="border px-4 py-2">{{categories?.name_en}}</td>
                    <td class="border px-4 py-2">{{categories?.name_ru}}</td>
                    <td class="border px-4 py-2">
                      <img :src="
                        'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/' +
                        categories?.image_src" alt="Category Picture" width="100" />
                    </td>
                    <td class="px-6 py-4">
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                          Edit
                        </button>
                        &nbsp;
                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded px-3 py-2 text-sm text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<Teleport to="body">
<app-modal v-if="modal" @close="modal = false ">
    <request-add @created="modal=false" :fletchFunction="fletchcard()"></request-add>
</app-modal>
</Teleport>
</template>

<script setup>
import { ref } from 'vue';

import AppModal from '@/components/ui/AppModal.vue'
import RequestAdd from '@/components/request/RequestAdd.vue'

const modal = ref(false)
const categories = ref([]);

async function fletchcard() {
  const res = await fetch(
    "https://autoapi.dezinfeksiyatashkent.uz/api/categories"
  );
  const data = await res.json();
  categories.value = data?.data;
}
fletchcard();
</script>

<style scoped>
    .p-4{
        margin-top: 50px;
    }
</style>