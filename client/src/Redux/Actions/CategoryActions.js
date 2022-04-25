import axios from "axios";
import {
  CATEGORY_CREATE_REVIEW_FAIL,
  CATEGORY_CREATE_REVIEW_REQUEST,
  CATEGORY_CREATE_REVIEW_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../Constants/CategoryConstants";
import { logout } from "./userActions";

// CATEGORY LIST
export const listCategories =
  (keyword = " ", pageNumber = " ") =>
  async (dispatch) => {
    try {
      dispatch({ type: CATEGORY_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/categories?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CATEGORY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// SINGLE CATEGORY
export const listCategoriesDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// CATEGORY REVIEW CREATE
export const createCategoriesReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: CATEGORY_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/products/${productId}/review`, review, config);
      dispatch({ type: CATEGORY_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: CATEGORY_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };
