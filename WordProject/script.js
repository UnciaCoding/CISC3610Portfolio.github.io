
function speakText() {
    var text = document.getElementById('text').value;
    var speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

function syncWord() {
    const menu = document.getElementById("wordSelect");
    const display = document.getElementById("wordDisplay");
    if (menu.selectedIndex > 0) {
        const selectedOption = menu.options[menu.selectedIndex];
        // Extract and Display
        display.value = selectedOption.dataset.temp;
    } else {
        display.value = "";
    }
}

function speakWord() {
    var word = document.getElementById('wordDisplay').value;
    var speech = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(speech);
}