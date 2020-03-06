import axios from 'axios';
import { SEARCH_REPO } from '../constants/action-types'

export const searchRepo = repo => {
    return (dispatch) => {
        const url = `https://api.github.com/users/${repo}/repos`
        return axios.get(url)
          .then(response => {
            dispatch(getRepo(response.data))
          })
          .catch(error => {
            throw(error);
          });
      };
  };

  export const getRepo = (repos) => {
    return {
      type: SEARCH_REPO,
      repos
    }
  };
