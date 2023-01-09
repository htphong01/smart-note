import axiosClient from './axiosClient';

const pageApi = {
  getPageByUser: (userId) => {
    const url = `/pages/user/${userId}`;
    return axiosClient.get(url);
  }
}

export default pageApi;