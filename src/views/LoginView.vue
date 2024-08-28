<template>
    <form @submit.prevent="submit" class="max-w-sm mx-auto top">
      <div class="mb-5">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="user"    
            placeholder="Phone number"
            required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            v-model="pass"
            autocomplete="no"
            placeholder="Parol"
            required />
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const user = ref('')
const pass = ref('')
const store = useStore()
function submit(){
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin',{
       method: 'POST', 
       body:JSON.stringify({
        phone_number: user.value,
        password: pass.value
       }),
       headers:{
        'Content-Type':'application/json'
       }
    })
    .then((data) => data.json())
    .then((data) => {
        if (data?.success) {
            localStorage.setItem('accessToken', data?.data?.tokens?.accessToken?.token)
            const accessToken = localStorage.getItem('accessToken')
            store.dispatch('updateToken', accessToken)
            toast("Muvaffaqiyatli kirish!", {
                type: "success",
                "autoClose": 2500,
                position: "top-center",
                transition: "flip",
            });
            router.push('/home/categories')
        } else {
            toast("User yoki parol xato!", {
                type: "error",
                position: "top-center",
                transition: "flip",
            });
            user.value = ''
            pass.value = ''
        }
    });
    // .then((data) =>{
    //     if(data?.success){
    //         localStorage.setItem('accessToken', data?.data?.tokens?.accessToken?.token)
    //         const accessToken = localStorage.getItem(('accessToken'))
    //         store.dispatch('updateToken', accessToken)
    //         router.push('/home/categories')
    //     }
    //     else{
    //         alert('user yoki parol xato!')
    //         user.value = ''
    //         pass.value = ''
    //     }
    // })
}


</script>

<style scoped>
    .top{
        margin-top: 100px;
    }
</style>