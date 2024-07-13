// script.js
let audioTurn = new Audio("ting.mp3")
let playTune = new Audio("music.mp3")
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything! 🤣",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "What do you get when you cross a snowman and a vampire? Frostbite. 🧛‍♂️❄️",
    "Why was the math book sad? Because it had too many problems. 📚😢",
    "Why don’t skeletons fight each other? They don't have the guts. 💀",
    "What do you call fake spaghetti? An impasta! 🍝",
    "Why don't some couples go to the gym? Because some relationships don't work out. 🏋️‍♂️",
    "Why was the big cat disqualified from the race? Because it was a cheetah. 🐆",
    "What did the janitor say when he jumped out of the closet? Supplies! 🧹",
    "How does a penguin build its house? Igloos it together. 🐧",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one. ⛳",
    "Why did the coffee file a police report? It got mugged. ☕",
    "Why was the stadium so cool? It was filled with fans. 🏟️",
    "Why don't oysters share their pearls? Because they're shellfish. 🦪",
    "What do you call cheese that isn't yours? Nacho cheese! 🧀",
    "Why did the tomato turn red? Because it saw the salad dressing. 🍅",
    "What do you get when you cross a vampire with a snowman? Frostbite. 🧛‍♂️⛄",
    "Why did the bicycle fall over? Because it was two-tired! 🚲",
    "What did one ocean say to the other ocean? Nothing, they just waved. 🌊",
    "Why do fish always know how much they weigh? Because they have their own scales. 🐟"
];


const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible. 🍯",
    "Bananas are berries, but strawberries aren't. 🍌🍓",
    "A group of flamingos is called a 'flamboyance'. 🦩",
    "Octopuses have three hearts. 🐙",
    "There are more stars in the universe than grains of sand on all the Earth's beaches. 🌌",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes. ⏳",
    "A day on Venus is longer than a year on Venus. 🪐",
    "Humans share 60% of their DNA with bananas. 🍌",
    "A single strand of spaghetti is called a 'spaghetto'. 🍝",
    "Polar bear fur is actually transparent, not white. 🐻‍❄️",
    "The dot over the lowercase 'i' or 'j' is known as a 'tittle'. ✏️",
    "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat. 🗼",
    "The heart of a blue whale is so large that a human can swim through its arteries. 🐋",
    "Butterflies taste with their feet. 🦋",
    "The inventor of the Pringles can is now buried in one. 🥔",
    "An ostrich's eye is bigger than its brain. 🦤",
    "Sloths can hold their breath longer than dolphins can. 🦥",
    "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid. 🚀",
    "Kangaroos can't walk backwards. 🦘",
    "A jiffy is an actual unit of time. It's 1/100th of a second. ⏱️"
];

 
function showJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeContainer.innerHTML = `<p>${jokes[randomIndex]}</p><p>Fun Fact: ${funFacts[randomIndex]}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const jokeButton = document.getElementById('jokeButton');
    jokeButton.addEventListener('click', () => {
        showJoke();
        playTune.play();
        audioTurn.play();
        }, 500);
    });
    
    

