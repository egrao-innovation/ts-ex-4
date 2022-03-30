export function hey(message: unknown): unknown {
  var response: string = 'Whatever.';
  message = (message as string).trim();

  if((message as string) === ''){
    response = 'Fine. Be that way!'
  }
  else if(message == (message as string).toUpperCase() && (message as string).endsWith('?') && (message as string).match(/[a-zA-Z]/g)){
    response = 'Calm down, I know what I\'m doing!'
  }
  else if((message as string) == (message as string).toUpperCase() && (message as string).match(/[a-zA-Z]/g)){
    response = 'Whoa, chill out!';
  }
  else if((message as string).endsWith('?')){
    response = 'Sure.'
  }

  return response;
}