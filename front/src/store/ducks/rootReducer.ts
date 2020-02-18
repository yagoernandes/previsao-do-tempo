import { combineReducers } from 'redux'

import forecast from './forecast'
import ui from './ui'

export default combineReducers({
	forecast,
	ui,
})
