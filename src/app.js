/**
 * Created by santosh on 2/24/17.
 */
let firstName = "Affixus ";
let middleName = "Systems ";
let lastName = " Pvt Ltd ";


console.log(firstName + " ::::: " + middleName + " :: " + lastName);



class Hello{
    constructor(height , width){
        this.height = height;
        this.widht = width;
    }

    area() {
        return this.height * this.widht;
    }
}


let refobj = new Hello(23, 44);
console.log( "AREA :: " + refobj.area());
