import { v4 as uuidv4 } from "uuid";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "../actions/types";

const initialState = {
  items: [
  //   {
  //   id: uuidv4(),
  //   name: 'water',
  // }
],
  loading:false
};
export default function (state = initialState, action) {
  switch (action.type) {
    
    case GET_ITEMS:
      console.log('this is reduceer working',action.payload)
      return {state,  items:
        action.payload
    };
    case ADD_ITEMS:
      return { items: [action.payload,...state.items ], state };
    case DELETE_ITEMS:

      return {state,items:state.items.filter((i) => i._id !== action.payload)};
    default:
      return state;
  }
}
