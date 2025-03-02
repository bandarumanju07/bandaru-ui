export class Product {
  constructor(
    public productName: string,
    public productDescription: string,
    public productPrice: number,
    public productCategory: number,
    public productImage: string,
    public productQuantity: number,
    public productStatus: string,
    public productRating: number,
    public productReviews: string,
    public productDiscount: number
  ) {}
}
