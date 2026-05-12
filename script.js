const gameData = {
    'truth-or-dare': {
        title: 'Truth or Dare',
        normal: [
            { type: 'Truth', text: 'What was your first impression of me?' },
            { type: 'Dare', text: 'Give your partner a 1-minute back massage.' },
            { type: 'Truth', text: 'What is your favorite memory of us together?' },
            { type: 'Dare', text: 'Do your best impression of me for 30 seconds.' },
            { type: 'Truth', text: 'If you could change one thing about our relationship, what would it be?' },
            { type: 'Dare', text: 'Whisper something romantic in my ear.' },
            { type: 'Truth', text: 'What is the most attractive thing about me?' },
            { type: 'Dare', text: 'Show me the last photo you took on your phone.' },
            { type: 'Truth', text: 'What is a secret you\'ve never told me?' },
            { type: 'Dare', text: 'Post a cute photo of us on your story right now.' }
        ],
        funny: [
            { type: 'Truth', text: 'What is the most embarrassing thing you\'ve done in front of me?' },
            { type: 'Dare', text: 'Try to make me laugh in 30 seconds without touching me.' },
            { type: 'Truth', text: 'What is the weirdest habit you have that I don\'t know about?' },
            { type: 'Dare', text: 'Do an interpretive dance of how we met.' },
            { type: 'Truth', text: 'If I were an animal, which one would I be and why?' },
            { type: 'Dare', text: 'Talk in a silly accent for the next two rounds.' },
            { type: 'Truth', text: 'What is the silliest thing you\'ve ever cried about?' },
            { type: 'Dare', text: 'Let me redo your hair in the most ridiculous style possible.' },
            { type: 'Truth', text: 'If we were in a horror movie, who would die first?' },
            { type: 'Dare', text: 'Serenade me with a song but only using animal noises.' }
        ],
        naughty: [
            { type: 'Truth', text: 'What is your favorite part of my body?' },
            { type: 'Dare', text: 'Give me a passionate kiss for 15 seconds.' },
            { type: 'Truth', text: 'What is your biggest turn-on?' },
            { type: 'Dare', text: 'Whisper a dirty secret in my ear.' },
            { type: 'Truth', text: 'What is the most adventurous thing you want to try with me?' },
            { type: 'Dare', text: 'Take off one piece of clothing.' },
            { type: 'Truth', text: 'Where is the weirdest place you\'ve ever wanted to do it?' },
            { type: 'Dare', text: 'Send me a spicy text while sitting right next to me.' },
            { type: 'Truth', text: 'What was your best sexual experience with me?' },
            { type: 'Dare', text: 'Use your tongue to trace a path from my neck to my collarbone.' }
        ],
        adult: [
            { type: 'Truth', text: 'What is your favorite sexual position to do with me?' },
            { type: 'Dare', text: 'Give me oral sex for 2 minutes.' },
            { type: 'Truth', text: 'Have you ever fantasized about us having sex in a public place?' },
            { type: 'Dare', text: 'Suck and play with my breasts/nipples for a full minute.' },
            { type: 'Truth', text: 'What is the one thing I do during sex that drives you crazy?' },
            { type: 'Dare', text: 'Remove all your clothes and strike a sexy pose.' },
            { type: 'Truth', text: 'If we could have sex anywhere in the world right now, where would it be?' },
            { type: 'Dare', text: 'Use your mouth to explore my inner thighs without touching anything else.' },
            { type: 'Truth', text: 'What is your favorite way to be initiated for sex?' },
            { type: 'Dare', text: 'Have sex with me in a position we\'ve never tried (or your favorite one).' }
        ]
    },
    'never-have-i-ever': {
        title: 'Never Have I Ever',
        normal: [
            'Never have I ever stalked an ex on social media.',
            'Never have I ever lied about my age.',
            'Never have I ever had a crush on a coworker.',
            'Never have I ever forgotten an anniversary.',
            'Never have I ever pretended to be sick to avoid a date.',
            'Never have I ever snooped through a partner\'s phone.',
            'Never have I ever sent a risky text to the wrong person.',
            'Never have I ever regifted something from an ex.',
            'Never have I ever cried during a romantic movie.',
            'Never have I ever fallen in love at first sight.'
        ],
        funny: [
            'Never have I ever laughed so hard I peed a little.',
            'Never have I ever accidentally sent a text about someone to that person.',
            'Never have I ever practiced an argument in the shower.',
            'Never have I ever tripped in public and pretended it was part of a dance.',
            'Never have I ever eaten a whole pizza by myself in one sitting.',
            'Never have I ever mistaken a stranger for someone I knew.',
            'Never have I ever used a fake name at a coffee shop.',
            'Never have I ever tried to push a pull door.',
            'Never have I ever been scared of a bug and made someone else kill it.',
            'Never have I ever sung the wrong lyrics to a song with total confidence.'
        ],
        naughty: [
            'Never have I ever joined the "mile high club".',
            'Never have I ever sent a nude photo.',
            'Never have I ever had a one-night stand.',
            'Never have I ever roleplayed in the bedroom.',
            'Never have I ever used a toy with a partner.',
            'Never have I ever hooked up in a public place.',
            'Never have I ever had a crush on a friend\'s sibling.',
            'Never have I ever watched an adult film with a partner.',
            'Never have I ever been caught in the act.',
            'Never have I ever lied about my "number".'
        ],
        adult: [
            'Never have I ever had sex in the shower.',
            'Never have I ever given or received head in a car.',
            'Never have I ever had sex while someone else was in the house.',
            'Never have I ever used food (whipped cream, chocolate) during sex.',
            'Never have I ever tried the "69" position.',
            'Never have I ever had sex with the lights fully on.',
            'Never have I ever faked an orgasm.',
            'Never have I ever had a sexual encounter with more than one person at once.',
            'Never have I ever swallowed during oral sex.',
            'Never have I ever had sex in a place where we could have been caught.'
        ]
    },
    'would-you-rather': {
        title: 'Would You Rather',
        normal: [
            'Would you rather have a quiet night in or a wild night out?',
            'Would you rather travel the world together or build your dream home?',
            'Would you rather always have to speak your mind or never speak again?',
            'Would you rather be rich and lonely or poor and in love?',
            'Would you rather have a personal chef or a personal massager?',
            'Would you rather go back to the past or see the future?',
            'Would you rather have 10 kids or no kids?',
            'Would you rather be stranded on a desert island with me or in a busy city?',
            'Would you rather always be 10 minutes late or 20 minutes early?',
            'Would you rather win the lottery or live twice as long?'
        ],
        funny: [
            'Would you rather always have to hop everywhere or always have to shout?',
            'Would you rather have a permanent clown nose or permanent elf ears?',
            'Would you rather have to sneeze every 5 minutes or have an itch you can\'t scratch?',
            'Would you rather be able to talk to animals or speak every human language?',
            'Would you rather always smell like onions or always smell like wet dog?',
            'Would you rather have hands for feet or feet for hands?',
            'Would you rather only be able to whisper or only be able to shout everything?',
            'Would you rather have a tail that wags when you\'re happy or horns that grow when you\'re mad?',
            'Would you rather always have a pebble in your shoe or always have a hair in your mouth?',
            'Would you rather be famous for something embarrassing or not be famous at all?'
        ],
        naughty: [
            'Would you rather do it with the lights on or off?',
            'Would you rather have morning sex or late-night sex?',
            'Would you rather be on top or on the bottom?',
            'Would you rather have a quickie or a long session?',
            'Would you rather talk dirty or be silent?',
            'Would you rather use handcuffs or a blindfold?',
            'Would you rather do it in a car or in a shower?',
            'Would you rather watch me or have me watch you?',
            'Would you rather give or receive?',
            'Would you rather try a three-some or a swingers club?'
        ],
        adult: [
            'Would you rather have me give you head or have me suck your nipples?',
            'Would you rather have sex in a bed or on the kitchen counter?',
            'Would you rather try a new sex position every night for a week or your favorite one once?',
            'Would you rather have rough sex or slow, romantic sex?',
            'Would you rather be the one being dominated or the one in control?',
            'Would you rather have sex in a hotel room or outdoors under the stars?',
            'Would you rather use a vibrator during sex or just us?',
            'Would you rather have a quickie in a public restroom or a long session in a park?',
            'Would you rather talk about your sexual fantasies or just act them out?',
            'Would you rather have sex while watching a movie or in complete silence?'
        ]
    },
    'date-idea': {
        title: 'Date Generator',
        normal: [
            'Go for a sunset walk at a local park.',
            'Have a DIY pizza-making night at home.',
            'Visit a nearby museum or art gallery.',
            'Go to a drive-in movie or set up a projector outside.',
            'Try a new cuisine at a restaurant you\'ve never been to.',
            'Go stargazing with a blanket and hot chocolate.',
            'Take a painting or pottery class together.',
            'Go to a local farmer\'s market and cook a meal with what you find.',
            'Have a board game tournament with snacks.',
            'Go for a scenic hike and have a picnic.'
        ],
        funny: [
            'Go to a thrift store with $10 each and buy the ugliest outfit for each other to wear to dinner.',
            'Have a "bad movie" night where you watch the lowest-rated film you can find.',
            'Go to a karaoke bar and only sing songs you don\'t know.',
            'Have a "Chopped" style cooking competition with random ingredients.',
            'Go people-watching at a mall and make up ridiculous backstories for strangers.',
            'Take a "terrible" dance class together (like 80s aerobics).',
            'Have a "taco tour" and rate the worst tacos in town.',
            'Go to an arcade and spend all your tickets on the most useless prize.',
            'Try to build a complex Lego set without the instructions.',
            'Have a "powerpoint night" where you present on why the other is a weirdo.'
        ],
        naughty: [
            'Visit a local adult store together.',
            'Rent a hotel room in your own city for a night.',
            'Have a "no clothes allowed" movie marathon.',
            'Go to a bar and pretend to be strangers meeting for the first time.',
            'Write down your wildest fantasies and trade them.',
            'Have a "blindfolded" dinner where you feed each other.',
            'Take a bath or shower together with candles.',
            'Play a game of strip poker or strip chess.',
            'Try a "position of the night" from a book.',
            'Give each other full-body oil massages.'
        ],
        adult: [
            'Spend the whole day in bed having sex and ordering food.',
            'Go to a spa for a couples\' massage and then have sex in the hotel room.',
            'Try out a new "sex furniture" or piece of equipment together.',
            'Have a "fantasy night" where you both dress up and act out a scene.',
            'Visit a clothing-optional resort or beach for the weekend.',
            'Have a "sensory play" night with ice, feathers, and blindfolds.',
            'Go out to dinner without wearing any underwear and tell each other.',
            'Record yourselves having sex and watch it back together.',
            'Spend the evening learning and practicing new sex positions from a guide.',
            'Have a "yes night" where you both agree to any sexual request the other makes.'
        ]
    }
};

