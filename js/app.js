let questionArr = [{
        city: 'Amsterdam',
        country: 'Netherlands',
        firstTry: 1
    },
    {
        city: 'Brussels',
        country: 'Belgium',
        firstTry: 1
    },
    {
        city: 'Kathmandu',
        country: 'Nepal',
        firstTry: 1
    },
    {
        city: 'Nairobi',
        country: 'Kenya',
        firstTry: 1
    },
    {
        city: 'Stockholm',
        country: 'Sweden',
        firstTry: 1
    },
    {
        city: 'Apia',
        country: 'Samoa',
        firstTry: 1
    },
    {
        city: 'Buenos Aires',
        country: 'Argentina',
        firstTry: 1
    },
    {
        city: 'Kingston',
        country: 'Jamaica',
        firstTry: 1
    },
    {
        city: 'New Delhi',
        country: 'India',
        firstTry: 1
    },
    {
        city: 'Suva',
        country: 'Fiji',
        firstTry: 1
    },
    {
        city: 'Athens',
        country: 'Greece',
        firstTry: 1
    },
    {
        city: 'Canberra',
        country: 'Australia',
        firstTry: 1
    },
    {
        city: 'Kuala Lumpur',
        country: 'Malaysia',
        firstTry: 1
    },
    {
        city: 'Nuku\'alofa',
        country: 'Tonga',
        firstTry: 1
    },
    {
        city: 'Tehran',
        country: 'Iran',
        firstTry: 1
    },
    {
        city: 'Avarua',
        country: 'Cook Islands',
        firstTry: 1
    },
    {
        city: 'Dublin',
        country: 'Ireland',
        firstTry: 1
    },
    {
        city: 'Lima',
        country: 'Peru',
        firstTry: 1
    },
    {
        city: 'Oslo',
        country: 'Norway',
        firstTry: 1
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        firstTry: 1
    },
    {
        city: 'Cairo',
        country: 'Egypt',
        firstTry: 1
    },
    {
        city: 'Hanoi',
        country: 'Vietnam',
        firstTry: 1
    },
    {
        city: 'Lisbon',
        country: 'Portugal',
        firstTry: 1
    },
    {
        city: 'Ottawa',
        country: 'Canada',
        firstTry: 1
    },
    {
        city: 'Vienna',
        country: 'Austria',
        firstTry: 1
    },
    {
        city: 'Bangkok',
        country: 'Thailand',
        firstTry: 1
    },
    {
        city: 'Harare',
        country: 'Zimbabwe',
        firstTry: 1
    },
    {
        city: 'London',
        country: 'United Kingdom',
        firstTry: 1
    },
    {
        city: 'Paris',
        country: 'France',
        firstTry: 1
    },
    {
        city: 'Damascus',
        country: 'Syria',
        firstTry: 1
    },
    {
        city: 'Beijing',
        country: 'China',
        firstTry: 1
    },
    {
        city: 'Alofi',
        country: 'Niue',
        firstTry: 1
    },
    {
        city: 'Madrid',
        country: 'Spain',
        firstTry: 1
    },
    {
        city: 'Rome',
        country: 'Italy',
        firstTry: 1
    },
    {
        city: 'Washington DC',
        country: 'United states',
        firstTry: 1
    },
    {
        city: 'Berlin',
        country: 'Germany',
        firstTry: 1
    },
    {
        city: 'Helsinki',
        country: 'Finland',
        firstTry: 1
    },
    {
        city: 'Manila',
        country: 'Phillipines',
        firstTry: 1
    },
    {
        city: 'Santiago',
        country: 'Chile',
        firstTry: 1
    },
    {
        city: 'Wellington',
        country: 'New Zealand',
        firstTry: 1
    },
    {
        city: 'Bern',
        country: 'Switzerland',
        firstTry: 1
    },
    {
        city: 'Islamabad',
        country: 'Pakistan',
        firstTry: 1
    },
    {
        city: 'Mexico City',
        country: 'Mexico',
        firstTry: 1
    },
    {
        city: 'Seoul',
        country: 'South Korea',
        firstTry: 1
    },
    {
        city: 'Phnom Penh',
        country: 'Cambodia',
        firstTry: 1
    },
    {
        city: 'Brasilia',
        country: 'Brazil',
        firstTry: 1
    },
    {
        city: 'Jakarta',
        country: 'Indonesia',
        firstTry: 1
    },
    {
        city: 'Moscow',
        country: 'Russia',
        firstTry: 1
    },
    {
        city: 'Singapore',
        country: 'Singapore',
        firstTry: 1
    },
    {
        city: 'Zagreb',
        country: 'Croatia',
        firstTry: 1
    }
]

let qNumber = 0;

const country = document.querySelector('.country');
const submit = document.querySelector('.submit');
const userInput = document.querySelector('.userInput');

let currentQuestion, question, answer;

/**
 * Placeholder imgs for each question
 */
const generateImgPlacholder = () => {
    const medalsEle = document.querySelector('.medals');
    for (let index = 0; index < questionArr.length; index++) {
        const medal = document.createElement('img');
        medal.src = `./assets/no-icon.png`;
        medal.setAttribute('id', `img_${index}`);
        medal.setAttribute('class', 'no-icon');
        medalsEle.appendChild(medal);
    }
    generateQuestion();
}

/**
 * Generate random question
 */
const generateQuestion = () => {
    let totalQuestions = questionArr.length;
    currentQuestion = Math.floor(Math.random() * totalQuestions);
    question = questionArr[currentQuestion].country;
    answer = questionArr[currentQuestion].city;
    country.innerHTML = question;
}

const correctAns = () => {
    let awardPath;

    switch (questionArr[currentQuestion].firstTry) {
        case 1:
            awardPath = 'gold.png';
            break;
        default:
            awardPath = 'silver.png';
            break;
    }

    displayMedal(awardPath);

}

const displayMedal = (awardPath) => {

    // remove from list
    questionArr.splice(currentQuestion, 1);

    const currentImg = document.querySelector(`#img_${qNumber}`);
    currentImg.src = `./assets/${awardPath}`;
    currentImg.classList.add('spin');
    qNumber += 1;
    generateQuestion();
}

submit.addEventListener('click', () => {
    if (!userInput.value.trim()) return;

    if (userInput.value.trim() === answer) {
        correctAns();
    } else {
        console.log('W')
    }

})


generateImgPlacholder();