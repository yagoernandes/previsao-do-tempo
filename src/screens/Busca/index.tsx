import React from 'react'
import { useDispatch } from 'react-redux'

import { PesquisaInput, Forecast, Results } from './styles'

import { Title, Spacer, Button, Page } from '../../styles'

import { searchRequest } from '../../store/ducks/ui/actions'

const Busca: React.FC = () => {
	const dispatch = useDispatch()

	const submit = () => {
		dispatch(searchRequest())
	}

	return (
		<Page>
			<Title>IAL Previsão do tempo</Title>
			{/* <SubTitle>Digite a cidade</SubTitle> */}
			<Spacer height={'2em'} />
			<div>
				<PesquisaInput />
				<Button onClick={submit}>Buscar</Button>
			</div>
			<Spacer height={'2em'} />
			<Results>
				<Forecast>Teste</Forecast>
				<Forecast>Teste</Forecast>
				<Forecast>Teste</Forecast>
			</Results>
		</Page>
	)
}

export default Busca
