/**
 * Action types
 */
export enum ForecastTypes {
  LOAD_REQUEST = '@forecast/LOAD_REQUEST',
  LOAD_SUCCESS = '@forecast/LOAD_SUCCESS',
  LOAD_FAILURE = '@forecast/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Forecast {
  id: number
  name: string
	country: string
	dt: number
	temp: number
	feels_like: number
	temp_max: number
	temp_min: number
	pressure: number
	sea_level: number
	grnd_level: number
	humidity: number
	temp_kf: number
	main: string
	description: string
	icon: string
	speed: number
	deg: number
	dt_txt: string
}


/**
 * State types
 */
export interface ForecastState {
  readonly data: Forecast[]
  readonly loading: boolean
  readonly error: boolean
}
