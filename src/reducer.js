export default (state, action) => {
  switch (action.type) {
    case "setActivePanel":
      return {
        ...state,
        activePanel: action.payload.activePanel,
      };
    case "setPopout":
      return {
        ...state,
        popout: action.payload.popout,
      }
     case "setUser":
      return {
        ...state,
        fetchedUser: action.payload.fetchedUser,
        popout:action.payload.popout
      }
     case "setSex":
      return {
        ...state,
        activePanel: action.payload.activePanel,
        indicators:{
          ...state.indicators,
          sex:action.payload.sex,
        }
      }
     case "setRelation":
      return {
        ...state,
        activePanel: action.payload.activePanel,
        indicators:{
          ...state.indicators,
          relation:action.payload.relation,
        }
      }
     case "setAge":
      return {
        ...state,
        activePanel: action.payload.activePanel,
        indicators:{
          ...state.indicators,
          age:action.payload.age,
        }
      }
     case "setTypes":
      return {
        ...state,
          types: action.payload.types,
          popout:action.payload.popout
      }
     case "setProducts":
      return {
        ...state,
          products: action.payload.products,
          popout:action.payload.popout
      }
    default:
        return {
            ...state,
            error: "Такого метода не существует!"
        }
  }
}