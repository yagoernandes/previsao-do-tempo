import { all } from 'redux-saga/effects'

import ForecastSagas from './forecast/sagas'

export default function* rootSaga() {
	return yield all([
		ForecastSagas(),
	])
}
