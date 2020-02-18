import { Reducer } from 'redux'
import { ForecastState, ForecastTypes } from './types'

const INITIAL_STATE: ForecastState = {
	data: [{
		id: 1, name: 'yagoernandes',
	}],
	error: false,
	loading: true,
}

const reducer: Reducer<ForecastState> = (state = INITIAL_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case ForecastTypes.LOAD_REQUEST:
			return { ...state, loading: true }
		case ForecastTypes.LOAD_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				data: payload,
			}
		case ForecastTypes.LOAD_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
				data: [],
			}
		default:
			return state
	}
}

export default reducer
