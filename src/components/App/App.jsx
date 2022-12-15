import { useState } from 'react';
import { Section } from '../Section/Section'
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions ';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';



export default function App() {
   const [good, setGood] = useState(() => 0);
  const [neutral, setNeutral] = useState(() => 0);
  const [bad, setBad] = useState(() => 0);
  
  const options = ['good', 'neutral', 'bad'];
  
 
  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(p => p + 1);
        break;
      case 'neutral':
        setNeutral(p => p + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
      default:
        return;
    }
  };
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
   const countPositiveFeedbackPercentage = () => {
    return Math.round(good / (countTotalFeedback() / 100));
  };

    return ( <ThemeProvider theme={theme}> <GlobalStyle />
     <Section title="Please leave feedback">
        <FeedbackOptions options={options}
          onLeaveFeedback={handleFeedback} />
      </Section>
        <Section title="Statistics"> {countTotalFeedback() !== 0 ? (
          <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />) : (
          <Notification message="There is no feedback"></Notification>)}
        </Section>  </ThemeProvider>)
  
} 

