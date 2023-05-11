/** @format */

var meme = document.getElementById("memes");
var meme_btn = document.getElementById("txt-para");

let memes_arr = [
  "./images/meme1.jpg",
  "./images/meme2.jpg",
  "./images/meme3.jpg",
  "./images/meme4.jpg",
  "./images/meme5.jpg",
  "./images/meme6.jpg",
  "./images/meme7.jpg",
  "./images/meme8.jpg",
  "./images/meme9.jpg",
  "./images/meme10.jpg",
  "./images/meme11.jpg",
  "./images/meme12.jpg",
  "./images/meme13.jpg",
  "./images/meme14.jpg",
  "./images/meme15.jpg",
  "./images/meme16.jpg",
  "./images/meme17.jpg",
  "./images/meme18.jpg",
  "./images/meme19.jpg",
  "./images/meme20.jpg",
  "./images/meme21.jpg",
  "./images/meme22.jpg",
  "./images/meme23.jpg",
  "./images/meme24.jpg",
  "./images/meme25.jpg",
];

let random = () => {
  return memes_arr[Math.floor(Math.random() * memes_arr.length)];
};

let nextmeme = () => {
  meme.style.display = "block";
  meme.src = random();
  meme_btn.style.display = "none";
  quote_para.innerHTML = "";
  quote_para.innerHTML.innerText = "";
  quote_para.style = "";
  authors.innerHTML = "";
  main_joke_container.style.display = "none";
};

/// CODE FOR RANDOM QUOTE GENERATOR  ///

