import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadingSelector } from '../../store/ducks/ui/selectors'
import { backToSearch } from '../../store/ducks/ui/actions'
import { SubTitle, Page, Title, Button, Spacer } from '../../styles'
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
						style={{
							width: '80%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							marginTop: '2em'
						}}
					>
						<div>
							<Title>Brasília</Title>
							<SubTitle>Temperatura: 35º</SubTitle>
							<SubTitle>Sensação térmica: 36º</SubTitle>
							<SubTitle>Umidade: 65%</SubTitle>
							<SubTitle>Vento: 5,1km/h (58º)</SubTitle>
						</div>
						<img
							src={require('../../assets/imgs/logo.png')}
							style={{ width: '5em', height: '5em' }}
							alt={'img-logo'}
						/>
					</div>
					<div
						id="resultados"
						style={{
							width: '80%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
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
					</div>
					<Spacer />
					<Button onClick={goBack}>Voltar</Button>
				</>
			)}
		</Page>
	)
}

export default History
