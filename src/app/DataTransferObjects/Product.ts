export class Product {
  constructor(
    public id: number,
    public articleNumber: string,
    public name: string,
    public yearOfPublication: Date,
    public price: number
  ) {}
}
