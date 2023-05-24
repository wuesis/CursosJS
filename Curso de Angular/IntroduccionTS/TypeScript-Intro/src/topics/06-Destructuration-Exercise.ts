interface Product {
    description: string,
    price: number
};

const phone: Product = {
    description: "Celular Moto G100",
    price: 5000
};

const ipad: Product = {
    description: "Ipad ultima generacion",
    price: 10000
};

const shopingCar: Product[] = [phone, ipad];

const tax = 0.15;

const result[] = (shopingCar: Product[]): number[] => {

    let total = 0;

    shopingCar.forEach( e => {
        total += e.price;
    });

    return [total, total *= tax];
}


export {}