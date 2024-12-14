const message = document.getElementById('message');
const codeInput = document.getElementById('codeInput');

// Define success codes and messages
const codes = {
  DECK: 'Dark Blue Triangle - 0',
  HALL: 'Pink Pentagon - 3',
  PONY: 'Pink Star - 1',
  CLUB: 'Yellow Triangle - 7'
};

// Listen for input
codeInput.addEventListener('keyup', (e) => {
  const input = codeInput.value.toUpperCase();

  if (e.key === 'Enter') {
    if (codes[input]) {
      displayMessage(codes[input], true);
    } else {
      displayMessage('Code Not Accepted', false);
    }
    codeInput.value = ''; // Clear input
  }
});

// Display message
function displayMessage(text, success) {
  message.textContent = text;
  message.style.color = success ? 'lime' : 'red';
  message.style.textShadow = success 
    ? '0 0 5px lime, 0 0 10px lime' 
    : '0 0 5px red, 0 0 10px red';

  setTimeout(() => {
    message.textContent = 'Enter Code:';
    message.style.color = 'green';
    message.style.textShadow = '0 0 5px green, 0 0 10px green';
  }, 5000);
}
