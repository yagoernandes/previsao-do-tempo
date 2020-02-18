// import { call, put, takeLatest, all } from 'redux-saga/effects'
// import { InterfaceTypes } from './types'
// import api from '../../../services/api'
// import { loadSuccess, loadFailure } from './actions'

// export default function* watcherSaga() {
// 	return yield all([
// 		takeLatest(InterfaceTypes.SELECT_SEARCH, load),
// 	])
// }

// export function* load() {
// 	try {
// 		const response = yield call(api.get, '/users/yagoernandes/repos')

// 		yield put(loadSuccess(response.data))
// 	} catch (error) {
// 		yield put(loadFailure(error))
// 	}
// }

export default {
	teste: 'Só pra não dar erro'
}
