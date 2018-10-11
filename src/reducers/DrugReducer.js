export default (state = {drugs:[]}, action) => {
    switch (action.type) {
     case 'ADD_DRUG':
      return {
          ...state,
       drugs: [...state.drugs,action.payload]
      }
     default:
      return state
    }
}