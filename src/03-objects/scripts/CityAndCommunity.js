class City {
    constructor (Key, Name, Latitude, Longitude, Population) {
        this.key = Key
        this.Name = Name;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.Population = Population;
    }
    show() {
        return `Name: ${this.Name}, Latitude: ${this.Latitude}, Longitude: ${this.Longitude}, Population: ${this.Population}`;
    }
    movedIn(num) {
        this.Population += num;
    }
    movedOut(num) {
        this.Population -= num;
    }
    howBig() {
        if (this.Population <= 100) return "Hamlet";
        if (this.Population < 1000) return "Village";
        if (this.Population <= 20000) return "Town";
        if (this.Population <= 100000) return "Large Town";
        if (this.Population > 100000) return "City";
    };
    whichHemisphere () {
        if (this.Latitude <=0) return "Southern Hemisphere";
        if (this.Latitude >0) return "Northern Hemisphere";
    }
}

class Community {
    constructor () {
        this.Cities = [];
    }
    addNewCity (Key, Name, Latitude, Longitude, Population) {
        let message;
        if (this.Cities.filter((itm) => (itm.Name === Name && itm.Latitude === Latitude && itm.Longitude === Longitude)).length === 0) {
            let newCity = new City (Key, Name, Latitude, Longitude, Population);
            this.Cities.push(newCity);
            message = `The new City (name: ${Name}) has been added`
        } else {
            message = `This City already exists, please input a different City`
        }
        return message;
    }
    removeCity (Name, Latitude, Longitude) {
        this.Cities = this.Cities.filter((itm) => (itm.Name != Name || itm.Latitude != Latitude || itm.Longitude != Longitude));
    }
    getPopulation () {
        return this.Cities.reduce((acc, itm) => itm.Population+acc, 0);
    }
    getMostNorthern() {
        this.Cities.sort((a, b) => b.Latitude-a.Latitude);
        return this.Cities[0];
    }
    getMostSouthern() {
        this.Cities.sort((a, b) => a.Latitude-b.Latitude);
        return this.Cities[0];
    }
}

export {City, Community};