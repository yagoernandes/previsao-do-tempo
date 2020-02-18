import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ForecastTypes } from './types'
import api from '../../../services/api'
import { loadSuccess, loadFailure } from './actions'

export default function* watcherSaga() {
	return yield all([
		takeLatest(ForecastTypes.LOAD_REQUEST, load),
	])
}

export function* load() {
	try {
		const response = yield call(api.get, '/users/yagoernandes/repos')

		yield put(loadSuccess(response.data))
	} catch (error) {
		yield put(loadFailure(error))
	}
}
