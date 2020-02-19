import { ApplicationState } from '../../index'

export const currentPageSelector = (state: ApplicationState) => state.ui.page

export const loadingSelector = (state: ApplicationState) => state.ui.loading

export const errorSelector = (state: ApplicationState) => state.ui.error

export const daySelector = (state: ApplicationState) => state.ui.day_selected

export const isHistorySelector = (state: ApplicationState) => state.ui.isHistory
