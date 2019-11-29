import React, { Component } from 'react';
import { Card, Image } from "react-bootstrap";
import { connect } from 'react-redux';

class LeaderBoard extends Component {
  render() {
    const { scoreCards } = this.props;
    return (
      <div className='container'>
        <ul className='list-unstyled' style={{ marginTop: 10 }}>
          {
            scoreCards.map(scoreCard =>
              <li key={scoreCard.name} className='mx-auto'>
                <Card bg="light" className='text-center'>
                  <Card.Header>
                    <h3>{scoreCard.name}</h3>
                  </Card.Header>

                  <Card.Body className='col-sm'>
                    <div>
                      <Image src={`${scoreCard.avatar}`} roundedCircle/>
                      <br/>
                      <br/>
                    </div>
                    <h5>Answered Questions: {scoreCard.numAnswers}</h5>
                    <h5>Created Questions: {scoreCard.numQuestions}</h5>
                    <h5> Score: {scoreCard.totalPolls}</h5>
                  </Card.Body>
                </Card>
                <br/>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const allUsers = Object.values(users)
  const scoreCards = allUsers.map(user => ({
      id: user.id,
      name: user.name,
      avatar: user.avatarURL,
      numAnswers: Object.values(user.answers).length,
      numQuestions: user.questions.length,
      totalPolls: Object.values(user.answers).length +  user.questions.length
    })).sort((a, b) => b.totalPolls - a.totalPolls)

  return {
    scoreCards
  }
}

export default connect(mapStateToProps)(LeaderBoard);