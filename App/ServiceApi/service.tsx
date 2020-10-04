export const TOKEN = '38eeef9aa65a725363ccb5cde9df6342'

export const BASE_URL = 'https://api.themoviedb.org/3/movie/'

export const DEFAULT_LANGUAGE = 'en-US'

export const DEFAULT_PAGE = 1

export const POPULAR_ENDPOINT = 'popular'

export const serviceRequest = () =>{
    return fetch(`${BASE_URL}${POPULAR_ENDPOINT}?api_key=${TOKEN}&language=${DEFAULT_LANGUAGE}&page=${DEFAULT_PAGE}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(`serviceRequest: ${json.results}`)
            return json
        })
        .catch((error) => {
            console.log(error)
        })
}