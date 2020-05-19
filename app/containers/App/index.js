import App from './App';
import { connect } from 'react-redux';
import { loadIntialData } from './actions';
import { withRouter } from 'react-router';


const mapDispatchToProps = (dispatch) => {
    return {
        loadIntial: () => dispatch(loadIntialData("Bangalore"))
    }
}

const mapStateToProps = (state) => {
    return {
        initData: state.intialList
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
