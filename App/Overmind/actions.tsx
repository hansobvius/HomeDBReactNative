import {Action} from 'overmind';


export const inject: Action<[]> = ({state}, injectData) => {
  state.movies = injectData
}