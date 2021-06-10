const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

class User {
    constructor(){
        this.id = faker.id.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.id = faker.id.number();
        this.firstName = faker.name.firstName();
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get('/', (req, res) =>{
    const user = new User();
    const company = new Company();
    res.json({user: user, company: company})
})

app.listen(port, () => console.log(`Listening on port ${port}!`))