import React from 'react'
import { useDispatch } from 'react-redux'

import { PesquisaInput } from './styles'

import { Title, Spacer, Button, Page, Link } from '../../styles'

import { searchRequest, goToHistory } from '../../store/ducks/ui/actions'

const Busca: React.FC = () => {
	const dispatch = useDispatch()

	const submit = () => {
		dispatch(searchRequest())
	}

	const goToHistorico = () => {
		console.log('navegar para historico')
		dispatch(goToHistory())
	}

	return (
		<Page>
			<img
				src={require('../../assets/imgs/logo.png')}
				style={{ width: '10em', height: '10em', marginBottom: '2em' }}
				alt={'img-logo'}
			/>
			<Title>IAL Previsão do tempo</Title>
			{/* <SubTitle>Digite a cidade</SubTitle> */}
			<Spacer height={'2em'} />
			<div>
				<PesquisaInput placeholder="Cidade" />
				<Button onClick={submit}>Buscar</Button>
			</div>
			<Link onClick={goToHistorico}>Histórico</Link>
		</Page>
	)
}

export default Busca
