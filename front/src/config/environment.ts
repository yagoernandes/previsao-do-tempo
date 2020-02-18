export const {
	API_URL = 'http://api.openweathermap.org/data/2.5/weather',
	API_KEY = '230394d0d4e46b5c16ebe825e188e2b0',
	PROCESS_ENV = 'development'
} = process.env

export const IS_PRODUCTION = PROCESS_ENV === 'production'
