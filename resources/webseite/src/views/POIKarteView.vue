<template>
    <!-- Page Title -->
    <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Markante Orte der Stadt</h1>
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