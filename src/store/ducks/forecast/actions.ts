import { ForecastTypes, Forecast } from './types'

export const loadRequest = () => ({ type: ForecastTypes.LOAD_REQUEST })

export const loadSuccess = (data: Forecast[]) => ({ type: ForecastTypes.LOAD_SUCCESS, payload: data })

export const loadFailure = (error:any ) => ({ type: ForecastTypes.LOAD_FAILURE, payload: error })
