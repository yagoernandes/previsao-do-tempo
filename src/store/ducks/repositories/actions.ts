import { RepositoriesTypes, Repository } from './types'

export const loadRequest = () => ({ type: RepositoriesTypes.LOAD_REQUEST })

export const loadSuccess = (data: Repository[]) => ({ type: RepositoriesTypes.LOAD_SUCCESS, payload: data })

export const loadFailure = (error:any ) => ({ type: RepositoriesTypes.LOAD_FAILURE, payload: error })
