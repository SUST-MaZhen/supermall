import axios from 'axios';

export function request(config) {
  // axios 实例
  const instance = axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
  })

  // 拦截器
  instance.interceptors.request.use(config=>{
    return config;
  }, err=>{
    console.log(err);
  })

  instance.interceptors.response.use(res=>{
    return res.data;
  }, err=>{
    console.log(err);
  })

  // 发出请求，返回promise对象
  return instance(config);
}

