import type { VerifyAuthChallengeResponseTriggerHandler } from 'aws-lambda';

export const handle: VerifyAuthChallengeResponseTriggerHandler = async (event) => {
  const expectedAnswer = event.request.privateChallengeParameters!.secretLoginCode; 
  if (event.request.challengeAnswer === expectedAnswer) {
    event.response.answerCorrect = true;
  } else {
    event.response.answerCorrect = false;
  }

  console.log(event, expectedAnswer);
  
  return event;
}