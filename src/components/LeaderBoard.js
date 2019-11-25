import React, { Component } from 'react';
import { Card, Image } from "react-bootstrap";

class LeaderBoard extends Component {
  state = {
    scoreCards: [
      {
        "name": "Sarah Edo",
        "avatar": "https://api.adorable.io/avatars/150/5ed5ebf51885555f88b3d9dcad4694a4.png",
        "numAnswers": 4,
        "numQuestions": 2
      },
      {
        "name": "John Doe",
        "avatar": "https://api.adorable.io/avatars/150/e41ea4b7bf72eebb86b95f501994def5.png",
        "numAnswers": 3,
        "numQuestions": 2
      },
      {
        "name": "Tyler McGinnis",
        "avatar": "https://api.adorable.io/avatars/150/dbc98435fafe77aa6c310558b1d5a17b.png",
        "numAnswers": 2,
        "numQuestions": 2
      }
    ]
  };

  render() {
    const { scoreCards } = this.state;
    return (
      <div className='container'>
        <ul className='list-unstyled'>
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
                    <h5> Score: {scoreCard.numAnswers + scoreCard.numQuestions}</h5>
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

export default LeaderBoard;