import { connect } from 'react-redux';
import { logout } from '../../../modules/auth';
import HeaderContainer from './header';


const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

const mapStateToProps = (state) => ({
    loggedIn: state.auth.authToken
})


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
