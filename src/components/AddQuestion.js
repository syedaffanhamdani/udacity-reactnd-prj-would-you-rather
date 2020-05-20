import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import { handleAddQuestion } from '../actions/actionUtils'

class AddQuestion extends Component {

    state = {
        questionOptionOne: '',
        questionOptionTwo: '',
    }

    setOptionOne = (e) => {
        this.setState({
            questionOptionOne: e.target.value
        })
    }
    setOptionTwo = (e) => {
        this.setState({
            questionOptionTwo: e.target.value
        })
    }

    submitNewQuestion = (e) => {
        e.preventDefault()
        const {questionOptionOne, questionOptionTwo} = this.state
        this.props.addQuestion(questionOptionOne,questionOptionTwo)
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <div className="question-wrapper">
                    <div className="question-header">
                        <p className="question-title">Would you rather</p>
                    </div>
                    {
                        <form onSubmit={this.submitNewQuestion} id="form-question-add">

                        </form>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        addQuestion:(questionOptionOne, questionOptionTwo)=>{
            dispatch(handleAddQuestion(questionOptionOne, questionOptionTwo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddQuestion)