import React, {Component} from 'react'
import Header from './Header'
import {loadInitialPollData} from '../actions/actionUtils'
class Dashboard extends Component{

    componentDidMount(){
      //  this.props.dispatch(loadInitialPollData)

    }

    render(){
        
        return(
            <div className="DashBoard">
                <Header/>
                <h1>Dashboard</h1>
 
            </div>)
}}

function mapStateToProps({polls,authenticatedUser,users,loadingBar}){
    const user = users[authenticatedUser]

}
export default Dashboard;