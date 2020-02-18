import { Reducer } from 'redux'
import { InterfaceState, InterfaceTypes, Pages } from './types'

const INITIAL_STATE: InterfaceState = {
	error: false,
	loading: false,
	page: Pages.BUSCA
}

const reducer: Reducer<InterfaceState> = (state = INITIAL_STATE, action) => {
	const { type } = action
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
				page: Pages.HISTORICO
			}
		case InterfaceTypes.BACK_SEARCH:
			return {
				...state,
				page: Pages.BUSCA
			}
		case InterfaceTypes.BACK_HISTORY:
			return {
				...state,
				page: Pages.HISTORICO
			}
		case InterfaceTypes.SELECT_DAY:
			return {
				...state,
				page: Pages.DIA
			}
		case InterfaceTypes.GOTO_HISTORY:
			return {
				...state,
				page: Pages.HISTORICO
			}
		default:
			return state
	}
}

export default reducer
