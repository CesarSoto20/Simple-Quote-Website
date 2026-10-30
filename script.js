const quotes = [
  "Nobody is coming to save you, build the life you keep dreaming about.",
  "The hardest part isn't chasing the dream. it's staying locked in when nothing around you look like progress, keep showing up anyway.",
  "Study for who you want to become.",
  "Stop wishing, start working.",
  "I can win.",
  "if you ever feel like giving up remember, a pawn can become anything as long as it keep moving forward.",
  "Do it because they said you couldn't do it.",
  "Life isn't about finding yourself it's about creating yourself.",
  "Fall 99 times make sure you stand back up 100 times.",
  "I'm destined to be the best in my bloodline.",
  "Be yourself, someone always will judge.",
  "Cry as hard as you want, but make sure when you stop crying, you never cry for the same reason again.",
  "Winner don't wait for motivation, they create it.",
  "You don't have to be the best today, you just have to be better than you were yesterday.",
  "Your limit only exist in your mind.",
  "Your limit move when you refuse to accept them.",
  "Look like someone has started to get comfortable don't forget what happen last time.",
  "What if I fail, what if you fly, difficult doesn't mean impossible.",
  "Only you can change your life.",
  "You do not Yield, by any mean necessary.",
  "cut the noise, clear your mind, get back to work.",
  "The secret of success is to be consistent.",
  "You can always do more.",
  "Risk is always better than regret.",
  "you can either give up or keep going, both will hurt.",
  "Win or Win",
  " Out work your former self."
];

const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
}

btn.addEventListener("click", newQuote);

newQuote();
