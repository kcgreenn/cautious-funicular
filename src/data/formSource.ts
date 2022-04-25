export interface IUserInputs {
   // photo: File | null;
   username: string;
   firstAndLast: string;
   email: string;
   phone: string;
   password: string;
   address: string;
   country: string;
}

export const userInputs: IUserInputs = {
   // photo: null,
   username: '',
   firstAndLast: '',
   email: '',
   phone: '',
   password: '',
   address: '',
   country: '',
};

export interface IProductInputs {
   // photo: File | null;
   title: string;
   description: string;
   category: string;
   price: string;
   stock: string;
}

export const productInputs: IProductInputs = {
   // photo: null,
   title: '',
   description: '',
   category: '',
   price: '',
   stock: '',
};

// export const userInputs: Array<Input> = [
//    {
//       id: 1,
//       label: 'Username',
//       type: 'text',
//       placeholder: 'john_doe',
//    },
//    {
//       id: 2,
//       label: 'First and Last Name',
//       type: 'text',
//       placeholder: 'John Doe',
//    },
//    {
//       id: 3,
//       label: 'Email',
//       type: 'mail',
//       placeholder: 'john_doe@gmail.com',
//    },
//    {
//       id: 4,
//       label: 'Phone',
//       type: 'text',
//       placeholder: '+1 234 567 89',
//    },
//    {
//       id: 5,
//       label: 'Password',
//       type: 'password',
//    },
//    {
//       id: 6,
//       label: 'Address',
//       type: 'text',
//       placeholder: 'Elton St. 216 NewYork',
//    },
//    {
//       id: 7,
//       label: 'Country',
//       type: 'text',
//       placeholder: 'USA',
//    },
// ];

// export const productInputs: Array<Input> = [
//    {
//       id: 1,
//       label: 'Title',
//       type: 'text',
//       placeholder: 'Apple Macbook Pro',
//    },
//    {
//       id: 2,
//       label: 'Description',
//       type: 'text',
//       placeholder: 'Description',
//    },
//    {
//       id: 3,
//       label: 'Category',
//       type: 'text',
//       placeholder: 'Computers',
//    },
//    {
//       id: 4,
//       label: 'Price',
//       type: 'text',
//       placeholder: '100',
//    },
//    {
//       id: 5,
//       label: 'Stock',
//       type: 'text',
//       placeholder: 'in stock',
//    },
// ];
