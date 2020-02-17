import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { RepositoriesState } from './ducks/repositories/types'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const sagaMiddleware = createSagaMiddleware()

export interface ApplicationState {
	repositories: RepositoriesState;
}

const store: Store<ApplicationState> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)


sagaMiddleware.run(rootSaga)

export default store
