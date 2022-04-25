import {
  CATEGORY_CREATE_REVIEW_FAIL,
  CATEGORY_CREATE_REVIEW_REQUEST,
  CATEGORY_CREATE_REVIEW_RESET,
  CATEGORY_CREATE_REVIEW_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../Constants/CategoryConstants";

//CATEGORY LIST
export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        categories: action.payload.categories,
      };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// SINGLE CATEGORY
export const categoryDetailsReducer = (
  state = { category: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CATEGORY REVIEW CREATE
export const categoryCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case CATEGORY_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