let quotes = [
  {
    author: "Martin Luther King Jr",
    txt: "Our scientific power has outrun our spiritual power. We have guided missiles and misguided men",
  },
  {
    author: "James Bryant Conant",
    txt: "Behold the turtle. He makes progress only when he sticks his neck out.",
  },
  {
    author: "Takayuki Ikkaku",
    txt: "Mistakes and disappointment make the sweet things in life that much sweeter.",
  },
  {
    author: "APJ Abdul Kalam ",
    txt: " You have to dream before your dreams can come true.",
  },
  {
    author: "APJ Abdul Kalam",
    txt: " If you want to shine like a sun, first burn like a sun.",
  },
  {
    author: "Srila Prabhupada",
    txt: "Anyone who is steady in his determination for the advanced stage of spiritual realization and can equally tolerate the onslaughts of distress and happiness is certainly a person eligible for liberation.",
  },
  {
    author: "Srila Prabhupada",
    txt: "One whose happiness is within, who is active within, who rejoices within and is illumined within, is actually the perfect mystic. He is liberated in the Supreme, and ultimately he attains the Supreme",
  },
  {
    author: "Srila Prabhupada",
    txt: "First-class religion teaches one how to love God without any motive. If I serve God for some profit, that is business-not love.",
  },
  {
    author: "Srila Prabhupada",
    txt: "A yogī is greater than the ascetic, greater than the empiricist and greater than the fruitive worker. Therefore, O Arjuna, in all circumstances, be a yogī.",
  },
  {
    author: "Rabindranath Tagore",
    txt: "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
  },
  {
    author: "Rabindranath Tagore",
    txt: "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy",
  },
  {
    author: " Swami Vivekananda",
    txt: "In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path",
  },
  {
    author: "Swami Vivekananda",
    txt: "The great secret of true success, of true happiness, is this: the man or woman who asks for no return, the perfectly unselfish person, is the most successful.",
  },
  {
    author: "Swami Vivekananda",
    txt: "Anything that makes weak - physically, intellectually and spiritually, reject it as poison",
  },
  {
    author: "Sripad Adi Shankaracharya",
    txt: "When our false perception is corrected, misery ends” and “You are the SELF, the Infinite Being”",
  },
  {
    author: "Sripad Adi Shankaracharya",
    txt: "When your last breath arrives, Grammar can do nothing",
  },
  {
    author: "Tirumalai Krishnamacharya",
    txt: "Master your breath, let the self be in bliss, contemplate on the sublime within you.",
  },
  {
    author: "Tirumalai Krishnamacharya",
    txt: "Rid your body of its impurities, let your speech be true and sweet, feel friendship for the world, and with humility seek wealth and knowledge.",
  },
  {
    author: "Paramahansa Yogananda",
    txt: "Change yourself and you have done your part in changing the world",
  },
  {
    author: "Mahavatar Babaji",
    txt: "The Divine realm extends to the earthly; but the later, illusory in nature, does not contain the essence of Reality.",
  },
  {
    author: "Oscar Wilde",
    txt: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marcus Tullius Cicero",
    txt: "A room without books is like a body without a soul",
  },
  {
    author: "Mahatma Gandhi",
    txt: "Be the change that you wish to see in the world",
  },
  {
    author: " Mark Twain",
    txt: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Mahatma Gandhi",
    txt: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  },
  {
    author: "Andre Gide",
    txt: "It is better to be hated for what you are than to be loved for what you are not",
  },
  { author: "Stephen Chbosky", txt: "We accept the love we think we deserve" },
  {
    author: "Oscar Wilde",
    txt: "Always forgive your enemies; nothing annoys them so much.",
  },
  {
    author: "Maya Angelou",
    txt: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    author: "Robert Frost",
    txt: "In three words I can sum up everything I've learned about life: it goes on",
  },
  {
    author: "Albert Einstein",
    txt: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  },
  {
    author: "Marilyn Monroe",
    txt: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Bernard M. Baruch",
    txt: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
];

var quote_para = document.querySelector(".fm-quote");
var display_txt = document.getElementById("txt-para");
var authors = document.getElementById("author");

function each_quote_call() {
  let random_quotes = quotes[Math.floor(Math.random() * quotes.length)];
  quote_para.innerText = random_quotes.txt;
  authors.innerText = random_quotes.author;
}

function nextquote() {
  meme.style.display = "none";
  quote_para.style.display = "block";
  display_txt.style.margin = 0;
  display_txt.innerText = "";
  joke_container.innerHTML = "";
  main_joke_container.style.display = "none";

  return each_quote_call();
}

/// RANDOM JOKES GENERATOR  /////

let jokes_array = [
  "What do the movies Titanic and The Sixth Sense have in common? Icy dead people.",
  "When you die, what part of the body dies last? The pupils… they dilate.",
  "Why is England the wettest country? Because the queen reigned there for decades.",
  "What's the difference between a golfer and a skydiver? A golfer goes whack 'darn' and a skydiver goes 'darn' whack.",
  "A friend of mine went bald years ago but still carries around an old comb. He just can't part with it.",
  "I want to die peacefully in my sleep like my grandfather did. Not screaming in terror like the passengers in his car",
  "What sits at the bottom of the sea and twitches? A nervous wreck.",
  "What do you call a woman who sets fire to all her bills? Bernadette.",
  "I saw Usain Bolt sprinting around the track shouting, 'Why did the chicken cross the road?' It was a running joke.",
  "You're not completely useless. You can always serve as a bad example.",
  "Did you hear about the guy whose whole left side was cut off? He's all right now.",
  "They all laughed when I said I wanted to be a comedian. Well, they're not laughing now! Wait…",
  "How do you make holy water? You boil the hell out of it.",
  "I used to be addicted to soap. But I'm clean now.",
  "Though I enjoy the sport, I could never date a tennis player. Love means nothing to them",
  "How much space will free up in the EU after Brexit? Approximately one GB.",
  "What's Forrest Gump's email password? 1Forrest1.",
  "Will glass coffins be a success? Remains to be seen",
  "And God said to John, 'Come forth and you shall be granted eternal life.' But John came fifth and won a toaster.",
  "How do you make a tissue dance? You put a little boogie in it.",
  "What did the left eye say to the right eye? 'Between you and me, something smells'.",
  "Why were the teacher's eyes crossed? She couldn't control her pupils.",
  "What do you call a bee that can't make up its mind? A maybe.",
  "Which branch of the military accepts toddlers? The infantry.",
  "Where do young trees go to learn? Elementree school.",
  "What do you call a group of rabbits backing up? A receding hare line.",
];

var joke_container = document.querySelector(".joke-container");
var main_joke_container = document.querySelector(".main-joke-container");

function each_call_joke() {
  var random_joke = jokes_array[Math.floor(Math.random() * jokes_array.length)];
  joke_container.innerHTML = random_joke;
}

function nextjoke() {
  meme.style.display = "none";
  display_txt.style.display = "none";
  display_txt.innerHTML = "";
  joke_container.style.display = "block";
  main_joke_container.style.display = "block";
  quote_para.innerText = "";
  authors.innerText = "";
  quote_para.style.display = "none";
  each_call_joke();
}
