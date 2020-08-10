import React, {useReducer} from 'react'
import {DateRangeInput} from '@datepicker-react/styled'

const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return {...state, focusedInput: action.payload}
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}

function DateRangePicker() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <DateRangeInput
            onDatesChange={data => dispatch({type: 'dateChange', payload: data})}
            onFocusChange={focusedInput => dispatch({type: 'focusChange', payload: focusedInput})}
            startDate={state.startDate} // Date or null
            endDate={state.endDate} // Date or null
            focusedInput={state.focusedInput} // START_DATE, END_DATE or null
        />
    )
}

export default DateRangePicker;