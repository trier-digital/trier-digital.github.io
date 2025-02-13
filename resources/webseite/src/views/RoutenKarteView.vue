<template>
    <!-- Page Title -->
    <div class="">
      <h1 class="page-title dark-background">Routen</h1>
        <h5>Routen von Demonstrationen, Umzügen und Paraden in Trier.</h5>
    </div><!-- End Page Title -->


    <div class="container">
          <iframe 
            src="assets\maps\Routen LL\index.html"
            width="100%" 
            height="600px" 
          ></iframe>
    </div>

  
  </template>
  <script>
  export default {
    name: 'RoutenKarteView',
    components: {},
  }
</script>

<style scoped>
.container {
  padding-top: 50px;
}

h5 {
  padding-top: 20px;
  padding-bottom: -20px;
  text-align: center;
}
</style>
