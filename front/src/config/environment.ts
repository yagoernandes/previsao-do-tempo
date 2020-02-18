export const {
	API_URL = 'http://localhost:5000/',
	PROCESS_ENV = 'development'
} = process.env

export const IS_PRODUCTION = PROCESS_ENV === 'production'
