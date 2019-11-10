const initialState = {
    viewCategory: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  const category = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CATEGORY_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'GET_CATEGORY_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_CATEGORY_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          viewCategory: action.payload.data.data.data,
        };

    // POST CATEGORIES
    case 'POST_CATEGORY_PENDING':
        return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false,
        };
    case 'POST_CATEGORY_REJECTED':
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        };
    case 'POST_CATEGORY_FULFILLED':
      if (action.payload.data.status == 200) {
        const addCategory=state.viewCategory.slice(0)
        addCategory.push(action.payload.data.data[0])
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            viewCategory: addCategory
          }
        } else {
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
          }
        }

    // EDIT CATEGORIES
    case 'PUT_CATEGORY_PENDING':
        return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false,
        };
    case 'PUT_CATEGORY_REJECTED':
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        };
    case 'PUT_CATEGORY_FULFILLED':
      const listCategoryAfterPatch = state.viewCategory.map (category => {
        if (action.payload.data.status == 200) {
          if (category.id == action.payload.data.data[0].id) {
            return action.payload.data.data[0];
          }
        }
        return category;
      });
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        viewCategory: listCategoryAfterPatch
      };

    // DELETE CATEGORIES
    case 'DELETE_CATEGORY_PENDING':
        return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false,
        };
    case 'DELETE_CATEGORY_REJECTED':
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        };
    case 'DELETE_CATEGORY_FULFILLED':
        const dataAfterDelete = state.viewCategory.filter((value) => {
            return value.id !== parseInt(action.payload.data.id) });
        return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            viewCategory: dataAfterDelete,
        };
    default:
    return state;
  }
};

export default category;
