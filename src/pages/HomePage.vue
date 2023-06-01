<template>
  <div class="container-fluid">
   <section class="row">
<div class="col-md-3 m-2" v-for="gift in giftsInAppState" :key="gift.id">
  <GiftCard :giftProp="gift" />

</div>
   </section>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { computed, onMounted } from 'vue'
import { giftsService } from '../services/GiftsService.js'
import { AppState } from "../AppState.js";
import GiftCard from "../components/GiftCard.vue";

export default {
  components: { GiftCard },
  setup() {

    async function getGifts(){
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }
   
    onMounted(() => {
      getGifts()
    })

    return {
    placeholderImg: 'http://thiscatdoesnotexist.com',
    giftsInAppState: computed(()=> AppState.gifts)
  }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
