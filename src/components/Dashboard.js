import React, {Component} from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {loadInitialPollData} from '../actions/actionUtils'
class Dashboard extends Component{

    componentDidMount(){
        this.props.dispatch(loadInitialPollData())

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
    const answeredPolls = Object.keys(polls).length !== 0
    ? Object.keys(user.answers)
        .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
    : []

const unansweredPolls = Object.keys(polls).length !== 0
    ? Object.keys(polls)
        .filter(pollID => !answeredPolls.includes(pollID))
        .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
    : []

return {
    answeredPolls,
    unansweredPolls,
    loadingBar,
}


}
export default connect(mapStateToProps)(Dashboard);