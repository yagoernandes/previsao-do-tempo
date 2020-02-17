import { all } from 'redux-saga/effects'

import RepositoriesSagas from './repositories/sagas'

export default function* rootSaga() {
	return yield all([
		RepositoriesSagas(),
	])
}
