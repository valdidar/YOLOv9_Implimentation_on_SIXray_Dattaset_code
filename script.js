fetch("https://icanhazdadjoke.com/slack")
    .then((data) => data.json())
    .then((jokeData) => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById("jokeElement");

        jokeElement.innerHTML = jokeText;

        const synth = window.speechSynthesis;
        const chunks = jokeText.split(/[\.,\?]\s/);
        let i = 0;
        const speakChunks = () => {
            if (i < chunks.length) {
                const utterance = new SpeechSynthesisUtterance(chunks[i] + (/[\.,\?]$/.test(chunks[i]) ? '' : '.'));
                utterance.lang = "en-US";
                utterance.rate = parseInt(1.0);
                synth.speak(utterance);
                i++;
                utterance.onend = speakChunks;
            }
        };
        speakChunks();
    });
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buton").addEventListener("click", function () {
        fetch("https://icanhazdadjoke.com/slack")
            .then((data) => data.json())
            .then((jokeData) => {
                const jokeText = jokeData.attachments[0].text;
                const jokeElement = document.getElementById("jokeElement");

                jokeElement.innerHTML = jokeText;

                const synth = window.speechSynthesis;
                const chunks = jokeText.split(/[\.,\?]\s/)
                let i = 0;
                const speakChunks = () => {
                    if (i < chunks.length) {
                        const utterance = new SpeechSynthesisUtterance(chunks[i] + (/[\.,\?]$/.test(chunks[i]) ? '' : '.'));
                        utterance.lang = "en-US";
                        utterance.rate = parseInt(1.0);
                        synth.speak(utterance);
                        i++;
                        utterance.onend = speakChunks;
                    }
                };
                speakChunks();
            });
    });
});

