import axios from "axios"

export const axiosInstance=axios.create({
    baseURL:'https://www.googleapis.com/books/v1'

})
export const axiosInstance2=axios.create({
    baseURL:'https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1'

})
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers["Authorization"]='123457'
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


