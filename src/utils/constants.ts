export const {
	PROCESS_ENV = 'development'
} = process.env

export const IS_PRODUCTION = PROCESS_ENV === 'production'