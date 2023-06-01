import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js"

class GiftsService {
async getGifts(){
 const res = await api.get('api/gifts')
 logger.log('GIFTS', res.data)
 AppState.gifts = res.data.map(g=> new Gift(g))
 logger.log(AppState.gifts)

}

async openGift(id){
  const filteredGift = AppState.gifts.find(g => g.id == id)
  // logger.log('now changing:', filteredGift)
  filteredGift.opened = true
  // logger.log('the filtered gift is now:', filteredGift);
  const res = await api.put('api/gifts/' + id, filteredGift)
this.getGifts()
  // logger.log('the data is now:', res.data);

}

}

export const giftsService = new GiftsService()