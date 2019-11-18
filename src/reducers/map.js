export const namespace = 'map';

export default function map (state = {}, action) {
  switch (action.type) {
  

    case `${namespace}/carstate`:
      return {
        ...state,
        pending:false,
        states:action.payload
    }


    
    default:
      return state;
  }
}
