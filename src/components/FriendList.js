
import React from 'react';
import axiosWithAuth from './../utlils/axiosWithAuth';

class FriendList extends React.Component{
    state = {
        friends: []
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        axiosWithAuth().get('/friends', {
            headers: {
                authorization: token
            }
        })
        .then(res=>{
            this.setState({
                friends: res.data
            })
        })
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div className="add-friend">
                <h1>FRIEND LIST</h1>
                <ul>
                {
                    this.state.friends.map(friend => {
                        return <li>{friend.name} - {friend.email} - {friend.age} years old</li> 
                    })
                }
                </ul>
            </div>
        )
    }
}
export default FriendList;