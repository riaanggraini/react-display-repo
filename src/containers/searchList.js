import { connect } from 'react-redux';
import { searchRepo } from '../actions';
import inputSearch from '../components/searchbar';

const mapDispatchToProps = dispatch => {
  return {
    searchRepos: repos => {
      dispatch(searchRepo(repos));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(inputSearch);