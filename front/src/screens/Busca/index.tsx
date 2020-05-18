import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PesquisaInput } from './styles'

import { Title, Spacer, Button, Page, Link, Error } from '../../styles'

import { searchRequest, goToHistory } from '../../store/ducks/ui/actions'
import { errorSelector } from '../../store/ducks/ui/selectors'

const Busca: React.FC = () => {
	const dispatch = useDispatch()
	const [input, setInput] = React.useState('')
	const error = useSelector(errorSelector)

	const submit = () => {
		dispatch(searchRequest(input))
	}

	const goToHistorico = () => {
		dispatch(goToHistory())
	}

	return (
		<Page>
			<img
				src={require('../../assets/imgs/logo.png')}
				style={{ width: '10em', height: '10em', marginBottom: '2em' }}
				alt={'img-logo'}
			/>
			<Title>Previsão do tempo</Title>
			<Spacer height={'2em'} />
			<div>
				<PesquisaInput placeholder="Cidade" value={input} onChange={text => setInput(text.target.value)} />
				<Button onClick={submit}>Buscar</Button>
			</div>
			<Link onClick={goToHistorico}>Histórico</Link>
			{
				error && <Error>{error}</Error>
			}
		</Page>
	)
}

export default Busca
