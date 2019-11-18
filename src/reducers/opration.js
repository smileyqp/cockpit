export const namespace = 'operation';

export default function operation (state = {}, action) {
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
