import { InterfaceTypes } from './types'

export const selectSearch = () => ({ type: InterfaceTypes.SELECT_SEARCH })

export const selectHistory = () => ({ type: InterfaceTypes.SELECT_HISTORY })

export const searchRequest = () => ({ type: InterfaceTypes.SEARCH_REQUEST })

export const backToSearch = () => ({ type: InterfaceTypes.BACK_SEARCH })

export const backToHistory = () => ({ type: InterfaceTypes.BACK_HISTORY })

export const selectDay = (dia:object) => ({ type: InterfaceTypes.SELECT_DAY, payload: dia })
