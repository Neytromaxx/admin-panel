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
                        <button type="button" class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add a category</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="px-6 py-4 text-center" style="text-align: left;">
                        <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                        <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                        <!-- <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button> -->
                    </td>
                    <td class="px-6 py-4">

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  <!-- <div>
     <table>
        <tr>
            <th>№</th>
            <th>name En</th>
            <th>name Ru</th>
            <th>Images</th>
            <th>Actions</th>
            <th><button>Add Category</button></th>
        </tr>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </table> 
  </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
    .p-4{
        margin-top: 50px;
    }
    /* div{
        position: relative;
        
    }
    table, tr, th{
        border: 1px solid;
        border-collapse: collapse;
        padding: 25px;
    } */
</style>