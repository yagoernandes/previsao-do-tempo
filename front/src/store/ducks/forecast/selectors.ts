import { ApplicationState } from '../../index'

export const dataSelector = (state: ApplicationState) => state.forecast.data
