import axios from 'axios'

//网络请求
export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  return instance(config)
}
/*
//拦截器
instance.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err);
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err);
})*/

/*
request({
  url: ''
}).then( res => {
  console.log(res);
}).catch(
  console.log(err)
)
*/
