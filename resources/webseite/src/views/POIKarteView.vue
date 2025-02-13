<template>
    <!-- Page Title -->
    <div class="">
    <div class="">
      <h1 class="page-title dark-background">Markante Orte der Stadt</h1>
    </div> 
    </div><!-- End Page Title -->


    <div class="container">
          <iframe 
            src="assets\maps\Punkte Fotogruppe LL\index.html"
            width="100%" 
            height="600px" 
          ></iframe>
    </div>

</template>
<script>
  export default {
    name: 'POIKarteView',
    components: {},
  }
</script>

<style scoped>
.container {
  padding-top: 50px;
}
</style>