function symboltest(){
    const person = {
        firstName: "El Mokhtar",
        lastName: "Bensaid",
        age: 26,
        eyeColor: "Dark Brown"
    };

    let id = Symbol('id');
    person[id] = 140353;

    return person;
}