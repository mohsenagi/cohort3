import operations from './scripts/dom2.js';
import {City, Community} from './scripts/CityAndCommunity.js'

// const Yumai = new City(1, "Yumai", 28, 93, 28)
// const Bonito = new City(2, "Bonito", -21, -56.5, 210)
// const SlvanLake = new City(3, "Sylvan Lake", 52, -114, 15000)
// const SouthBrisbane = new City(4, "South Brisbane", -27, 153, 60000)
// const Calgary = new City(5, "Calgary", 51, -114, 1200000)

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });
    // console.log(response.status)
    // console.log(response.statusText)
    const json = await response.json();    // parses JSON response into native JavaScript objects
    return json;
}
async function load() {
    let data = await postData(url + 'all');
    if (data.length != 0) {
        newCommunity.Cities = data.map(itm => new City(itm.key, itm.Name, itm.Latitude, itm.Longitude, itm.Population))
        let keysArray = newCommunity.Cities.map(itm => itm.key)
        keysArray.sort((a, b) => b-a);
        let highestKey = keysArray[0];
        if (newCommunity.Cities.length >= 2) {
            operations.addExtra(leftSide);
        };
        for (let itm of newCommunity.Cities) {
            operations.addNew(leftSide, itm.Name, itm.Latitude, itm.Longitude);
        };
        return highestKey
    }
    let highestKey = 0
    return highestKey
}

const url = 'http://localhost:5000/';
let newCommunity = new Community;
let counter
let highestKey = load();
highestKey.then(result => {
    counter = result+1
    console.log(counter)
})
leftSide.addEventListener("click", async (event) => {

    if (event.toElement.className === "addNew") {
        let newCityName = input1.value;
        let newCityLatitude = Number(input2.value);
        let newCityLongitude = Number(input3.value);
        let newCityPopulation = Number(input4.value);
        if (newCityName !="" && newCityLatitude != "" && newCityLongitude != "" && newCityPopulation != "") {
            let message = newCommunity.addNewCity(counter, newCityName, newCityLatitude, newCityLongitude, newCityPopulation);
            let data = await postData(url + 'add', newCommunity.Cities.filter((itm) => itm.key === counter)[0]);
            counter += 1;
            operations.addNew(leftSide, newCityName, newCityLatitude, newCityLongitude);
            input1.value = "";
            input2.value = "";
            input3.value = "";
            input4.value = "";
            display.textContent = message;
            input1.focus();
            if (newCommunity.Cities.length === 2) {
                operations.addExtra(leftSide);
            };
        };
    };
    if (event.toElement.className === "deposite") {
        let currentCity = event.toElement.parentElement;
        let amount = Number(currentCity.children[1].value);
        if (amount > 0) {
            let currentCityName = currentCity.children[0].children[0].textContent;
            let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
            let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
            let Index = newCommunity.Cities.findIndex((itm) => 
                itm.Name === currentCityName &&
                itm.Latitude === currentCityLatitude &&
                itm.Longitude === currentCityLongitude
            );
            newCommunity.Cities[Index].movedIn(amount);
            let data = await postData(url + 'update', newCommunity.Cities[Index]);
            currentCity.children[1].value = "";
            display.textContent = `${amount} people has moved in to ${newCommunity.Cities[Index].Name}`;
        };
    };
    if (event.toElement.className === "withdraw") {
        let currentCity = event.toElement.parentElement;
        let amount = Number(currentCity.children[1].value);
        if (amount > 0) {
            let currentCityName = currentCity.children[0].children[0].textContent;
            let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
            let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
            let Index = newCommunity.Cities.findIndex((itm) => 
                itm.Name === currentCityName &&
                itm.Latitude === currentCityLatitude &&
                itm.Longitude === currentCityLongitude
            );
            newCommunity.Cities[Index].movedOut(amount);
            let data = await postData(url + 'update', newCommunity.Cities[Index]);
            currentCity.children[1].value = "";
            display.textContent = `${amount} people has moved out of ${newCommunity.Cities[Index].Name}`;
        };
    };
    if (event.toElement.className === "balance") {
        let currentCity = event.toElement.parentElement;
        let currentCityName = currentCity.children[0].children[0].textContent;
        let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
        let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
        let Index = newCommunity.Cities.findIndex((itm) => 
            itm.Name === currentCityName &&
            itm.Latitude === currentCityLatitude &&
            itm.Longitude === currentCityLongitude
        );
        let message = newCommunity.Cities[Index].show();
        currentCity.children[1].value = "";
        display.textContent = message;
    };
    if (event.toElement.className === "delete") {
        let currentCity = event.toElement.parentElement;
        let currentCityName = currentCity.children[0].children[0].textContent;
        let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
        let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
        let Index = newCommunity.Cities.findIndex((itm) => 
            itm.Name === currentCityName &&
            itm.Latitude === currentCityLatitude &&
            itm.Longitude === currentCityLongitude
        );
        let data = await postData(url + 'delete', {key: newCommunity.Cities[Index].key});
        newCommunity.removeCity(currentCityName, currentCityLatitude, currentCityLongitude);
        currentCity.children[1].value = "";
        display.textContent = `${currentCityName} has been removed`;
        operations.delete(currentCity, leftSide);
        if (newCommunity.Cities.length === 1) {
            operations.deleteExtra(leftSide);
        };
    };
    if (event.toElement.className === "howBig") {
        let currentCity = event.toElement.parentElement;
        let currentCityName = currentCity.children[0].children[0].textContent;
        let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
        let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
        let Index = newCommunity.Cities.findIndex((itm) => 
            itm.Name === currentCityName &&
            itm.Latitude === currentCityLatitude &&
            itm.Longitude === currentCityLongitude
        );
        let message = newCommunity.Cities[Index].howBig();
        display.textContent = `${currentCityName} is a ${message}`
    };
    if (event.toElement.className === "which") {
        let currentCity = event.toElement.parentElement;
        let currentCityName = currentCity.children[0].children[0].textContent;
        let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
        let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
        let Index = newCommunity.Cities.findIndex((itm) => 
            itm.Name === currentCityName &&
            itm.Latitude === currentCityLatitude &&
            itm.Longitude === currentCityLongitude
        );
        let message = newCommunity.Cities[Index].whichHemisphere();
        display.textContent = `${currentCityName} is in ${message}`
    };
    if (event.toElement.className === "MostNorthern") {
        let MostNorthern = newCommunity.getMostNorthern();
        display.textContent = `${MostNorthern.Name} is the most northern city with the latitude of ${MostNorthern.Latitude}`
        };
    if (event.toElement.className === "MostSouthern") {
        let MostSouthern = newCommunity.getMostSouthern();
        display.textContent = `${MostSouthern.Name} is the most southern city with the latitude of ${MostSouthern.Latitude}`
        };
    if (event.toElement.className === "totalPopulation") {
        let totalPopulation = newCommunity.getPopulation();
        display.textContent = `The total population of the community is ${totalPopulation}`
        };  
    // let data = await postData(url + 'add', Yumai);
    // data = await postData(url + 'add', Bonito);
    // data = await postData(url + 'add', SlvanLake);
    // data = await postData(url + 'add', SouthBrisbane);
    // data = await postData(url + 'add', Calgary);
});