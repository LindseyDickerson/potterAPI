//const baseURL = 'https://www.potterapi.com/v1/sortingHat';

const showMe = document.querySelector('results');



//showMe.addEventListener('sort', sortHat);


//function sortHat(e) {
   //e.preventDefault();
    //console.log(e);
    //showMe.addEventListener('sort', sortHat);
    fetch('https://www.potterapi.com/v1/sortingHat')
    .then(result => {
        return result.json();
    })
    .then(json => {
        //console.log(json);
        displayHouse(json);
    })
    .catch(err => {
        console.log(err);
    })
//}

function displayHouse(data) {
    console.log(data);    

    let house = document.createElement('results');

    let gryffindor = src='/assets/gryffindor.jpg';
    let hufflepuff = src='/assets/hufflepuff.jpg';
    let ravenclaw =  src='/assets/ravenclaw.jpg';
    let slytherin = src='/assets/slytherin.jpg';

    if (data = 'gryffindor') {
        house.src = gryffindor;
    } else if (data = 'hufflepuff') {
        house.src = hufflepuff;
    } else if (data = 'ravenclaw') {
        house.src = ravenclaw;
    } else if (data = 'slytherin') {
        house.src = slytherin;
    }

    house.src = document.body.wrapper.results;

    showMe.appendChild(data);
}
displayHouse();

