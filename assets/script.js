
const textarea = document.getElementById('child');

textarea.addEventListener('input', function() {
  const enteredText = textarea.value;
  localStorage.setItem('savedText', enteredText);
});

// Restore saved text on page load
const savedText = localStorage.getItem('savedText');
if (savedText) {
  textarea.value = savedText;
}


const parentDiv = document.querySelector('#container');
const childTextarea = document.querySelector('#child');

function adjustTextareaHeight() {
  childTextarea.style.height = parentDiv.clientHeight - 90 + 'px';
}

window.addEventListener('resize', adjustTextareaHeight);
adjustTextareaHeight();


// -------------------------------


const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  const text = textarea.value;
  const fileName = 'YourNote.txt';

  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', fileName);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
});


// --------
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');
const resetButton = document.getElementById('resetButton');

increaseButton.addEventListener('click', () => {
  changeFontSize(1);
});

decreaseButton.addEventListener('click', () => {
  changeFontSize(-1);
});

resetButton.addEventListener('click', () => {
  resetFontSize();
});

function changeFontSize(delta) {
  let currentFontSize = parseInt(window.getComputedStyle(textarea).fontSize);
  currentFontSize += delta;
  textarea.style.fontSize = currentFontSize + 'px';
  localStorage.setItem('fontSize', currentFontSize);
}

function resetFontSize() {
  textarea.style.fontSize = '30px';
  localStorage.setItem('fontSize', '40');
}

// Restore font size on page load
const savedFontSize = localStorage.getItem('fontSize');
if (savedFontSize) {
  textarea.style.fontSize = savedFontSize + 'px';
}

// ============================
const fontStyleSelect = document.getElementById('fontStyleSelect');

fontStyleSelect.addEventListener('change', () => {
  const selectedFontStyle = fontStyleSelect.value;
  textarea.style.fontFamily = selectedFontStyle;
  localStorage.setItem('fontStyle', selectedFontStyle);
});

// Restore font style on page load
const savedFontStyle = localStorage.getItem('fontStyle');
if (savedFontStyle) {
  fontStyleSelect.value = savedFontStyle;
  textarea.style.fontFamily = savedFontStyle;
}
