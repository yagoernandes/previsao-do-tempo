import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ForecastState } from './ducks/forecast/types'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { InterfaceState } from './ducks/ui/types'

const sagaMiddleware = createSagaMiddleware()

export interface ApplicationState {
	forecast: ForecastState
	ui: InterfaceState
}

const store: Store<ApplicationState> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
