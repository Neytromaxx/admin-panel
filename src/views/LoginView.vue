<template>
    <form @submit.prevent="submit">
        <div class="container">
            <div class="inputs">
                  <input 
                      type="text" 
                      v-model="user" 
                      required
                      placeholder="Phone number"
                  >
                  <input 
                      type="password" 
                      v-model="pass"
                      autocomplete="no"
                      required
                      placeholder="Parol"
                  >
            </div>
            <button type="submit">Kirish</button>
        </div>
    </form>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import { useStore } from "vuex";


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
    .then((data) =>{
        if(data?.success){
            localStorage.setItem('accessToken', data?.data?.tokens?.accessToken?.token)
            const accessToken = localStorage.getItem(('accessToken'))
            store.dispatch('updateToken', accessToken)
            router.push('/home/categories')
        }
        else{
            alert('user yoki parol xato!')
            user.value = ''
            pass.value = ''
        }
    })
}


</script>

<style scoped>
    .container{
        margin: 0 auto;
        width: 370px;
        height: 320px;
        background-color: #f6f8f9;
        border: 1px solid #f6f8f9;
        border-radius: 1rem;
        margin-top: 150px;
    }
    .inputs{
        margin-top: 50px;
    }
    input{
        width: 280px;
        height: 35px;
        margin-top: 25px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 0.5rem;
        font-size: 20px;
    }
    button{
        width: 300px;
        height: 45px;
        margin-top: 35px;
        padding: 5px;
        border: 1px solid black;
        border-radius: .4rem;
        background-color: #11056c;
        color: #f6f8f9;
        cursor: pointer;
    }
    .invalid{
        color: red;
    }
</style>