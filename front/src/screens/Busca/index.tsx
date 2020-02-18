import React from 'react'
import { useDispatch } from 'react-redux'

import { PesquisaInput } from './styles'

import { Title, Spacer, Button, Page, Link } from '../../styles'

import { searchRequest, goToHistory } from '../../store/ducks/ui/actions'

const Busca: React.FC = () => {
	const dispatch = useDispatch()
	const [input, setInput] = React.useState('')

	const submit = () => {
		dispatch(searchRequest(input))
	}

	const goToHistorico = () => {
		console.log(input)
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
				<PesquisaInput placeholder="Cidade" value={input} onChange={text => setInput(text.target.value)} />
				<Button onClick={submit}>Buscar</Button>
			</div>
			<Link onClick={goToHistorico}>Histórico</Link>
		</Page>
	)
}

export default Busca
