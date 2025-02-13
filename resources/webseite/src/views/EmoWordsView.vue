<script>
import Carousel from "@/components/Carousel.vue";
import DropdownImage from "@/components/DropdownImage.vue";
import EmoArrows from "@/components/EmoArrows.vue";

const root = "assets/img/svg/wordclouds/"
export default {
  name: "EmoWordsView",
  components: {EmoArrows, Carousel: Carousel, DropdownImage},
  data() {
    return {
      dropdown: {cat1: {
          category: "Partei",
          content: [
            'FDP', 'CDU', 'Die Linken', 'SPD', 'UBT-FWG-UBM', 'Die Grünen', 'AFD'
          ],
          active: "Partei"},
        cat2: {
          category: "Emotion",
          content: [
            'Wut', 'Angst', 'Ekel', 'Traurigkeit', 'Freude'
          ],
          active: "Emotion",
        }
      },
      images: [{'cat1': 'AFD', 'cat2': 'Angst', 'src': root + 'wordcloud_AFD_Angst.svg'}, {'cat1': 'AFD', 'cat2': 'Ekel', 'src': root + 'wordcloud_AFD_Ekel.svg'}, {'cat1': 'AFD', 'cat2': 'Freude', 'src': root + 'wordcloud_AFD_Freude.svg'}, {'cat1': 'AFD', 'cat2': 'Traurigkeit', 'src': root + 'wordcloud_AFD_Traurigkeit.svg'}, {'cat1': 'AFD', 'cat2': 'Wut', 'src': root + 'wordcloud_AFD_Wut.svg'}, {'cat1': 'CDU', 'cat2': 'Angst', 'src': root + 'wordcloud_CDU_Angst.svg'}, {'cat1': 'CDU', 'cat2': 'Ekel', 'src': root + 'wordcloud_CDU_Ekel.svg'}, {'cat1': 'CDU', 'cat2': 'Freude', 'src': root + 'wordcloud_CDU_Freude.svg'}, {'cat1': 'CDU', 'cat2': 'Traurigkeit', 'src': root + 'wordcloud_CDU_Traurigkeit.svg'}, {'cat1': 'CDU', 'cat2': 'Wut', 'src': root + 'wordcloud_CDU_Wut.svg'}, {'cat1': 'Die Grünen', 'cat2': 'Angst', 'src': root + 'wordcloud_Die Grünen_Angst.svg'}, {'cat1': 'Die Grünen', 'cat2': 'Ekel', 'src': root + 'wordcloud_Die Grünen_Ekel.svg'}, {'cat1': 'Die Grünen', 'cat2': 'Freude', 'src': root + 'wordcloud_Die Grünen_Freude.svg'}, {'cat1': 'Die Grünen', 'cat2': 'Traurigkeit', 'src': root + 'wordcloud_Die Grünen_Traurigkeit.svg'}, {'cat1': 'Die Grünen', 'cat2': 'Wut', 'src': root + 'wordcloud_Die Grünen_Wut.svg'}, {'cat1': 'Die Linken', 'cat2': 'Angst', 'src': root + 'wordcloud_Die Linken_Angst.svg'}, {'cat1': 'Die Linken', 'cat2': 'Ekel', 'src': root + 'wordcloud_Die Linken_Ekel.svg'}, {'cat1': 'Die Linken', 'cat2': 'Freude', 'src': root + 'wordcloud_Die Linken_Freude.svg'}, {'cat1': 'Die Linken', 'cat2': 'Traurigkeit', 'src': root + 'wordcloud_Die Linken_Traurigkeit.svg'}, {'cat1': 'Die Linken', 'cat2': 'Wut', 'src': root + 'wordcloud_Die Linken_Wut.svg'}, {'cat1': 'FDP', 'cat2': 'Angst', 'src': root + 'wordcloud_FDP_Angst.svg'}, {'cat1': 'FDP', 'cat2': 'Ekel', 'src': root + 'wordcloud_FDP_Ekel.svg'}, {'cat1': 'FDP', 'cat2': 'Freude', 'src': root + 'wordcloud_FDP_Freude.svg'}, {'cat1': 'FDP', 'cat2': 'Traurigkeit', 'src': root + 'wordcloud_FDP_Traurigkeit.svg'}, {'cat1': 'FDP', 'cat2': 'Wut', 'src': root + 'wordcloud_FDP_Wut.svg'}, {'cat1': 'SPD', 'cat2': 'Angst', 'src': root + 'wordcloud_SPD_Angst.svg'}, {'cat1': 'SPD', 'cat2': 'Freude', 'src': root + 'wordcloud_SPD_Freude.svg'}, {'cat1': 'SPD', 'cat2': 'Traurigkeit', 'src': root + 'wordcloud_SPD_Traurigkeit.svg'}, {'cat1': 'SPD', 'cat2': 'Wut', 'src': root + 'wordcloud_SPD_Wut.svg'}, {'cat1': 'UBT-FWG-UBM', 'cat2': 'Angst', 'src': root + 'wordcloud_UBT-FWG-UBM_Angst.svg'}, {'cat1': 'UBT-FWG-UBM', 'cat2': 'Ekel', 'src': root + 'wordcloud_UBT-FWG-UBM_Ekel.svg'}, {'cat1': 'UBT-FWG-UBM', 'cat2': 'Freude', 'src': root + 'wordcloud_UBT-FWG-UBM_Freude.svg'}, {'cat1': 'UBT-FWG-UBM', 'cat2': 'Traurigkeit', 'src': root + 'wordcloud_UBT-FWG-UBM_Traurigkeit.svg'}, {'cat1': 'UBT-FWG-UBM', 'cat2': 'Wut', 'src': root + 'wordcloud_UBT-FWG-UBM_Wut.svg'}],
      left: "emodistprozent"
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="page-title dark-background">Emotionen in Wörtern</h1>
    <div class="d-flex flex-row justify-content-center border border-dark">
      <DropdownImage :dropdown="dropdown" :previews="images"></DropdownImage>
    </div>
    <EmoArrows :left="left" :right="right"/>
  </div>
</template>

<style scoped>

</style>