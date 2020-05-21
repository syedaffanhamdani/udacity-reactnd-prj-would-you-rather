import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import { handleAddQuestion } from '../actions/actionUtils'
import {Redirect} from 'react-router-dom'
class AddQuestion extends Component {

    state = {
        questionOptionOne: '',
        questionOptionTwo: '',
        renderRedirct: false,
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
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
        this.setRedirect()
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }

    render(){
        
        return(
            <div>
             {this.renderRedirect()}
             <Fragment>
                <Header/>
                <div className="question-wrapper">
                    <div className="question-header">
                        <p className="question-title">Would you rather</p>
                    </div>
                    {
                        <form onSubmit={this.submitNewQuestion} id="form-question-add">
                            <input type="text" className="questionOptionOne" onChange={this.setOptionOne} placeholder="Option One"></input>
                            <input type="text" className="questionOptionTwo" onChange={this.setOptionTwo} placeholder="Option Two"></input>
                        <button className="submitButton">Submit</button>
                        </form>
                    }
                </div>
            </Fragment>


            </div>
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