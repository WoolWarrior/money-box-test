export type Product = {
    name: string;
    description: string;
    icon: string;
}

export type Category = {
    name: string;
    products: Product[];
}