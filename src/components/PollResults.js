import React, { Component } from 'react'
import { Card, Image, Badge } from "react-bootstrap";
import { connect } from 'react-redux';

class PollResults extends Component {
  votesPercentage = (numberOfVotesForOption, totalVotes) => {
    return (numberOfVotesForOption / totalVotes) * 100
  };

  render() {
    const { question, author, authedUser } = this.props;
    const optionOneVotesCount = question.optionOne.votes.length;
    const optionTwoVotesCount = question.optionTwo.votes.length;
    const totalVotes = optionOneVotesCount + optionTwoVotesCount;
    const optionOneVotesPercent = this.votesPercentage(optionOneVotesCount, totalVotes);
    const optionTwoVotesPercent = this.votesPercentage(optionTwoVotesCount, totalVotes);
    const votedForOptionOne = question.optionOne.votes.includes(authedUser)
    const votedForOptionTwo = question.optionTwo.votes.includes(authedUser);

    return (
      <div className='container'>
        <ul className='list-unstyled' style={{ marginTop: 10 }}>
          <div>
            <Card bg="light" className="text-center">
              <Card.Header>
                <h3>Asked by {author.name}</h3>
              </Card.Header>

              <Card.Body>
                <Image src={`${author.avatarURL}`} roundedCircle/>
                <h3>Results</h3>
                <div className='well'>
                  <span>

                    <h6 className='text-info'>Would you rather {question.optionOne.text}?
                    {
                      votedForOptionOne &&
                      <Badge pill variant="warning">
                        Your Vote
                      </Badge>
                    }
                    </h6>
                  </span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info"
                         role="progressbar" style={{width: optionOneVotesPercent }}
                         aria-valuenow={optionOneVotesPercent}
                         aria-valuemin="0" aria-valuemax="100" />
                  </div>
                  <h6>{optionOneVotesCount} out of {totalVotes}</h6>
                </div>

                <div className='well'>
                  <span>
                  <h6 className='text-info'>Would you rather {question.optionTwo.text}?
                    {
                      votedForOptionTwo &&
                      <Badge pill variant="warning">
                        Your Vote
                      </Badge>
                    }
                    </h6>
                  </span>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info"
                         role="progressbar" style={{width: optionTwoVotesPercent}}
                         aria-valuenow={optionTwoVotesPercent}
                         aria-valuemin="0" aria-valuemax="100" />
                  </div>
                  <h6>{optionTwoVotesCount} out of {totalVotes}</h6>
                </div>
              </Card.Body>
            </Card>
          </div>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}, {question}) => {
  const filteredQuestion = questions[question.id];
  const authorId = filteredQuestion.author;
  const author = users[authorId];

  return {
    authedUser,
    question: filteredQuestion,
    author: author
  }
}

export default connect(mapStateToProps)(PollResults);