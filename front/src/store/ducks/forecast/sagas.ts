import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ForecastTypes } from './types'
import { InterfaceTypes } from '../ui/types'
import api from '../../../services/api'
import { AnyAction } from 'redux'
import { loadSuccess, loadFailure } from './actions'
import { searchSuccess, searchError } from '../ui/actions'

export default function* watcherSaga() {
	return yield all([takeLatest(InterfaceTypes.SEARCH_REQUEST, load)])
}

export function* load(action: AnyAction) {
	try {
		const response = yield call(api.get, `cidade/${action.payload}`)
		console.log(response)
		if (response?.data?.status == 404) {
			yield put(loadFailure('Cidade não encontrada'))
			yield put(searchError('Cidade não encontrada'))
		} else {
			yield put(loadSuccess(response.data))
			yield put(searchSuccess())
		}
	} catch (error) {
		yield put(loadFailure(error.message))
		yield put(searchError(error.message))
	}
}
