import {City, Community} from './CityAndCommunity.js';

let newCommunity = new Community;
newCommunity.addNewCity(1, "Yumai", 28, 93, 28);
newCommunity.addNewCity(2, "Yumai2", 28, 93, 10000);
newCommunity.addNewCity(2, "Bonito", -21, -56.5, 210);
newCommunity.addNewCity(3, "Sylvan Lake", 52, -114, 15000);
newCommunity.addNewCity(4, "South Brisbane", -27, 153, 60000);
newCommunity.addNewCity(5, "Calgary", 51, -114, 1200000);

test('Community', () => {
    expect(newCommunity.Cities.length).toBe(5);
    expect(newCommunity.getPopulation()).toBe(1275238);
    expect(newCommunity.getMostSouthern().Name).toBe("South Brisbane")
    expect(newCommunity.getMostNorthern().Name).toBe("Sylvan Lake")
    newCommunity.removeCity(3)
    expect(newCommunity.Cities.length).toBe(4);
    newCommunity.addNewCity(3, "Sylvan Lake", 52, -114, 15000);
});

test('show', () => {
    let Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Calgary");
    expect(newCommunity.Cities[Index].show()).toEqual("Name: Calgary\nLatitude: 51\nLongitude: -114\nPopulation: 1200000");
});

test("movedIn", () => {
    let Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Calgary");
    newCommunity.Cities[Index].movedIn(100000);
    expect(newCommunity.Cities[Index].Population).toEqual(1300000);
});

test("movedOut", () => {
    let Index = newCommunity.Cities.findIndex((itm) => itm.Name === "South Brisbane");
    newCommunity.Cities[Index].movedOut(500);
    expect(newCommunity.Cities[Index].Population).toEqual(59500);
});

test("howBig", () => {
    let Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Yumai");
    expect(newCommunity.Cities[Index].howBig()).toEqual("Hamlet");
    Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Bonito");
    expect(newCommunity.Cities[Index].howBig()).toEqual("Village");
    Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Sylvan Lake");
    expect(newCommunity.Cities[Index].howBig()).toEqual("Town");
    Index = newCommunity.Cities.findIndex((itm) => itm.Name === "South Brisbane");
    expect(newCommunity.Cities[Index].howBig()).toEqual("Large Town");
    Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Calgary");
    expect(newCommunity.Cities[Index].howBig()).toEqual("City");
});

test('whichHemisphere', () => {
    let Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Bonito");
    expect(newCommunity.Cities[Index].whichHemisphere()).toEqual("Southern Hemisphere");
    Index = newCommunity.Cities.findIndex((itm) => itm.Name === "Sylvan Lake");
    expect(newCommunity.Cities[Index].whichHemisphere()).toEqual("Northern Hemisphere");
});