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
                        <!-- <td class="border px-4 py-2">{{categories?.id}}</td> -->
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
                            <button type="button" @click="modalDel = true" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded px-3 py-2 text-sm text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                Delete
                            </button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <!-- MODAL -->


<Teleport to="body">
    <div v-if="modal"  tabindex="-1" aria-hidden="true" class="a overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full" >
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" >
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Product
                </h3>
                <button type="button" @click="modal = false"  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <form @submit.prevent="submit" class="p-4 md:p-5">
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name En *</label>
                        <input v-model="EnName" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Ru *</label>
                        <input v-model="RuName" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture *</label>
                        <input @change="handleFileChange($event)" type="file" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                    </div>

                </div>
                <button @click="modal = false" type="submit"   class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new product
                </button>
            </form>
        </div>
    </div>
</div> 

<!-- Modal delete -->
    <div v-if="modalDel" id="popup-modal" tabindex="-1" class="a overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <form @submit.prevent="deleteCategory">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="modalDel = false" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                    <button @click="deleteCategory(categories.id)" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Yes, I'm sure
                    </button>
                    <button @click="modalDel = false" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                </div>
            </div>
        </div>
    </form>
    </div>

</Teleport>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useStore } from 'vuex'

const modal = ref(false)
const modalDel = ref(false)
const categories = ref([])
const EnName = ref('')
const RuName = ref('')
const picFile = ref(null)
// const idtovar = ref('')

const store = useStore()
const accessToken = computed(()=> store.getters.getToken) 

async function fletchcard() {
  const res = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories");
  const data = await res.json();
  categories.value = data?.data;
}
fletchcard();



const handleFileChange = (event)=>{
    if(event.target && event.target.files.length>0){
    picFile.value = event?.target?.files[0]
    }
    else{
        console.log('Error')
    }
}

const submit = async () =>{
    const formData = new FormData();
    formData.append('name_en',EnName.value);
    formData.append('name_ru',RuName.value);
    formData.append('images',picFile.value);

         fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/categories`,{
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${accessToken.value}`,
            },

        }).then((res)=>res.json())
          .then((res)=>{
            if(res.success){
                console.log(res)
            }
          }).catch((error)=>{
        console.error('Error', error)
    })
}

// const tovarid = (id) =>{
//   idtovar.value = id
//   console.log(idtovar.value)
// }


const deleteCategory = async (id) =>{
    console.log(id)
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/categories/${id}`,{
        method:'DELETE',
        headers:{
            'Authorization' : `Bearer ${accessToken.value}`
        }
    })
    .then((res) => res.json)
    .then((res) => {
        if(res.success){
            fletchcard();
            modalDel(false)
        }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

</script>

<style scoped>
    .p-4{
        margin-top: 50px;
    }
    .a{
         position: fixed;
        top: 0;
        right: 0;
        left: 0px;
        bottom: 0;
        background: rgba(0, 0, 0, .35);
        z-index: 100;
    }
</style>