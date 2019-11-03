import operations from './scripts/dom2.js';
import {City, Community} from './scripts/CityAndCommunity.js'
import fetchfunctions from './scripts/fetch.js'

display.textContent = "Please wait ..."
let newCommunity = new Community;
let counter
let highestKey = fetchfunctions.load(newCommunity);
highestKey.then(result => {
    counter = result+1;
    if (newCommunity.Cities.length >= 2) {
        operations.addExtra(leftSide);
    };
    for (let itm of newCommunity.Cities) {
        operations.addNew(leftSide, itm.Name, itm.Latitude, itm.Longitude);
    };
    if (newCommunity.Cities.length >= 1) {
        display.textContent = `Server data successfully loaded.\nThere are currently ${newCommunity.Cities.length} Cities.`
    } else{
        display.textContent = `Connected to the server.\nThere is no saved data to load, but you can start adding NOW.`
    }
    }
    , reject => display.textContent = `We are sorry!! something went wrong while loading saved data.\n${reject}`);

leftSide.addEventListener("click", async (event) => {
    if (event.toElement.className === "addNew") {
        let newCityName = input1.value;
        let newCityLatitude = Number(input2.value);
        let newCityLongitude = Number(input3.value);
        let newCityPopulation = Number(input4.value);
        if (newCityName !="" && newCityLatitude != "" && newCityLongitude != "" && newCityPopulation != "") {
            display.textContent = "Please wait ..."
            let message = newCommunity.addNewCity(counter, newCityName, newCityLatitude, newCityLongitude, newCityPopulation);
            if (message.includes("added")) {
                try {
                    let data = await fetchfunctions.addNew(newCommunity.Cities.filter((itm) => itm.key === counter)[0]);
                    operations.addNew(leftSide, newCityName, newCityLatitude, newCityLongitude);
                    input1.value = "";
                    input2.value = "";
                    input3.value = "";
                    input4.value = "";
                    input1.focus();
                    counter += 1;
                    if (newCommunity.Cities.length === 2) {
                        operations.addExtra(leftSide);
                    };
                } catch(error) {
                    message = `We are sorry!! something went wrong while saving data.\n${error}`
                    newCommunity.removeCity(counter);
                    console.log(newCommunity);
                }
            }
        display.textContent = message;
        };
    };
    if (event.toElement.className === "deposite") {
        let currentCity = event.toElement.parentElement;
        let amount = Number(currentCity.children[1].value);
        if (amount > 0) {
            display.textContent = "Please wait ..."
            let currentCityName = currentCity.children[0].children[0].textContent;
            let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
            let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
            let Index = newCommunity.Cities.findIndex((itm) => 
                itm.Name === currentCityName &&
                itm.Latitude === currentCityLatitude &&
                itm.Longitude === currentCityLongitude
            );
            newCommunity.Cities[Index].movedIn(amount);
            try {
                let data = await fetchfunctions.update(newCommunity.Cities[Index])
                currentCity.children[1].value = "";
                display.textContent = `${amount} people has moved in to ${newCommunity.Cities[Index].Name}.`;
            }catch(error){
                display.textContent = `We are sorry!! something went wrong while saving data.\n${error}`
                newCommunity.Cities[Index].movedOut(amount);
                console.log(newCommunity);
            }
        };
    };
    if (event.toElement.className === "withdraw") {
        let currentCity = event.toElement.parentElement;
        let amount = Number(currentCity.children[1].value);
        if (amount > 0) {
            display.textContent = "Please wait ..."
            let currentCityName = currentCity.children[0].children[0].textContent;
            let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
            let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
            let Index = newCommunity.Cities.findIndex((itm) => 
                itm.Name === currentCityName &&
                itm.Latitude === currentCityLatitude &&
                itm.Longitude === currentCityLongitude
            );
            newCommunity.Cities[Index].movedOut(amount);
            try{
                let data = await fetchfunctions.update(newCommunity.Cities[Index])
                currentCity.children[1].value = "";
                display.textContent = `${amount} people has moved out of ${newCommunity.Cities[Index].Name}.`;
            }catch(error){
                display.textContent = `We are sorry!! something went wrong while saving data.\n${error}`
                newCommunity.Cities[Index].movedIn(amount);
                console.log(newCommunity);
            }
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
        display.textContent = "Please wait ..."
        let currentCity = event.toElement.parentElement;
        let currentCityName = currentCity.children[0].children[0].textContent;
        let currentCityLatitude = Number(currentCity.children[0].children[1].textContent);
        let currentCityLongitude = Number(currentCity.children[0].children[2].textContent);
        let Index = newCommunity.Cities.findIndex((itm) => 
            itm.Name === currentCityName &&
            itm.Latitude === currentCityLatitude &&
            itm.Longitude === currentCityLongitude
        );
        let foundKey = newCommunity.Cities[Index].key;
        try {
            let data = await fetchfunctions.delete(foundKey)
            newCommunity.removeCity(foundKey);
            currentCity.children[1].value = "";
            display.textContent = `${currentCityName} has been removed.`;
            operations.delete(currentCity, leftSide);
            if (newCommunity.Cities.length === 1) {
                operations.deleteExtra(leftSide);
            };
        }catch(error){
            display.textContent = `We are sorry!! something went wrong while saving data.\n${error}`;
            console.log(newCommunity);
                       
        }
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
        display.textContent = `${currentCityName} is a ${message}.`
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
        display.textContent = `${currentCityName} is in ${message}.`
    };
    if (event.toElement.className === "MostNorthern") {
        let MostNorthern = newCommunity.getMostNorthern();
        display.textContent = `${MostNorthern.Name} is the most northern city with the latitude of ${MostNorthern.Latitude}.`
        };
    if (event.toElement.className === "MostSouthern") {
        let MostSouthern = newCommunity.getMostSouthern();
        display.textContent = `${MostSouthern.Name} is the most southern city with the latitude of ${MostSouthern.Latitude}.`
        };
    if (event.toElement.className === "totalPopulation") {
        let totalPopulation = newCommunity.getPopulation();
        display.textContent = `The total population of the community is ${totalPopulation}.`
        };  
});