let currentView = 'menu-view';
let currentGame = null;
let currentMode = 'normal';
let gameHistory = {};

function setMode(mode) {
    currentMode = mode;
    
    // Clear all mode classes
    document.body.classList.remove('funny-mode', 'naughty-mode', 'adult-mode');
    
    // Deactivate all buttons
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    
    // Update UI
    const modeBtnMap = {
        'normal': 'normal-mode-btn',
        'funny': 'funny-mode-btn',
        'naughty': 'naughty-mode-btn',
        'adult': 'adult-mode-btn'
    };
    
    if (mode !== 'normal') {
        document.body.classList.add(`${mode}-mode`);
    }
    
    document.getElementById(modeBtnMap[mode]).classList.add('active');
    
    // If a game is active, refresh the card to the new mode's content
    if (currentGame) {
        nextItem();
    }
}

function startGame(gameKey) {
    currentGame = gameKey;
    const game = gameData[gameKey];
    
    document.getElementById('game-title').innerText = game.title;
    showView('play-view');
    nextItem();
}

function showMenu() {
    showView('menu-view');
    currentGame = null;
}

function showView(viewId) {
    document.getElementById(currentView).classList.remove('active');
    setTimeout(() => {
        document.getElementById(currentView).style.display = 'none';
        document.getElementById(viewId).style.display = 'block';
        setTimeout(() => {
            document.getElementById(viewId).classList.add('active');
            currentView = viewId;
        }, 50);
    }, 300);
}

function nextItem() {
    if (!currentGame) return;
    
    const historyKey = `${currentGame}-${currentMode}`;
    if (!gameHistory[historyKey]) {
        gameHistory[historyKey] = [];
    }
    
    const items = gameData[currentGame][currentMode];
    
    // Find indices that haven't been used
    let availableIndices = items.map((_, i) => i).filter(i => !gameHistory[historyKey].includes(i));
    
    // If all items have been used, reset the history for this game/mode
    if (availableIndices.length === 0) {
        gameHistory[historyKey] = [];
        availableIndices = items.map((_, i) => i);
    }
    
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    gameHistory[historyKey].push(randomIndex);
    
    const item = items[randomIndex];
    
    const display = document.getElementById('card-content');
    display.style.opacity = 0;
    
    setTimeout(() => {
        if (typeof item === 'object') {
            display.innerHTML = `<span style="color: var(--primary-red); font-weight: bold;">${item.type}:</span><br>${item.text}`;
        } else {
            display.innerText = item;
        }
        display.style.opacity = 1;
    }, 200);
}

document.getElementById('next-btn').addEventListener('click', nextItem);

// Initial setup
document.getElementById('play-view').style.display = 'none';
