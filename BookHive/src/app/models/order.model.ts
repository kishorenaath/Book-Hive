export interface Order {
    transactionId: number;
    customerId: number;
    bookId: number;
    orderDate: Date;
    deliveryAddress: string;
    status?: string;
  }