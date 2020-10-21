export const TOKEN = '38eeef9aa65a725363ccb5cde9df6342'

export const BASE_URL = 'https://api.themoviedb.org/3/movie/'

export const DEFAULT_LANGUAGE = 'en-US'

export const DEFAULT_PAGE = 1

export const POPULAR_ENDPOINT = 'popular'

export const serviceRequest = async (value: String) =>{
    try {
        const response = await fetch(`${BASE_URL}${value}?api_key=${TOKEN}&language=${DEFAULT_LANGUAGE}&page=${DEFAULT_PAGE}`)
        console.log(`serviceRequest: ${response.status}`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}