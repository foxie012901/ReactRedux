const defaultState = {
    inputValue: '',
    list: [1, 2, 35]
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        // console.warn(newState)
        return newState
    }

    return state
}