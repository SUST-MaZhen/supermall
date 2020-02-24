import {request} from "./request";

export function getHomeMultiData() {
  return request({
    url:"/home/multidata"
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: 'v1//home/data',
    params:{
      type,
      page
    }
  })
}
