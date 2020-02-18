import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import {
	Page,
	Title,
	Spacer,
	PesquisaInput,
	Button,
	Forecast,
	Results
} from './styles'
import api from './services/api'

const App: React.FC = () => {
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

	return (
		<Provider store={store}>
			<Page>
				<Title>IAL Previsão do tempo</Title>
				{/* <SubTitle>Digite a cidade</SubTitle> */}
				<Spacer height={'2em'} />
				<div>
					<PesquisaInput />
					<Button>Buscar</Button>
				</div>
				<Spacer height={'2em'} />
				<Results>
					<Forecast>Teste</Forecast>
					<Forecast>Teste</Forecast>
					<Forecast>Teste</Forecast>
				</Results>
			</Page>
		</Provider>
	)
}

export default App
