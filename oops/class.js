const { timers } = require("jquery");

class Mobile{
    constructor(brand,price,color){
        this.brand=brand;
        this.price=price;
        this.color=color;
    }
    getBrand(){
        return this.brand;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price=price;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=color;
    }
    printSpecification(){
        let spec=`BRAND:${this.getBrand()}
                  PRICE:${this.getPrice()}
                  COLOR:${this.getColor()}`;
                  console.log(spec);
    }
}
let mobile=new Mobile('Apple',35000,'silver');
mobile.printSpecification();
mobile.setPrice(45000);
mobile.printSpecification();