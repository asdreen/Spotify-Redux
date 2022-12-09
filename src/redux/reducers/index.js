const initialState = {
  searchQuerry: {
    searchingSong: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_A_SONG":
      return {
        searchQuerry: {
          searchingSong: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
