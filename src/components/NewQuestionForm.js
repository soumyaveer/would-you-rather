import React, {Component} from 'react';
import { Button, Card } from "react-bootstrap";

class NewQuestionForm extends Component {
  render(){
    return(
      <div style={{marginTop: 20}}>
        <form className='form-group mx-auto col-sm-6' onSubmit={this.handleFormSubmit}>
          <Card bg="light" className="text-center">
            <Card.Header>
              <h1>Create New Question</h1>
            </Card.Header>
            <Card.Body>
              <h5>Complete the question</h5>
              <h3>Would you Rather ...</h3>

              <div className=''>
                <label>
                  <input
                    className='form-control'
                    type="text"
                    name="answer"
                    onChange={this.handleRadioButtonSelectionChange}/>
                </label>
              </div>
              <h5>OR </h5>
              <div>
                <label>
                  <input
                    className='form-control'
                    type="text"
                    name="answer"
                    onChange={this.handleRadioButtonSelectionChange}/>
                </label>
              </div>

              <Button variant='outline-info' type='submit'>
                Submit
              </Button>
            </Card.Body>
          </Card>
        </form>
      </div>
    )
  }
}

export default NewQuestionForm;