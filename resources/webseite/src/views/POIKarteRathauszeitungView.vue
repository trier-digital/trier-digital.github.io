<template>
    <!-- Page Title -->
    <div class="page-title dark-background">
    <div class="container position-relative">
      <h1>Orte aus der Diskursanalyse</h1>
    </div> 
    </div><!-- End Page Title -->


    <div class="container">
          <iframe 
            src="assets/maps/poi_karte/index.html"
            width="100%" 
            height="600px" 
          ></iframe>
    </div>

</template>
<script>
  export default {
    name: 'POIKarteRathauszeitungView',
    components: {},
  }
</script>

<style scoped>
.container {
  padding-top: 50px;
}
</style>