import { faker } from '@faker-js/faker';
import * as dateFn from 'date-fns';
import countries from "i18n-iso-countries";

class PersonDynamicData {
    private static SEX = faker.person.sexType();
    private static uniqueID = dateFn.getUnixTime(new Date());
    public static getGender() {
        let GENDER: any
        console.log("SEX :", this.SEX)
        if (this.SEX === 'female') {
            GENDER = 'F'
        } else {
            GENDER = 'M';
        }
        return GENDER;
    }

    public static personProfileData() {
        let countryName = faker.location.country();
        return {
            guestProfileId: `PBX${this.uniqueID}`,
            visitorProfileId: `VIS${this.uniqueID}`,
            crewProfileId: `CRW${this.uniqueID}`,
            firstName: faker.person.firstName(this.SEX),
            middleName: faker.person.middleName(this.SEX),
            lastName: faker.person.lastName(this.SEX),
            country: countryName,
            countryISO3: countries.getAlpha3Code(countryName, "en"),
            countryISO2: countries.getAlpha2Code(countryName, "en"),
            // language: countries.getName("IN", "en"),
            language: countries.getAlpha2Code("India", "en"),
            dateOfBirth: dateFn.format(dateFn.subYears(new Date(), faker.datatype.number({ min: 18, max: 65 })), 'yyyy-MM-dd'),
            gender: this.getGender(),
            prefix: faker.person.prefix(this.SEX)
        }
    }

    public static personAddressData() {
        let countryName = faker.location.country();
        
        return {
            homeAddressId: `HID${this.uniqueID}`,
            emergencyAddressId: `EID${this.uniqueID}`,
            emergencyContactPerson: `${faker.name.firstName(this.SEX)} ${faker.name.lastName(this.SEX)}`,
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zip: faker.location.zipCode(),
            country: countryName,
            countryISO3: countries.getAlpha3Code(countryName, "en"),
            countryISO2: countries.getAlpha2Code(countryName, "en"),
            // language: countries.getName("IN", "en"),
        }
    }

    public static personCommuncationData() {
        let countryName = faker.location.country();
        return {
            email1: `email1${dateFn.getUnixTime(new Date())}@otalio.com`,
            email2: `email2${dateFn.getUnixTime(new Date())}@otalio.com`,
            phone1: faker.phone.number('+919#########'),
            phone2: faker.phone.number('+918#########'),
        }
    }
}

export default PersonDynamicData;