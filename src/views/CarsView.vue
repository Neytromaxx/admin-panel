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
                          Rangi
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Brand
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Model
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Kategoriya
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Lokatsiya
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
                      <td class="border px-4 py-2">{{products?.color}}</td>
                      <td class="border px-4 py-2">{{products?.brand?.title}}</td>
                      <td class="border px-4 py-2">{{products?.model?.name}}</td>
                      <td class="border px-4 py-2">{{products?.category?.name_en}}</td>
                      <td class="border px-4 py-2">{{products?.location?.name}}</td>
                      
                      <td class="px-6 py-4">
                          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Edit
                          </button>
                          &nbsp;
                          <button @click="modalDel = true" type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded px-3 py-2 text-sm text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
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
<div v-if="modal" id="crud-modal" tabindex="-1"  class="a overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
                <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Category</p></label
            >
            <select
              required
              name=""
              id=""
              @input="categoryinput($event.target.value)"
          
            >
      
             <option  v-for="item in category" :key="item" :value='item.id'>{{ item.name_en }}</option>  
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Brand</p></label
            >
            <select
              required
              name=""
              id=""
              @input="brandinput($event.target.value)"
            >
            <option  v-for="item in brands" :key="item" :value='item.id'>{{ item.title }}</option>
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Model</p></label
            >
            <select
              required
              name=""
              id=""
              @input="modelinput($event.target.value)"
              
            >
            <option  v-for="item in models" :key="item" :value='item.id'>{{ item.name }}</option>
     
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Location</p></label
            >
            <select
              required
              name=""
              id=""
              @input="locationinput($event.target.value)"
            >
              <option v-for="item in location" :key="item" :value='item.id' >{{ item.name }}</option>
             
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>City</p></label
            >
            <select
              required
              name=""
              id=""
              @input="cityinput($event.target.value)"
            >
            <option v-for="item in city" :key="item" :value='item.id' >{{ item.name }}</option>
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Color</p></label
            >
            <input
              class="colorinput"
              type="color"
              value=""
              v-model="inputcolor"
            />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Year</p></label
            >
            <input type="number" v-model="inputyear" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Seconds</p></label
            >
            <input type="number" v-model="inputseconds" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Speed</p></label
            >
            <input type="number" v-model="inputspeed" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Max People</p></label
            >
            <select
              required
              name=""
              id=""
              @input="peopleinput($event.target.value)"
            >
              <option value="" disabled selected hidden>Select People</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="auto">auto</option>
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Motor</p></label
            >
            <input type="text" v-model="inputmotor" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Transmission</p></label
            >
            <select
              required
              name=""
              id=""
              @input="transmissioninput($event.target.value)"
            >
              <option value="" disabled selected hidden>
                Select transmission
              </option>
              <option value="Mechanics">Mechanics</option>
              <option value="Automatic box">Automatic box</option>
              <option value="Mechanics and Automatic">
                Mechanics and Automatic
              </option>
              <option value="Electric">Electric</option>
              <option value="defauld">defauld</option>
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Drive Side</p></label
            >
            <input type="text" v-model="inputdrive" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Fuel</p></label
            >
            <select
              required
              name=""
              id=""
              @input="fuelinput($event.target.value)"
            >
              <option value="" disabled selected hidden>Select Fuel</option>
              <option value="Gas cylinder">Gas cylinder</option>
              <option value="Gasoline tank">Gasoline tank</option>
              <option value="Methane cylinder">Methane cylinder</option>
              <option value="Electric battery">Electric battery</option>
              <option value="defauld">defauld</option>
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Limit Per Day</p></label
            >
            <input type="number" v-model="inputlimit" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Deposit</p></label
            >
            <input type="number" v-model="inputdeposit" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Premium Protection Price</p></label
            >
            <input type="text" v-model="inputpremium" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in AED</p></label
            >
            <input type="text" v-model="inputpriceead" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in AED (Otd)</p></label
            >
            <input type="text" v-model="inputpriceeadotd" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in USD</p></label
            >
            <input type="text" v-model="inputpriceusd" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in USD(Otd)</p></label
            >
            <input type="text" v-model="inputpriceusdotd" />
          </div>
          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Upload car images</p></label
            >
            <input
              class="inputimg"
              placeholder=""
              type="file"
              @input="imagePicture1($event.target.files[0])"
              accept="image/*"
              required
            />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Upload the main image</p></label
            >
            <input
              class="inputimg"
              placeholder=""
              type="file"
              @input="imagePicture2($event.target.files[0])"
              accept="image/*"
              required
            />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Upload the cover image</p></label
            >
            <input
              class="inputimg"
              placeholder=""
              type="file"
              @input="imagePicture3($event.target.files[0])"
              accept="image/*"
              required
            />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Inclusive</p></label
            >
            <input class="chek" type="checkbox" v-model="inputinclusive" />
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
<!-- Modal delete -->
<div v-if="modalDel" id="popup-modal" tabindex="-1" class="a overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
                    <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Yes, I'm sure
                    </button>
                    <button @click="modalDel = false" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                </div>
            </div>
        </div>
    </div>

          <!-- Modal edit -->
  <div v-if="modalEdit"  tabindex="-1" aria-hidden="true" class="a overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-md max-h-full" >
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" >
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Edit Product
                  </h3>
                  <button type="button" @click="modalEdit = false"  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
              <form @submit.prevent="editCars" class="p-4 md:p-5">
                  <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Category</p></label
            >
            <select
              required
              name=""
              id=""
              @input="categoryinput($event.target.value)"
             
            >
            <option value="" disabled selected hidden>{{ category[indextovar]?.name_en }}</option>
            <option  v-for="item in category" :key="item" :value='item.id'>{{ item?.name_en }}</option>  
            </select>
          </div>
          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Brand</p></label
            >
            <select
              required
              name=""
              id=""
              @input="brandinput($event.target.value)"
            >
            <option value="" disabled selected hidden>{{ brands[indextovar]?.title }}</option>
            <option  v-for="item in brands" :key="item" :value='item.id'>{{ item?.title }}</option>  
    
            </select>
          </div>
          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Model</p></label
            >
            <select
              required
              name=""
              id=""
              @input="modelinput($event.target.value)"
            >
            <option value="" disabled selected hidden>{{ models[indextovar]?.name }}</option>
            <option  v-for="item in models" :key="item" :value='item.id'>{{ item?.name }}</option>  

            </select>
          </div>

          <!-- <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Location</p></label
            >
            <select
              required
              name=""
              id=""
              @input="locationinput($event.target.value)"
            >
            <option value="" disabled selected hidden>{{ location[indextovar]?.name }}</option>
            <option  v-for="item in location" :key="item" :value='item.id'>{{ item?.name }}</option>  
            </select>
          </div> -->

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>City</p></label
            >
            <select
              required
              name=""
              id=""
              @input="cityinput($event.target.value)"
            >
            <option value="" disabled selected hidden>{{ city[indextovar]?.name }}</option>
            <option  v-for="item in city" :key="item" :value='item.id'>{{ item?.name }}</option>  
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Color</p></label
            >
            <input
              class="colorinput"
              type="color"
              value=""
              v-model="inputcolor"

            />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Year</p></label
            >
            <input type="number"  v-model="inputyear" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Seconds</p></label
            >
            <input type="number" v-model="inputseconds" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Speed</p></label
            >
            <input type="number" v-model="inputspeed" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Max People</p></label
            >
            <select
              required
              name=""
              id=""
              @input="peopleinput($event.target.value)"
            >
              <option value="" disabled selected hidden>{{inputpeople}}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="auto">auto</option>
            </select>
          </div>

         <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Motor</p></label
            >
            <input type="text" v-model="inputmotor" />
          </div>
 
          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Transmission</p></label
            >
            <select
              required
              name=""
              id=""
              @input="transmissioninput($event.target.value)"
            >
              <option value="" disabled selected hidden>
              {{ inputtransmission }}
              </option>
              <option value="Mechanics">Mechanics</option>
              <option value="Automatic box">Automatic box</option>
              <option value="Mechanics and Automatic">
                Mechanics and Automatic
              </option>
              <option value="Electric">Electric</option>
              <option value="defauld">defauld</option>
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Drive Side</p></label
            >
            <input type="text" v-model="inputdrive" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Fuel</p></label
            >
            <select
              required
              name=""
              id=""
              @input="fuelinput($event.target.value)"
            >
              <option value="" disabled selected hidden>{{inputfuel}}</option>
              <option value="Gas cylinder">Gas cylinder</option>
              <option value="Gasoline tank">Gasoline tank</option>
              <option value="Methane cylinder">Methane cylinder</option>
              <option value="Electric battery">Electric battery</option>
              <option value="defauld">defauld</option>
            </select>
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Limit Per Day</p></label
            >
            <input type="number" v-model="inputlimit" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Deposit</p></label
            >
            <input type="number" v-model="inputdeposit" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Premium Protection Price</p></label
            >
            <input type="number" v-model="inputpremium" />
          </div>

          <!-- <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in AED</p></label
            >
            <input type="text" v-model="inputpriceead" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in AED (Otd)</p></label
            >
            <input type="text" v-model="inputpriceeadotd" />
          </div> -->

          <!-- <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in USD</p></label
            >
            <input type="text" v-model="inputpriceusd" />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Price in USD(Otd)</p></label
            >
            <input type="text" v-model="inputpriceusdotd" />
          </div> -->
          <!-- <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Upload car images</p></label>
              <img :src="
                    'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/' +
                    data.images1
                  " alt="">
            <input
              class="inputimg"
              placeholder=""
              type="file"
              @input="imagePicture1($event.target.files[0])"
              accept="image/*"
              required
            />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Upload the main image</p></label>
              <img :src="
                    'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/' +
                    data.images2
                  " alt="">
            <input
              class="inputimg"
              placeholder=""
              type="file"
              @input="imagePicture2($event.target.files[0])"
              accept="image/*"
              required
            />
          </div>

          <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Upload the cover image</p></label>
              <img :src="
                    'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/' +
                    data.cover
                  " alt="">
            <input
              class="inputimg"
              placeholder=""
              type="file"
              @input="imagePicture3($event.target.files[0])"
              accept="image/*"
              required
            />
          </div> 

            <div class="forma__card">
            <label for="">
              <span>*</span>
              <p>Inclusive</p></label
            >
            <input class="chek" type="checkbox" v-model="inputinclusive" />
          </div> -->
  
                  </div>
                  <button  type="submit"   class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <img src="../assets/img/pencil-square.svg" alt=""> &nbsp;   
                      Edit product
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
const modalDel = ref(false)
const products = ref([]);
const color = ref('')
const brand = ref('')
const model = ref('')
const category = ref('')
const location = ref('')
const store = useStore()
const accessToken = computed(()=> store.getters.getToken) 

