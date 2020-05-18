import React, { Component, Fragment } from 'react'
import Header from './Header'
import {connect} from 'react-redux'
class Leaderboard extends Component {

    render() {
        const { users, usersPollsData } = this.props
        return (
            <Fragment>
                <Header />
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Questions created</th>
                            <th>Questions answered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersPollsData.map((user, index) => (
                                <tr key={user.userId}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <ul>
                                            <li>
                                                <img src={users[user.userId].avatarURL}
                                                alt="user avatar"
                                                className="profile-picture"/>
                                            </li>
                                        </ul>
                                    </td>
                            <td>{user.pollsCreated}</td>
                            <td>{user.pollsAnswered}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </Fragment>)
    }

}
function mapStateToProps({ users }) {
    const usersPollsData = Object.keys(users).map((userId) => {
        return {
            userId,
            pollsCreated: users[userId].questions.length,
            pollsAnswered: Object.keys(users[userId].answers).length
        }
    }).sort((first, second) => (second.pollsCreated + second.pollsAnswered) - (first.pollsAnswered + first.pollsAnswered))
    return {
        users,
        usersPollsData
    }
}

export default connect(mapStateToProps)(Leaderboard)