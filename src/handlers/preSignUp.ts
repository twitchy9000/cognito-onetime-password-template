import type { PreSignUpTriggerHandler } from 'aws-lambda';

export const handle: PreSignUpTriggerHandler = async (event) => {
  console.log(event);
  return event;
}