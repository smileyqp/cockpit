export const namespace = 'mapmainvideo';

export default function mainvideo (state = {}, action) {
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
