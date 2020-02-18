import React from 'react'
import { useDispatch } from 'react-redux'

import { PesquisaInput } from './styles'

import { Title, Spacer, Button, Page } from '../../styles'

import { searchRequest } from '../../store/ducks/ui/actions'

const Busca: React.FC = () => {
	const dispatch = useDispatch()

	const submit = () => {
		dispatch(searchRequest())
	}

	return (
		<Page>
			<img
				src={require('../../assets/imgs/logo.png')}
				style={{ width: '10em', height: '10em', marginBottom:'2em' }}
			/>
			<Title>IAL Previsão do tempo</Title>
			{/* <SubTitle>Digite a cidade</SubTitle> */}
			<Spacer height={'2em'} />
			<div>
				<PesquisaInput placeholder='Cidade' />
				<Button onClick={submit}>Buscar</Button>
			</div>
		</Page>
	)
}

export default Busca
