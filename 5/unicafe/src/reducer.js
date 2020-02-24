const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    
    case 'GOOD':
      const goodToChange = state.good + 1
      const changedGood = {
        ...state, good: goodToChange
      }
      state = changedGood
      return state

    case 'OK':
      const okToChange = state.ok + 1
      const changedOk = {
        ...state, ok: okToChange
      }
      state = changedOk
      return state

    case 'BAD':
      const badToChange = state.bad + 1
      const changedBad = {
        ...state, bad: badToChange
      }
      state = changedBad
      return state

    case 'ZERO':
      return {
        good: 0,
        ok: 0,
        bad: 0
      }
    default: return state
  }

}

export default counterReducer