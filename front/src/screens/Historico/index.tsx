import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadingSelector } from '../../store/ducks/ui/selectors'
import { backToSearch } from '../../store/ducks/ui/actions'
import { SubTitle, Page, Button, Spacer } from '../../styles'
import Dia from './components/Dia'

const History: React.FC = () => {
	const dispatch = useDispatch()

	const loading = useSelector(loadingSelector)

	const goBack = () => {
		dispatch(backToSearch())
	}

	return (
		<Page>
			{loading ? (
				<SubTitle>Carregando...</SubTitle>
			) : (
				<>
					<div
						id="resultados"
						style={{
							width: '80%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'start',
							height: '100%',
							overflowY: 'auto',
							marginTop: '2em'
						}}
					>
						<Dia />
						<Dia />
						<Dia />
						<Dia />
						<Dia />
						<Dia />
						<Dia />
						<Dia />
						<Dia />
						<Dia />
					</div>
					<Spacer />
					<Button onClick={goBack}>Voltar</Button>
				</>
			)}
		</Page>
	)
}

export default History
