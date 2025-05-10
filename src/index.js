let speech = null;

// Инициализиране на речта и визуализацията
function initSpeech() {
  speech = new SpeechSynthesisUtterance();
  updateSpeechSettings();
}

// Обновяване на настройките на речта
function updateSpeechSettings() {
  if (!speech) return;

  speech.text = document.getElementById('input').value;
  speech.lang = document.getElementById('language').value;
  speech.rate = parseFloat(document.getElementById('rate').value);
  speech.pitch = parseFloat(document.getElementById('pitch').value);
}

// Функция за говорене
function speak() {
  if (!speech) initSpeech();

  updateSpeechSettings();

  // Спиране на текущата реч, ако има такава
  window.speechSynthesis.cancel();

  // Стартиране на речта
  window.speechSynthesis.speak(speech);

  // Изчистване на текста след приключване на речта
  speech.onend = () => {
    document.getElementById('input').value = '';
  };
}

// Функция за спиране на речта
function stop() {
  window.speechSynthesis.cancel();
}

// Обновяване на стойностите на слайдерите
document.getElementById('rate').addEventListener('input', (e) => {
  document.getElementById('rateValue').textContent = e.target.value;
});

document.getElementById('pitch').addEventListener('input', (e) => {
  document.getElementById('pitchValue').textContent = e.target.value;
});

// Инициализиране при зареждане на страницата
window.addEventListener('load', () => {
  initSpeech();
});
