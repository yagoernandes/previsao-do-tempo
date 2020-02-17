import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Page, Title, SubTitle } from './styles'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Page>
				<Title>Olá mundo!</Title>
				<SubTitle>GERADO COM O TEMPLATE DO YAGO</SubTitle>
			</Page>
		</Provider>
	)
}


export default App
