import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Agreement from '../components/Agreement';
import * as AgreementActions from '../actions/agreement';

function mapStateToProps(state) {
  return {
    agreement: state.agreement
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AgreementActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Agreement);
