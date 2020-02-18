import React from 'react'
import {
	// useDispatch,
	useSelector
} from 'react-redux'

import api from './services/api'
import Busca from './screens/Busca/index'
import Historico from './screens/Historico/index'
import Day from './screens/Day/index'
import SearchResult from './screens/SearchResult/index'
import {
	currentPageSelector,
	loadingSelector
} from './store/ducks/ui/selectors'

import { Pages } from './store/ducks/ui/types'

import { Page, SubTitle } from './styles'

const App: React.FC = () => {
	// const dispatch = useDispatch()
	const page = useSelector(currentPageSelector)

	const loading = useSelector(loadingSelector)

	React.useEffect(() => {
		api
			.get('', { params: { q: 'London,uk' } })
			.then(result => {
				console.log(result)
				console.log(result.data)
			})
			.catch(error => {
				console.log(error.message)
				console.log(error)
			})
	}, [])

	if (loading)
		return (
			<Page>
				<SubTitle>Carregando...</SubTitle>
			</Page>
		)

	switch (page) {
		case Pages.BUSCA:
			return <Busca />
		case Pages.HISTORICO:
			return <Historico />
		case Pages.DIA:
			return <Day />
		case Pages.RESULTADOS:
			return <SearchResult />
	}
}

export default App
