function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function getRandomNumber() {
  return String(Math.floor(Math.random() * 1000)).padStart(3, '0');
}

function generatePassphrase() {
  const words = [
    getRandomWord(),
    getRandomWord(),
    getRandomWord()
  ];
  const randomIndex = Math.floor(Math.random() * 3);
  words[randomIndex] = words[randomIndex].charAt(0).toUpperCase() + words[randomIndex].slice(1);
  return words.join('-') + '-' + getRandomNumber();
}

function updateDisplay() {
  document.getElementById('passphrase').textContent = generatePassphrase();
}

function copyToClipboard() {
  const text = document.getElementById('passphrase').textContent;
  navigator.clipboard.writeText(text);
  const button = document.getElementById('copy');
  button.classList.add('copied');
  setTimeout(() => button.classList.remove('copied'), 200);
}

document.getElementById('copy').addEventListener('click', copyToClipboard);

// Generate initial passphrase
updateDisplay();
