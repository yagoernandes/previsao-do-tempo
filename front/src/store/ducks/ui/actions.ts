import { InterfaceTypes } from './types'

export const selectSearch = () => ({ type: InterfaceTypes.SELECT_SEARCH })

export const selectHistory = () => ({ type: InterfaceTypes.SELECT_HISTORY })

export const searchRequest = (cityName:string) => ({ type: InterfaceTypes.SEARCH_REQUEST, payload: cityName })

export const searchSuccess = () => ({ type: InterfaceTypes.SEARCH_SUCCESS })

export const searchError = (error:any) => ({ type: InterfaceTypes.SEARCH_ERROR, payload: error })

export const backToSearch = () => ({ type: InterfaceTypes.BACK_SEARCH })

export const backToHistory = () => ({ type: InterfaceTypes.BACK_HISTORY })

export const selectDay = (dia: object) => ({
	type: InterfaceTypes.SELECT_DAY,
	payload: dia
})

export const goToHistory = () => ({ type: InterfaceTypes.GOTO_HISTORY })
