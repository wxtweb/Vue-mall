import {request} from "./request";

export function getDetial( id) {
  return request({
    url:'/detail',
    params: {
      id
    }
  })
}


export class Goods {
  constructor(itemInfo, columns, services,) {
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
  }
}
