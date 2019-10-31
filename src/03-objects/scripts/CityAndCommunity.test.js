import {City, Community} from './CityAndCommunity.js'

const Yumai = new City(1, "Yumai", 28, 93, 28)
const Bonito = new City(2, "Bonito", -21, -56.5, 210)
const SlvanLake = new City(3, "Sylvan Lake", 52, -114, 15000)
const SouthBrisbane = new City(4, "South Brisbane", -27, 153, 60000)
const Calgary = new City(5, "Calgary", 51, -114, 1200000)


test('show', () => {
    expect(Calgary.show()).toEqual("Name: Calgary, Latitude: 51, Longitude: -114, Population: 1200000");
});

test("movedIn", () => {
    Calgary.movedIn(100000);
    expect(Calgary.Population).toEqual(1300000);
});

test("movedOut", () => {
    SouthBrisbane.movedOut(500);
    expect(SouthBrisbane.Population).toEqual(59500);
});

test("howBig", () => {
    expect(Yumai.howBig()).toEqual("Hamlet");
    expect(Bonito.howBig()).toEqual("Village");
    expect(SlvanLake.howBig()).toEqual("Town");
    expect(SouthBrisbane.howBig()).toEqual("Large Town");
    expect(Calgary.howBig()).toEqual("City");
});

test('whichHemisphere', () => {
    expect(Bonito.whichHemisphere()).toEqual("Southern Hemisphere");
    expect(SlvanLake.whichHemisphere()).toEqual("Northern Hemisphere");
});

test('Community', () => {
    const newCommunity = new Community;
    newCommunity.addNewCity(1, "Yumai", 28, 93, 28);
    expect(newCommunity.Cities.length).toBe(1);
    newCommunity.addNewCity(2, "Yumai", 28, 93, 10000);
    expect(newCommunity.Cities.length).toBe(1);
    newCommunity.addNewCity(2, "Bonito", -21, -56.5, 210);
    newCommunity.addNewCity(3, "Sylvan Lake", 52, -114, 15000);
    newCommunity.addNewCity(4, "South Brisbane", -27, 153, 60000);
    newCommunity.addNewCity(5, "Calgary", 51, -114, 1200000);
    expect(newCommunity.Cities.length).toBe(5);
    expect(newCommunity.getPopulation()).toBe(1275238);
    expect(newCommunity.getMostSouthern().Name).toBe("South Brisbane")
    expect(newCommunity.getMostNorthern().Name).toBe("Sylvan Lake")
    newCommunity.removeCity("Sylvan Lake", 52, -114)
    expect(newCommunity.Cities.length).toBe(4);
    newCommunity.removeCity("Calgary", 51, 0)
    expect(newCommunity.Cities.length).toBe(4);
});