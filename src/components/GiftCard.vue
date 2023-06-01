<template>
<div class="col-3">
  <img @click="openGift(giftProp.id)" class="img-fluid" :src="giftProp?.opened ? giftProp?.url: 'https://th.bing.com/th?id=OIP.GP4MIpZ3IlgHvzjhxbq06QHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'" alt="">
  <p>{{ giftProp?.tag }}</p>
  
</div>


</template>


<script>
import { computed } from "vue"
import { Gift } from "../models/Gift.js"
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"
import { giftsService } from "../services/GiftsService.js"
import { logger } from "../utils/Logger.js"
export default {
  props: {
    giftProp: { type: Gift, required: true}
  },
  setup(){
    return {
      account: computed(()=> AppState.account),
      async openGift(id){
        try {
          await giftsService.openGift(id)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style> 

</style>