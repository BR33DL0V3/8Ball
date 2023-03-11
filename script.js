const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const questionInput = document.querySelector('#question');
const responseText = document.querySelector('#response-text');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = nameInput.value;
  const userQuestion = questionInput.value;
  const randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';

  switch(randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = '  Signs point to yes';
  break;
}

responseText.textContent = `Hello, ${userName}! You asked: "${userQuestion}". Magic 8 Ball says: "${eightBall}".`;
nameInput.value = '';
questionInput.value = '';
});
