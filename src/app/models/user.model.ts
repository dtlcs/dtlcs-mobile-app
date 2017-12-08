export class User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    nic: string;
    roleId: number;
    email: string;
    telephone: string;
    street: string;
    city: string;
    province: string;
    postalCode: string;

    constructor(id: number, firstName: string, middleName: string, lastName: string, nic: string, roleId: number,
        email: string, telephone: string, street: string, city: string, province: string, postalCode: string) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.nic = nic;
        this.roleId = roleId;
        this.email = email;
        this.telephone = telephone;
        this.street = street;
        this.city = city;
        this.province = province;
        this.postalCode = postalCode;
    }
}

