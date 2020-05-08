export const types = {
  FETCH_REQ: "FETCH_REQ",
  FETCH_SECCESS: "FETCH_SECCESS",
  FETCH_FAILED: "FETCH_FAILED",

  POST_REQ: "POST_REQ",
  POST_SUCCESS: "POST_SUCCESS",
  POST_FAILED: "POST_FAILED",

  DELETE_REQ: "DELETE_REQ",
  DELETE_SUCCESS: "DELETE_SUCCESS",
  DELETE_FAILED: "DELETE_FAILED",
};

export const initialState = {
  smurfs: [],
  isFetchLoading: false,
  isPostLoading: false,
  error: "",
};

export const smurfsReducer = (state, action) => {
  return action.type === types.FETCH_REQ
    ? { ...state, isFetchLoading: true, error: "", smurfs: [] }
    : action.type === types.FETCH_SECCESS
    ? {
        ...state,
        isFetchLoading: false,
        smurfs: [...state.smurfs, ...action.payload],
      }
    : action.type === types.FETCH_FAILED
    ? { ...state, isFetchLoading: false, error: action.payload }
    : action.type === types.POST_REQ
    ? { ...state, isPostLoading: true, error: "" }
    : action.type === types.POST_SUCCESS
    ? {
        ...state,
        isPostLoading: false,
        smurfs: [...state.smurfs, action.payload],
      }
    : action.type === types.POST_FAILED
    ? { ...state, isPostLoading: false, error: action.payload }
    : action.type === types.DELETE_REQ
    ? { ...state, isDeleteLoading: true, error: "" }
    : action.type === types.DELETE_SUCCESS
    ? {
        ...state,
        isDeleteLoading: false,
        smurfs: [state.smurfs.filter((smurf) => smurf.id !== action.payload)],
      }
    : state;
};
