import { toast as toastFunc } from 'react-toastify';

const toast = {
  success: (text = 'Saving successfully') => {
    toastFunc.success(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      colored: true,
      theme: 'colored',
    });
  },
  error: (text = 'An error occurred. Please try again later!') => {
    toastFunc.error(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  },
};

export default toast;
