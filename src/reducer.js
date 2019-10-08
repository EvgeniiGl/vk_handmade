export default (state, action) => {
  switch (action.type) {
    case "setActivePanel":
      return {
        ...state,
        activePanel: action.payload.activePanel,
          indicators:{
              ...state.indicators,
              ...action.payload.data
          }
      };
    case "setPopout":
      return {
        ...state,
        popout: action.payload.popout,
          error: action.payload.error
      }
     case "setUser":
      return {
        ...state,
        fetchedUser: action.payload.fetchedUser,
        popout:action.payload.popout
      }
      case "setIndicators":
          return {
              ...state,
              activePanel: action.payload.activePanel,
              indicators:{
                  ...state.indicators,
                  ...action.payload.data
              }
          }
     case "setTypes":
      return {
        ...state,
          types: action.payload.types,
          popout:action.payload.popout
      }
     case "getAllProducts":
      return {
        ...state,
          products: action.payload.products,
          popout:action.payload.popout
      }
      case "getFilteredProducts":
          // console.log('getFilteredProducts-- ',);
          return {
              ...state,
              filteredProducts: action.payload.filteredProducts,
              popout:action.payload.popout
          }
    default:
        return {
            ...state,
            error: "Такого метода не существует!"
        }
  }
}