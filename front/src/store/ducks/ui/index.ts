import { Reducer } from 'redux'
import { InterfaceState, InterfaceTypes, Pages } from './types'
import { Forecast } from '../forecast/types'

const INITIAL_STATE: InterfaceState = {
	error: false,
	loading: false,
	day_selected: undefined,
	page: Pages.BUSCA
}

const reducer: Reducer<InterfaceState> = (state = INITIAL_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case InterfaceTypes.SELECT_HISTORY:
			return {
				...state,
				loading: false,
				error: false,
				page: Pages.HISTORICO
			}
		case InterfaceTypes.SELECT_SEARCH:
			return {
				...state,
				loading: false,
				error: false,
				page: Pages.BUSCA
			}
		case InterfaceTypes.SEARCH_REQUEST:
			return {
				...state,
				loading: true,
				error: false,
				page: Pages.RESULTADOS
			}
		case InterfaceTypes.SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				page: Pages.RESULTADOS
			}
		case InterfaceTypes.HISTORY_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				page: Pages.HISTORICO
			}
		case InterfaceTypes.SEARCH_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
				page: Pages.BUSCA
			}
		case InterfaceTypes.BACK_SEARCH:
			return {
				...state,
				page: Pages.BUSCA
			}
		case InterfaceTypes.BACK_HISTORY:
			return {
				...state,
				page: Pages.RESULTADOS
			}
		case InterfaceTypes.SELECT_DAY:
			return {
				...state,
				day_selected: payload,
				page: Pages.DIA
			}
		case InterfaceTypes.GOTO_HISTORY:
			return {
				...state,
				loading:true,
				page: Pages.HISTORICO
			}
		default:
			return state
	}
}

export default reducer
