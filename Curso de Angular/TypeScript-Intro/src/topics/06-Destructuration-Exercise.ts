interface Product {
    description: string,
    price: number,
};

const phone: Product = {
    description: "Celular Moto G100",
    price: 5000,
};

const ipad: Product = {
    description: "Ipad ultima generacion",
    price: 10000
};

interface TaxCalculation {
    products: Product[],
    tax: number
}

function taxCalculation(TaxElements: TaxCalculationElements): [number, number] {

    const { products, tax } = TaxElements;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total *= tax];
}

const [total, totalWithTax] = taxCalculation({
    products: [phone, ipad],
    tax: 0.15
});

export { total, totalWithTax }