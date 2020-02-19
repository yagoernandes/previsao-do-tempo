import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadingSelector } from '../../store/ducks/ui/selectors'
import { dataSelector } from '../../store/ducks/forecast/selectors'
import { backToSearch } from '../../store/ducks/ui/actions'
import { SubTitle, Page, Button, Spacer } from '../../styles'
import Dia from '../SearchResult/components/Dia'
import { Forecast } from '../../store/ducks/forecast/types'

interface DiasProps {
	[key: string]: Forecast[]
}

const History: React.FC = () => {
	const dispatch = useDispatch()
	const loading = useSelector(loadingSelector)
	const previsoes = useSelector(dataSelector)
	const [dias, setDias] = React.useState<DiasProps>({})

	const goBack = () => {
		dispatch(backToSearch())
	}

	React.useEffect(() => {
		const arrayDias: any = {}
		previsoes.forEach(previsao => {
			const data = previsao.dt_txt.substring(0, 10) + previsao.name
			if (!arrayDias.hasOwnProperty(data)) {
				arrayDias[data] = []
			}
			arrayDias[data].push(previsao)
		})
		setDias(arrayDias)
	}, [previsoes])

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
						{Object.keys(dias).map((dia: string) => (
							<Dia
								title={dia}
								subtitle={dias[dia][0].name}
								dia={dias[dia]}
								date={dias[dia][0].data_historico}
							/>
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
