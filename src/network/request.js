import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })
  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    console.log(error)
  })

  return instance(config)
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

//
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       console.log(res)
//       config.success(res)
//     })
//     .catch(err => {
//       console.log(err)
//       config.failure(err)
//     })
// }

// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       console.log(res)
//       success(res)
//     })
//     .catch(err => {
//       console.log(err)
//       failure(err)
//     })
// }