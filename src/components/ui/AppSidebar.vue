<template>
  <div class="sidebar">
    <h2>AutoZoom Admin</h2>
    <div class="sidebar-lists"><router-link to="/home/categories"> Categories</router-link></div>
    <div class="sidebar-lists"><router-link to="brands"> Brands</router-link></div>
    <div class="sidebar-lists"><router-link to="cities"> Cities</router-link></div>
    <div class="sidebar-lists"><router-link to="locations"> Locations</router-link></div>
    <div class="sidebar-lists"><router-link to="cars"> Cars</router-link></div>
    <div class="sidebar-lists"><router-link to="models"> Models</router-link></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .sidebar{
        width: 250px;
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: #0c0586;
        padding: .5rem;
        text-align: left;
    }
    h2{
        color: #fff;
    }
    .sidebar-lists a{
        text-decoration: none;
        color: #fff;
        margin: 1.5rem;
        line-height: 30px;
    }
</style>