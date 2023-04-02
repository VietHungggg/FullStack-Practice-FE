import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState ({
            password: event.target.value
        })
    }

    handleLogin = () => {
        console.log("User name : " + this.state.username)
        console.log("Password :  " + this.state.password)
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-background'> 
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>
                        <div className='cal-12 form-group login-input'>
                            <label>Username : </label>
                            <input type='text' className='form-control' 
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUserName(event)}
                            />
                        </div>
                        <div className='cal-12 form-group login-input'>
                            <label>Password : </label>
                            <div className='custom-input-password'>
                                <input 
                                    className='form-control'
                                    type= {this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => {this.handleShowHidePassword()}}>
                                    <i class = {this.state.isShowPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12 btn-login-flex'>
                            <button className='btn-login' onClick={() => {this.handleLogin()}}>Login</button>
                        </div>
                        <div className='col-12 forgot-password'>
                            <span>Forgot your password ?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or Login With</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
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
