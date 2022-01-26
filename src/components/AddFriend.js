import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component{
    state = {
        friends: {
            name:'',
            email:'',
            age:0
        }
    }
    handleChange = e => {
        this.setState({
            friends:{
                ...this.state.friends,
                [e.target.name]:e.target.value
            }
        })        
    }
    handleSubmit = e => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        axios.post(`http://localhost:9000/api/friends`, this.state.friends, {
            headers: {
                authorization: token
            }
        })
        .then(res => {            
            this.props.history.push('/friends')
        })
        .catch(err => {
            this.props.history.push('/friends/add')
        })
    }
    render() {
        return(
            <div className="friend-list">
                <h1>ADD FRIEND</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Friend name</label>
                    <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <label>Email</label>
                    <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <label>Friend age</label>
                    <input
                    name="age"
                    type="number"
                    value={this.state.age}
                    onChange={this.handleChange}
                    />
                    <button>SUBMIT</button>                
                </form>
            </div>
        )
    }
}
export default AddFriend;