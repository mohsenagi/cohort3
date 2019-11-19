global.fetch = require('node-fetch');

import {City, Community} from './CityAndCommunity.js'
import fetchfunctions from './fetch.js'
import canada from './ca.json'

test("clear and Load", async () => {
    let data = await fetchfunctions.clear()
    let newCommunity = new Community;
    let highestKey = await fetchfunctions.load(newCommunity);
    expect(highestKey).toEqual(0)
});

test("addNew and Load", async () => {
    let Cities = JSON.parse(canada)
    console.log(Cities);
    
    let data = await fetchfunctions.addNew({
        "key": 1,
        "Name": "Yumai", 
        "Latitude": 28.6263, 
        "Longitude": 93.0751, 
        "Population": 28,
    });
    data = await fetchfunctions.addNew({
        "key": 2,
        "Name": "Bonito", 
        "Latitude": -21.1266, 
        "Longitude": -56.4841, 
        "Population": 210,
    });
    data = await fetchfunctions.addNew({
        "key": 3,
        "Name": "Sylvan Lake", 
        "Latitude": 52.3065, 
        "Longitude": -114.0973, 
        "Population": 15000,
    });
    data = await fetchfunctions.addNew({
        "key": 4,
        "Name": "South Brisbane", 
        "Latitude": -27.4766, 
        "Longitude": 153.0167, 
        "Population": 60000,
    });
    data = await fetchfunctions.addNew({
        "key": 5,
        "Name": "Calgary", 
        "Latitude": 51.0447, 
        "Longitude": -114.0719, 
        "Population": 1200000,
    });
    let newCommunity = new Community;
    let highestKey = await fetchfunctions.load(newCommunity);
    expect(highestKey).toEqual(5);
});
test ("Update", async () => {
    let data = await fetchfunctions.update({
        "key": 1,
        "Name": "Yumai", 
        "Latitude": 28, 
        "Longitude": 93, 
        "Population": 30,
    });
    let newCommunity = new Community;
    let highestKey = await fetchfunctions.load(newCommunity);
    expect(newCommunity.Cities.filter(itm => itm.key === 1)[0].Population).toEqual(30);
});
test ("delete", async() => {
    let data = await fetchfunctions.delete(1);
    let newCommunity = new Community;
    let highestKey = await fetchfunctions.load(newCommunity);
    expect(highestKey).toEqual(5);
    expect(newCommunity.Cities.length).toEqual(4);
});