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
        popout:null
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
         console.log('action.payload-- ',action.payload);
      return {
        ...state,
        activePanel: action.payload.activePanel,
        indicators:{
          ...state.indicators,
          age:action.payload.age,
        }
      }
    default:
      return state;
  }
}