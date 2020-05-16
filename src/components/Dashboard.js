import React, {Component} from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {loadInitialPollData} from '../actions/actionUtils'
class Dashboard extends Component{

    componentDidMount(){
        console.log('componetDidMount')
        this.props.dispatch(loadInitialPollData())

    }

    render(){
        
        return(
            <div className="DashBoard">
                <Header/>
                <h1>Dashboard</h1>
 
            </div>)
}}

function mapStateToProps(state){
 return {state}

}
export default connect(mapStateToProps)(Dashboard);