import React, { Component } from 'react';
import { Section } from '../Section/Section'
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions ';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
 handleFeedback = e => {
  this.setState(prevState => ({ [e]: prevState[e] + 1 }));
 };
  
  countTotalFeedback = e => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
    
  }
  countPositiveFeedbackPercentage = () =>{
     if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (<> <ThemeProvider theme={theme}> <GlobalStyle />
     <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback} />
      </Section>
        <Section title="Statistics"> {this.countTotalFeedback() !== 0 ? (
          <Statistics good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />) : (
          <Notification message="There is no feedback"></Notification>)}
        </Section>  </ThemeProvider> </>

        
    );
  }
} 

