import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Share from '../components/Share';
import * as ShareActions from '../actions/share';

function mapStateToProps(state) {
  return {
    photos: state.photo.photos,
    share: state.share,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ShareActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Share);
