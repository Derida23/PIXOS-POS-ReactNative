import axios from 'axios';

export const getCategory = (token) => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get('https://pixos-api.herokuapp.com/category/',{
      headers: {
        "x-access-token":token
      },
    })
  };
};

export const postCategory = (input, token) => {
  return {
    type: 'POST_CATEGORY',
    payload: axios.post('https://pixos-api.herokuapp.com/category/',input,{
      headers: {
        "x-access-token":token
      },
    })
  };
};

export const putCategory = (input, token) => {
  const id = input.id;
  return {
      type: 'PUT_CATEGORY',
      payload: axios.put('https://pixos-api.herokuapp.com/category/'+id,input,{
        headers: {
          "x-access-token":token
        },
      }
    )
  };
};

export const deleteCategory = (input, token) => {
  const id = input.id;
  return {
      type: 'DELETE_CATEGORY',
      payload: axios.delete('https://pixos-api.herokuapp.com/category/'+id,{
        headers: {
          "x-access-token":token
        }
      }
    )
  };
};
