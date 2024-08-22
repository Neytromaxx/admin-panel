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
                          Title
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Images
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Actions
                      </th>
                      <th scope="col" class="px-6 py-3" style="text-align: right;">
                          <button @click="onModal()" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                              Add a product
                          </button>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      v-for="(products, index) in products" :key="index">
                      <td class="border px-4 py-2">{{index+1}}</td>
                      <td class="border px-4 py-2">{{products?.title}}</td>
                      <td class="border px-4 py-2">
                        <img :src="
                          'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/' +
                          products?.image_src" alt="Category Picture" width="100" />
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


  <!-- Modal -->


  
<!-- Main modal -->
<Teleport to="body">
<div v-if="modal" id="crud-modal" tabindex="-1"  class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Product
              </h3>
              <button @click="modal = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span class="sr-only">Close modal</span>
              </button>
          </div>
          <!-- Modal body -->
          <form @submit.prevent="submit" class="p-4 md:p-5">
              <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title *</label>
                      <input v-model="title" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                  </div>
                  <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture *</label>
                      <input @change="handleFileChange($event)" type="file" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                  </div>
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  Add new product
              </button>
          </form>
      </div>
  </div>
</div> 
</Teleport>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const modal = ref(false)
const products = ref([]);
const title = ref('')
const picFile = ref(null)
const store = useStore()
const accessToken = computed(()=> store.getters.getToken) 

const handleFileChange = (event)=>{
  if(event.target && event.target.files.length>0){
  picFile.value = event?.target?.files[0]
  }
  else{
      console.log('Error')
  }
}

const onModal = () =>{
  modal.value = true
}

async function fletchcard() {
const res = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/models");
const data = await res.json();
products.value = data?.data;
}
fletchcard();

const submit = () => {
const formData = new FormData();
formData.append("title", title.value);
formData.append("images", picFile.value);
fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models/`, {
  method: "POST",
  body: formData,
  headers: {
    'Authorization': `Bearer ${accessToken.value}`,
  },
})
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      modal.value = false;
      fletchcard();
      title.value = "";
      picFile.value = "";
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
};

</script>

<style scoped>
  .p-4{
      margin-top: 50px;
  }
</style>