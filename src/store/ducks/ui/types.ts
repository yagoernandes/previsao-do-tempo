/**
 * Action types
 */
export enum InterfaceTypes {
  SELECT_SEARCH = '@interface/SELECT_SEARCH',
	SELECT_HISTORY = '@interface/SELECT_HISTORY',
	SEARCH_REQUEST = '@interface/SEARCH_REQUEST',
	SEARCH_SUCCESS = '@interface/SEARCH_SUCCESS',
	SEARCH_ERROR = '@interface/SEARCH_ERROR',
	BACK_SEARCH = '@interface/BACK_SEARCH',
	BACK_HISTORY = '@interface/BACK_HISTORY',
	SELECT_DAY = '@interface/SELECT_DAY',
}

export enum Pages {
	BUSCA = '@page/SEARCH',
	HISTORICO = '@page/HISTORY',
	DIA = '@page/DAY',
}

/**
 * State types
 */
export interface InterfaceState {
  readonly loading: boolean
	readonly error: boolean
	readonly page: Pages
}
