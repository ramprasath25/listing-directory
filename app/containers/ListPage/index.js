import { connect } from 'react-redux';
import { locations, pageResult, tags, features } from './const';
import { withRouter } from 'react-router';
import ListPage from './ListPage';
import { load_lists, load_lists_success, load_lists_error, load_location, load_tags, load_features } from './actions';

const mapDispatchToProps = (dispatch) => {
    return {
        loadList: (querystring) => dispatch(load_lists_success(pageResult, querystring)),
        loadlocation: (querystring) => dispatch(load_location(locations, querystring)),
        loadtags: (querystring) => dispatch(load_tags(tags, querystring)),
        loadfeatures: (querystring) => dispatch(load_features(features, querystring))
    }
}

const mapStateToProps = (state) => {

    return {
        data: state.list,
        locality: state.list.listlocation,
        tags: state.list.listTags,
        features: state.list.listFeatures
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPage));