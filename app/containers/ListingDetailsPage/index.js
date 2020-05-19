import { connect } from 'react-redux';
// export { default } from './ListingDetailsPage';
import { load_details, load_details_success, load_details_error, claim_business } from './actions';
import ListingDetailsPage from './ListingDetailsPage';
import { listDetailsData } from './const';

const mapDispatchToProps = (dispatch) => {
    return {
        loadListDetails: (querystring) => dispatch(load_details_success(querystring)),
        claimBusiness: (data) => dispatch(claim_business(data))
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.listDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingDetailsPage)