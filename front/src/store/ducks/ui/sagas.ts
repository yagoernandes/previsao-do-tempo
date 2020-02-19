import { put, takeLatest, all, select } from 'redux-saga/effects'
import { InterfaceTypes } from '../ui/types'
import { isHistorySelector } from '../ui/selectors'
import { backToHistory, backToResults } from '../ui/actions'


export default function* watcherSaga() {
	return yield all([
		takeLatest(InterfaceTypes.GOBACK, back)
	])
}

export function* back() {
	const isHistory = yield select(isHistorySelector)
	yield isHistory ? put(backToHistory()) : put(backToResults())
}
