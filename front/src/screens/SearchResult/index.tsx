import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadingSelector } from '../../store/ducks/ui/selectors'
import { dataSelector } from '../../store/ducks/forecast/selectors'
import { Forecast } from '../../store/ducks/forecast/types'
import { backToSearch } from '../../store/ducks/ui/actions'
import { SubTitle, Page, Title, Button, Spacer } from '../../styles'
import Dia from './components/Dia'

const History: React.FC = () => {
	const dispatch = useDispatch()
	const [dias, setDias] = React.useState([])
	const results = useSelector(dataSelector)
	const loading = useSelector(loadingSelector)
	const [state, setState] = React.useState({
		temp:0,
		feels_like:0,
		humidity:0,
		speed:0,
		deg:0,
		name:'',
	})

	const goBack = () => {
		dispatch(backToSearch())
	}

	React.useEffect(() => {
		const arrayDias: any = {}
		results.forEach(previsao => {
			const data = previsao.dt_txt.substring(0, 10)
			if (!arrayDias.hasOwnProperty(data)) {
				arrayDias[data] = []
			}
			arrayDias[data].push(previsao)
		})
		setDias(arrayDias)
		const {
			temp,
			feels_like,
			humidity,
			speed,
			deg,
			name,
		}=results[0]
		setState({
			temp,
			feels_like,
			humidity,
			speed,
			deg,
			name,
		})
	}, [results])

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
							<Title>{state.name}</Title>
							<SubTitle>Temperatura: {state.temp}ºC</SubTitle>
							<SubTitle>Sensação térmica: {state.feels_like}ºC</SubTitle>
							<SubTitle>Umidade: {state.humidity}%</SubTitle>
							<SubTitle>Vento: {state.speed}m/s ({state.deg}º)</SubTitle>
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
							height: '100%',
							overflowY: 'auto',
							marginTop: '2em'
						}}
					>
						{Object.keys(dias).map((dia:any) => (
							<Dia key={dia[0].id} title={dia} dia={dias[dia]} />
						))}
					</div>
					<Spacer />
					<Button onClick={goBack}>Voltar</Button>
				</>
			)}
		</Page>
	)
}

export default History
