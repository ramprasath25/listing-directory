import { connect } from 'react-redux';
import { HomepageList } from './const';
import HomePage from './HomePage';
import { load_popular_success, load_popular_error } from './actions';


const mapDispatchToProps = (dispatch) => {
  return {
    load_popular_list: () => { dispatch(load_popular_success(HomepageList)) }
  }
}

const mapStateToProps = (state) => {
  return {
    homepage_popular_list: state.popularList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
