import { InterfaceTypes } from './types'
import { Forecast } from '../forecast/types'

export const selectSearch = () => ({ type: InterfaceTypes.SELECT_SEARCH })

export const selectHistory = () => ({ type: InterfaceTypes.SELECT_HISTORY })

export const searchRequest = (cityName: string) => ({
	type: InterfaceTypes.SEARCH_REQUEST,
	payload: cityName
})

export const searchSuccess = () => ({ type: InterfaceTypes.SEARCH_SUCCESS })

export const searchError = (error: any) => ({
	type: InterfaceTypes.SEARCH_ERROR,
	payload: error
})

export const backToSearch = () => ({ type: InterfaceTypes.BACK_SEARCH })

export const backToHistory = () => ({ type: InterfaceTypes.BACK_HISTORY })

export const selectDay = (dia: Forecast[] | undefined) => ({
	type: InterfaceTypes.SELECT_DAY,
	payload: dia
})

export const goToHistory = () => ({ type: InterfaceTypes.GOTO_HISTORY })

export const historyLoaded = () => ({ type: InterfaceTypes.HISTORY_SUCCESS })

export const historyError = () => ({ type: InterfaceTypes.HISTORY_ERROR })

