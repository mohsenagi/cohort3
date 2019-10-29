const functions = {
    getFirstName: (data) => {
        return data[0].name;
    },
    getAllFirstNames: (data) => {
        let array2 = data.map((itm) => itm.name);
        return array2;
    },
}

export default functions;