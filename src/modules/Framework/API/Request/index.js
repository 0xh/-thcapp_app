import axios from 'axios';
import qs from 'qs';
import axiosCookieJarSupport from '@3846masa/axios-cookiejar-support';
import tough from 'tough-cookie';

axiosCookieJarSupport(axios);

const cookieJar = new tough.CookieJar();

const extendOptions = (options) => {
  return {
    ...options,
    jar: cookieJar,
    withCredentials: true
  };
};

const jsToFormData = (data) => {
  return qs.stringify(data);
};

const getRequest = (url, options = {}) => {
  options = extendOptions(options);
  return axios.get(url, options);
};

const postRequest = (url, data = {}, options = {}) => {
  options = extendOptions(options);
  return axios.post(url, data, options);
};

const postFromDataRequest = (url, data = {}, options = {}) => {
  options = extendOptions(options);``

  data = jsToFormData(data);

  debugger;

  return axios.post(url, data, options);
};

const deleteRequest = (url, options = {}) => {
  options = extendOptions(options);
  return axios.delete(url, options);
};

const putRequest = (url, data = {}, options = {}) => {
  options = extendOptions(options);

  return axios.put(url, data, options);
};

export default {
  get: getRequest,
  post: postRequest,
  postFormData: postFromDataRequest,
  delete: deleteRequest,
  put: putRequest
};
