import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials:{
            username:'',
            password:''
        }
    }

    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault()
        axios.post(`http://localhost:9000/api/login`, this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/friends')
        })
        .catch(err => {
            console.log(err)
            this.props.history.push('/login')
        })
    }
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.login}>                
                    <h1>LOGIN</h1>
                    <input 
                    type="text"
                    name="username"
                    value={this.state.credentials.username}                        
                    onChange={this.handleChange}
                    />
                    <input 
                    type="password"
                    name="password" 
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>SUBMIT</button>
                </form>    
            </div>
        )    
    }
}
export default Login;