<template>
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
    <button type="submit"   class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
        Add new product
    </button>
  </form>
</template>

<script setup>
import {computed, defineEmits, ref} from 'vue'
import { useStore } from 'vuex'

const emits = defineEmits(['created'])
const EnName = ref('')
const RuName = ref('')
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
              emits('created')
            }
          }).catch((error)=>{
        console.error('Error', error)
    })
}

</script>

<style>

</style>