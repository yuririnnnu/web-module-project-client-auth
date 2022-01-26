import React from 'react';
import axiosWithAuth from './../utlils/axiosWithAuth';
class Logout extends React.Component{
    componentDidMount() {
        const token = localStorage.getItem('token')
        axiosWithAuth()
        .post('/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            localStorage.removeItem("token")
            this.state.history.push("/login")
        })
        .catch(err => console.log(err))
    }
    render(){
    return(<div></div>)
}
}
export default Logout;