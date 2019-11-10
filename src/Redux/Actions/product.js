import axios from 'axios';

export const getProduct = (content, page, token) => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get('https://pixos-api.herokuapp.com/product/',{
        params:{
          content,
          page
        },
        headers: {
          "x-access-token":token
        },
      })
  };
};

export const postProduct = (input, token) => {
  return {
    type: 'POST_PRODUCT',
    payload: axios.post('https://pixos-api.herokuapp.com/product/',input,{
      headers: {
        "x-access-token":token
      },
    })
  };
};

export const putProduct = (input, token) => {
  const id = input.id;
  return {
      type: 'PUT_PRODUCT',
      payload: axios.put('https://pixos-api.herokuapp.com/product/'+id,input,{
        headers: {
          "x-access-token":token
        },
      }
    )
  };
};

export const deleteProduct = (input, token) => {
  const id = input.id;
  return {
      type: 'DELETE_PRODUCT',
      payload: axios.delete('https://pixos-api.herokuapp.com/product/'+id,{
        headers: {
          "x-access-token":token
        }
      }
    )
  };
};
