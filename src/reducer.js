
export default function(state , action) {
  switch (action.type) {
    case 'setActivePanel':
      const obj = Object.assign(state,
          {
            activePanel: action.payload,
          })
        console.log('setActivePanel-- ',obj);
      return obj
    case 'setPopout':
      return Object.assign(state,
        {
          popout: action.payload,
        })
    case 'setUser':
      return  Object.assign(state,
        {
          fetchedUser: action.payload,
          popout:null
        })
    default:
      return state
  }
}