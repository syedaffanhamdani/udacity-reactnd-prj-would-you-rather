import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class WouldYouRatherCard extends Component {
    render () {
        const { question } = this.props

        if (question === null ) {
            return <p>Question not found</p>
        }

        const { optionOne, optionTwo } = question
        const { id } = this.props

        return (
            <Link to={`/questions/${id}`} className='form margin poll-form'>
            <div className='form-header'>
                <p className='form-title'>Would You Rather</p>
            </div>
            <div className='form-body'>
                <p className='optionOne'>{optionOne.text}</p>
                <div className='or-seperator'>
                    <hr/>
                    <p className='inline-p'>OR</p>
                    <hr/>
                </div>
                <p className='optionTwo'>{optionTwo.text}</p>
            </div>
        </Link>
        )
    }
}

function mapStateToProps ({authenticatedUser, questions}, { id }) {
    const question = questions[id]

    return {
        authenticatedUser,
        question,
        id,
    }
}

export default connect(mapStateToProps)(WouldYouRatherCard)