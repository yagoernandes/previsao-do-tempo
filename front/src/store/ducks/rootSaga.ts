import { all } from 'redux-saga/effects'

import ForecastSagas from './forecast/sagas'
import UiSagas from './ui/sagas'

export default function* rootSaga() {
	return yield all([
		ForecastSagas(),
		UiSagas(),
	])
}
