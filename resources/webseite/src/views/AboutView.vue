<template>
  <div class="about">
    <h1 class="page-title">This is an about page</h1>
  </div>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/logo.png" class="d-block w-100" alt="test">
    </div>
    <div class="carousel-item">
      <img src="../assets/logo.png" class="d-block w-100" alt="test">
    </div>
    <div class="carousel-item">
      <img src="../assets/logo.png" class="d-block w-100" alt="test ">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style>
#carouselExample{
  width: 300px;
  border: solid;
}
</style>