const inputcategory = ref("");
function categoryinput(item) {
  inputcategory.value = item;

}
const inputbrand = ref("");
function brandinput(item) {
  inputbrand.value = item;
}
const inputmodel = ref("");
function modelinput(item) {
  inputmodel.value = item;
}
const inputlocation = ref("");
function locationinput(item) {
  inputlocation.value = item;
}
const inputcity = ref("");
function cityinput(item) {
  inputcity.value = item;
}
const inputpeople = ref("");
function peopleinput(item) {
  inputpeople.value = item;
}
const inputtransmission = ref("");
function transmissioninput(item) {
  inputtransmission.value = item;
}
const inputfuel = ref("");
function fuelinput(item) {
  inputfuel.value = item;
}
const inputimgcar = ref("");
function imagePicture1(item) {
  inputimgcar.value = item;
}
const inputimgmain = ref("");
function imagePicture2(item) {
  inputimgmain.value = item;
}

const inputimgcover = ref("");
function imagePicture3(item) {
  inputimgcover.value = item;
}

const inputcolor = ref("");
const inputyear = ref(null);
const inputseconds = ref("");
const inputspeed = ref("");
const inputmotor = ref("");
const inputdrive = ref("");
const inputlimit = ref("");
const inputdeposit = ref("");
const inputpremium = ref("");
const inputpriceead = ref("");
const inputpriceeadotd = ref("");
const inputpriceusd = ref("");
const inputpriceusdotd = ref("");
const inputinclusive = ref(false);

