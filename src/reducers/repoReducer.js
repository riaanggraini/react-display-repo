import { SEARCH_REPO } from '../constants/action-types'

export default function repoReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_REPO:
        return action.repos;
      default:
        return state;
    }
  }