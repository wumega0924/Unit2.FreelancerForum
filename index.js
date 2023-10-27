let freelancerModel = {
    name: 'Alice',
    occupation: 'Writer', 
    price: '$30', 
}

let freelancers = [
    {
        name: 'Alice',
        occupation: 'Writer',
        price: '$30',
    },
    {
        name: 'Bob',
        occupation: 'Teacher',
        price: '$50',
    },
    {
        name: 'Carol',
        occupation: 'Programmer',
        price: '$70',
    }
]


function generateRandomFreelancer() {
    let names = ['Steven', 'Adam', 'Lucy', 'Henry'];
    let occupations = ['Designer', 'Chef', 'Artist', 'Consultant'];
    let prices = ['$40', '$60', '$45', '$55'];

    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    let randomPrice = prices[Math.floor(Math.random() * prices.length)];

    let newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        price: randomPrice,
    };

    freelancers.push(newFreelancer); 
}

setInterval(function() {
    generateRandomFreelancer();
    renderFreelancers();
}, 5000);

function calculateAverageStartingPrice() {
    let total = 0;
    for (let i = 0; i < freelancers.length; i++) {
        const price = parseFloat(freelancers[i].price.replace('$', ''));
        total += price;
    }
    const averagePrice = total / freelancers.length;
    return averagePrice;
}

function updateAveragePriceMessage() {
    const averagePrice = calculateAverageStartingPrice();
    const messageElement = document.getElementById('average-price-message');
    messageElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}



function renderFreelancers() {
    let Freelancerforum  = document.getElementById('Freelancer-forum')
    for (let i = 0; i < freelancers.length; i++) {
        let currentFreelancers = freelancers[i]

        let FreelancersDiv = document.createElement('div')

        FreelancersDiv.className = 'freelancers'

        FreelancersDiv.innerHTML = `<h1>${currentFreelancers.name}</h1>
                                   <h3>Occupation: ${currentFreelancers.occupation}</h3>
                                   <h3>Starting Price: ${currentFreelancers.price}</h3>`

        Freelancerforum.appendChild(FreelancersDiv)
    }
}
generateRandomFreelancer();
updateAveragePriceMessage();
renderFreelancers();

