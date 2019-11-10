const initialState = {
    viewProduct: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  const product = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCT_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'GET_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_PRODUCT_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          viewProduct: action.payload.data.data.data,
        };

      // POST PRODUCT
      case 'POST_PRODUCT_PENDING':
          return {
              ...state,
              isLoading: true,
              isRejected: false,
              isFulfilled: false,
          };
      case 'POST_PRODUCT_REJECTED':
          return {
              ...state,
              isLoading: false,
              isRejected: true,
          };
      case 'POST_PRODUCT_FULFILLED':
        if (action.payload.data.status == 200) {
          const addProduct=state.viewProduct.slice(0)
          addProduct.push(action.payload.data.data[0])
            return {
              ...state,
              isLoading: false,
              isFulfilled: true,
              viewProduct: addProduct
            }
          } else {
            return {
              ...state,
              isLoading: false,
              isFulfilled: true,
            }
          }

        // EDIT PRODUCT
        case 'PUT_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'PUT_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'PUT_PRODUCT_FULFILLED':
          const listProductAfterPatch = state.viewProduct.map (product => {
            if (action.payload.data.status == 200) {
              if (product.id == action.payload.data.data[0].id) {
                return action.payload.data.data[0];
              }
            }
            return product;
          });
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            viewProduct: listProductAfterPatch
          };

      // DELETE CATEGORIES
      case 'DELETE_PRODUCT_PENDING':
          return {
              ...state,
              isLoading: true,
              isRejected: false,
              isFulfilled: false,
          };
      case 'DELETE_PRODUCT_REJECTED':
          return {
              ...state,
              isLoading: false,
              isRejected: true,
          };
      case 'DELETE_PRODUCT_FULFILLED':
          const dataAfterDelete = state.viewProduct.filter((value) => {
              return value.id !== parseInt(action.payload.data.id) });
          return {
              ...state,
              isLoading: false,
              isFulfilled: true,
              viewProduct: dataAfterDelete,
          };
    default:
    return state;
  }
};

export default product;