const onModal = () =>{
  modal.value = true
}

const fetchCars = async () => {
    try {
        const res = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/cars");
        if (!res.ok) {
            throw new Error(`HTTP xato: ${res.status}`);
        }
        const data = await res.json();
        products.value = data?.data;
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchCars();

const submit = () => {
  const formData = new FormData();
  formData.append("brand_id", inputbrand.value);
  formData.append("model_id", inputmodel.value);
  formData.append("city_id", inputcity.value);
  formData.append("color", inputcolor.value);
  formData.append("year", inputyear.value);
  formData.append("seconds", inputseconds.value);
  formData.append("category_id", inputcategory.value);
  formData.append("images", inputimgcar.value);
  formData.append("images", inputimgmain.value);
  formData.append("max_speed", inputspeed.value);
  formData.append("max_people", inputpeople.value);
  formData.append("transmission", inputtransmission.value);
  formData.append("motor", inputmotor.value);
  formData.append("drive_side", inputdrive.value);
  formData.append("petrol", inputfuel.value);
  formData.append("limitperday", inputlimit.value);
  formData.append("deposit", inputdeposit.value);
  formData.append("premium_protection", inputpremium.value);
  formData.append("price_in_aed", inputpriceead.value);
  formData.append("price_in_usd", inputpriceusd.value);
  formData.append("price_in_aed_sale", inputpriceeadotd.value);
  formData.append("price_in_usd_sale", inputpriceusdotd.value);
  formData.append("location_id", inputlocation.value);
  formData.append("inclusive", inputinclusive.value);
  formData.append("cover", inputimgcover.value);

  fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        fetchCars();
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