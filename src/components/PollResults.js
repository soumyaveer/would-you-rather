import React, { Component } from 'react'
import { Card, Image } from "react-bootstrap";

class PollResults extends Component {

  render() {
    console.log("Checking the query params", this.props);
    const { question } = this.props;
    const optionOneVotesCount = question.optionOne.votes.length;
    const optionTwoVotesCount = question.optionTwo.votes.length;
    const totalVotes = optionOneVotesCount + optionTwoVotesCount;
    const optionOneVotesPercent = (optionOneVotesCount / totalVotes) * 100;
    const optionTwoVotesPercent = (optionTwoVotesCount / totalVotes) * 100;

    return (
      <div className='container'>
        <ul className='list-unstyled' style={{ marginTop: 10 }}>
          <div>
            <Card bg="light" className="text-center">
              <Card.Header>
                <h3>Asked by {question.author}</h3>
              </Card.Header>

              <Card.Body>
                <h3>Results:</h3>
                <div className='well'>
                  <h6 className='text-info'>Would you rather {question.optionOne.text}?</h6>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info"
                         role="progressbar" style={{width: optionOneVotesPercent }}
                         aria-valuenow={optionOneVotesPercent}
                         aria-valuemin="0" aria-valuemax="100" />
                  </div>
                  <h5>{optionOneVotesCount} out of {totalVotes}</h5>
                </div>

                <div className='well'>
                  <h6 className='text-info'>Would you rather {question.optionTwo.text}?</h6>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info"
                         role="progressbar" style={{width: optionTwoVotesPercent}}
                         aria-valuenow={optionTwoVotesPercent}
                         aria-valuemin="0" aria-valuemax="100" />
                  </div>
                  <h5>{optionTwoVotesCount} out of {totalVotes}</h5>

                </div>
              </Card.Body>
            </Card>
          </div>
        </ul>
      </div>
    )
  }
}

export default PollResults;