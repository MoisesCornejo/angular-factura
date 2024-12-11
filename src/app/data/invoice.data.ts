import {Invoice} from '../models/invoice';

// indicamos que los datos son de tipo invoice!
export const invoiceData: Invoice = {
  id:1,
  name: 'Componentes de pc',
  client: {
    name: 'Moises',
    lastname: 'Doe',
    address: {
      country: 'USA',
      city: 'Los Angeles',
      street: 'One Street',
      number: 15,
    },
  },
  company: {
    name:'New Age',
    fiscalNumber: 3221454,
  },
  items: [
    {
      id: 1,
      product: 'CPU intel I9',
      price: 599,
      quantity: 1,
    },
    {
      id: 2,
      product: 'Corsair Teclado 80%',
      price: 399,
      quantity: 2,
    },
    {
      id: 3,
      product: 'Monitor Asus',
      price: 699,
      quantity: 3,
    }
  ]
}
