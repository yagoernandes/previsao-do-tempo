import { call, put, takeLatest, all } from 'redux-saga/effects'
import { ForecastTypes } from './types'
import { InterfaceTypes } from '../ui/types'
import api from '../../../services/api'
import { AnyAction } from 'redux'
import { loadSuccess, loadFailure } from './actions'

export default function* watcherSaga() {
	return yield all([takeLatest(InterfaceTypes.SEARCH_REQUEST, load)])
}

export function* load(action: AnyAction) {
	try {
		console.log('aqui-----------')
		const response = yield call(api.get, `cidade/${action.payload}`)
		console.log('passou-----------')
		console.log(response)
		yield put(loadSuccess(response))
	} catch (error) {
		console.log('ERROR::', error.message)
		yield put(loadFailure(error.message))
	}
}
