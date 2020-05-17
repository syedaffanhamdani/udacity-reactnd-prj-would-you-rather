import React, {Component} from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {loadInitialPollData} from '../actions/actionUtils'
import WouldYouRatherCard from './WouldYouRatherOverviewCard'
class Dashboard extends Component{

    state = {
        selectedTab: 'unanswered'
    }

    componentDidMount(){
        console.log('componetDidMount')
        this.props.dispatch(loadInitialPollData())

    }

    render(){
        const { answeredQuestions, unansweredQuestions,loadingBar } = this.props
        
        return(
            <div className="DashBoard">
                <Header/>
                <ul className='toggler'>
                    <li 
                        className={ this.state.selectedTab === 'unanswered' ? 'active' : 'li-hover'}
                        onClick={() => {this.setState({ selectedTab: 'unanswered'})}}>
                        Unanswered
                    </li>
                    <li 
                        className={ this.state.selectedTab === 'answered' ? 'active' : 'li-hover'}
                        onClick={() => {this.setState({ selectedTab: 'answered'})}}>
                        Answered
                    </li>
                </ul>
                {
                    !loadingBar.default && Object.keys(unansweredQuestions).length === 0 && this.state.selectedTab === 'unanswered'
                    ? <p className='no-results'>no results</p>
                    : null
                }
                {
                    !loadingBar.default && Object.keys(answeredQuestions).length === 0 && this.state.selectedTab === 'answered'
                    ? <p className='no-results'>no results</p>
                    : null
                }
                { 
                    loadingBar.default
                    ? <p className='loading'>Loading ...</p>
                    : this.state.selectedTab === 'unanswered' && Object.keys(unansweredQuestions).length !== 0
                        ? <div className='question-form margin'>
                            {unansweredQuestions.map((id) => (
                            <WouldYouRatherCard key={id} id={id}/> ))}
                        </div>     
                        : this.state.selectedTab === 'answered' && Object.keys(answeredQuestions).length !== 0
                        ? <div className='question-form margin'>
                            {answeredQuestions.map((id) => (
                            <WouldYouRatherCard key={id} id={id}/> ))}
                        </div>     
                        : null
                 }             
 
            </div>)
}}

function mapStateToProps ({ questions, authenticatedUser, users, loadingBar }) {
    const user = users[authenticatedUser]

    const answeredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(user.answers)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    const unansweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions)
            .filter(pollID => !answeredQuestions.includes(pollID))
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    return {
        answeredQuestions,
        unansweredQuestions,
        loadingBar,
    }
}

export default connect(mapStateToProps)(Dashboard)