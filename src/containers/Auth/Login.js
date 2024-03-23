import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { divide } from 'lodash';
import { Label } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }


    //  JSX

    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login </div>
                        <div className='col-12 form-group login-input' >
                            <Label>Usesrname:</Label>
                            <input type='text' className='form-control' placeholder='Enter your username'></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <Label>Passwork:</Label>
                            <input type='text' className='form-control' placeholder='Enter your passwork'></input>
                        </div>
                        <div className='col-12 '>
                            <button className='btn-login'>Login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forget-passwork'>Forgot your passwork?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or Login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i class="fab fa-google-plus-g google"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
