import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'

import { loadingSelector } from '../../store/ducks/ui/selectors'
import { backToHistory } from '../../store/ducks/ui/actions'
import { SubTitle, Page, Title, Button } from '../../styles'


const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Temperatura',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'round',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 10,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
}


const Day: React.FC = () => {
	const dispatch = useDispatch()

	const loading = useSelector(loadingSelector)

	const goBack = () => {
		dispatch(backToHistory())
	}

	return (
		<Page>
			{loading ? (
				<SubTitle>Carregando...</SubTitle>
			) : (
				<div>
					<div
						style={{
							width: '80%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: '2em'
						}}
					>
						<div>
							<Title>Brasília 18/02/2020</Title>
							<SubTitle>Máxima: 35º</SubTitle>
							<SubTitle>Mínima: 11º</SubTitle>
							<SubTitle>Sensação térmica: 36º</SubTitle>
							<SubTitle>Umidade: 65%</SubTitle>
							<SubTitle>Vento: 5,1km/h (58º)</SubTitle>
						</div>
						<img
							src={require('../../assets/imgs/logo.png')}
							style={{ width: '5em', height: '5em' }}
						/>
					</div>
					<Line
						width={30}
						height={15}
						options={{
							maintainAspectRatio: true
						}}
						data={data}
					/>
					<Button onClick={goBack}>Voltar</Button>
				</div>
			)}
		</Page>
	)
}

export default Day
