fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');
    
            jokeElement.innerHTML = jokeText;
			const synth = window.speechSynthesis;
			const utterance = new SpeechSynthesisUtterance(jokeText);
			utterance.lang = 'en-US';
			utterance.rate = 1.0;
			synth.speak(utterance);
    })
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buton").addEventListener("click", function() {
        fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');
    
            jokeElement.innerHTML = jokeText;
			const synth = window.speechSynthesis;
			const utterance = new SpeechSynthesisUtterance(jokeText);
			utterance.lang = 'en-US';
			utterance.rate = 1.0;
			synth.speak(utterance);
        })
    });
  });
