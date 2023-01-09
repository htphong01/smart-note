import axiosClient from './axiosClient';

const noteApi = {
  getNotesByPageId: (pageId) => {
    const url = `/notes/page/${pageId}`;
    return axiosClient.get(url);
  },
  getNoteBySlug: (slug) => {
    const url = `/notes/${slug}`;
    return axiosClient.get(url);
  }
}

export default noteApi;