import {City} from './CityAndCommunity.js'
const url = 'http://localhost:5000/';

const fetchfunctions = {
    async postData(url = '', data = {}) {
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
        const json = await response.json();    // parses JSON response into native JavaScript objects
        // console.log(response.status)
        // console.log(response.statusText)
        // console.log(response);
        // console.log(json);        
        return json;
    },

    async load(newCommunity) {
        let data = await this.postData(url + 'all');
        if (data.length !== 0) {
            newCommunity.Cities = data.map(itm => new City(itm.key, itm.Name, itm.Latitude, itm.Longitude, itm.Population))
            let keysArray = newCommunity.Cities.map(itm => itm.key)
            keysArray.sort((a, b) => b-a);
            let highestKey = keysArray[0];
            return highestKey
        }
        let highestKey = 0
        return highestKey
    },

    async clear() {
        await this.postData(url + 'clear');
    },

    async addNew(newCity) {
        await this.postData(url + 'add', newCity);
    },

    async update(currentCity) {
        await this.postData(url + 'update', currentCity);
    },

    async delete(foundKey) {
        await this.postData(url + 'delete', {key: foundKey});
    }

}

export default fetchfunctions;