import{ GET_BLOGS} from "../action/Blog";

import{ GET_BLOG} from "../action/Blog";

const initialState = {
  posts: [],
  single: {},
};

const blogReducer = (state = initialState, action) => {

    switch (action.type){

      case GET_BLOGS:

      return{

        ...state,

        posts: action.payload,

      };

      case GET_BLOG:

      return{

        ...state,

        single: action.payload,
        
      };

    default:

      return state;

  }
};

export default blogReducer;
