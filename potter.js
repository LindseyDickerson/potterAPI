//const baseURL = 'https://www.potterapi.com/v1/sortingHat';

const showMe = document.querySelector('.results');
//const sortingHat = document.querySelector('sort');

//sortingHat.addEventListener('submit', sortHat);

//showMe.addEventListener('sort', sortHat);
//function sortHat(e) {
   //e.preventDefault();
    
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

    let house = document.createElement('img');
    
    let gryffindorPic = './assets/gryffindor.jpg';
    let hufflepuffPic = './assets/hufflepuff.jpg';
    let ravenclawPic =  './assets/ravenclaw.jpg';
    let slytherinPic = './assets/slytherin.jpg';


    if (data == 'Gryffindor') {
        house.src = gryffindorPic;
        console.log('It\'s a lion');
    } else if (data == 'Hufflepuff') {
        house.src = hufflepuffPic;
        console.log('Get that badger')
    } else if (data == 'Ravenclaw') {
        house.src = ravenclawPic;
        console.log('Catch the raven')
    } else if (data == 'Slytherin') {
        house.src = slytherinPic;
        console.log('Slithering snake')
    }
    console.log(house);
    house.style.height = '300px';
    house.style.width = '250px';

    
    showMe.appendChild(house);   
}

