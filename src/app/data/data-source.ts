export class DataSource {
  static getBookList() {
    return [
      {
        id: 10,
        title: 'All The Young Men',
        description: null,
        isbn: 'B085MMH732',
        rating: 4.9,
        rentalCost: 8000.0,
        replacementCost: 100000.0,
        publicationYear: 2020,
        language: {
          id: 2,
          code: 'EN',
          name: 'English',
        },
        publisher: {
          id: 3,
          code: 'GP',
          name: 'Grove Press',
          city: 'New York',
        },
      },
      {
        id: 9,
        title: 'A Promised Land',
        description: null,
        isbn: '9780241491515',
        rating: 4.9,
        rentalCost: 17000.0,
        replacementCost: 200000.0,
        publicationYear: 2020,
        language: {
          id: 2,
          code: 'EN',
          name: 'English',
        },
        publisher: {
          id: 2,
          code: 'CRWN',
          name: 'Crown Publishing Group',
          city: 'New York',
        },
      },
    ];
  }

  static getBookById() {
    return this.getBookList()[0];
  }

  static getCustomerList() {
    return [
      {
        id: 5,
        profile: {
          id: 9,
          fullName: 'Jojon Ferdinand',
          email: 'jojon@gmail.com',
          phone: '0812731212338',
          address: 'Sesame St.',
        },
        createdDate: '2020-12-28 18:12:55',
      },
      {
        id: 6,
        profile: {
          id: 2,
          fullName: 'Mark Henstein',
          email: 'henstein@gmail.com',
          phone: '0821731238',
          address: 'New York',
        },
        createdDate: '2020-12-28 18:12:55',
      },
    ];
  }

  static getCustomerById() {
    return this.getCustomerList()[0];
  }

  static getTransactionList() {
    return [
      {
        id: 13,
        receiptNumber: 'TRX1609153975820',
        rentalDate: '2020-12-28 18:12:55',
        customer: {
          id: 5,
          fullName: 'Jojon Ferdinand',
          email: 'jojon@gmail.com',
          phone: '0812731212338',
          address: 'Sesame St.',
        },
        user: {
          id: 1,
          username: 'admin',
          role: {
            id: 1,
            code: 'ADM',
            name: 'Administrator',
          },
        },
      },
    ];
  }

  static getTransactionDetail() {
    return {
      id: 13,
      receiptNumber: 'TRX1609153975820',
      detailItems: [
        {
          book: {
            title: 'A Promised Land',
            isbn: '9780241491515',
          },
          rentalDate: '2020-12-28 18:12:55',
          returnDate: '2021-01-04 18:12:55',
        },
        {
          book: {
            title: 'All The Young Men',
            isbn: 'B085MMH732',
          },
          rentalDate: '2020-12-28 18:12:55',
          returnDate: '2021-01-11 18:12:55',
        },
      ],
      customer: {
        id: 5,
        fullName: 'Jojon Ferdinand',
        email: 'jojon@gmail.com',
        phone: '0812731212338',
        address: 'Sesame St.',
      },
      user: {
        id: 1,
        username: 'admin',
        role: {
          id: 1,
          code: 'ADM',
          name: 'Administrator',
        },
      },
    };
  }

  static getLanguageList() {
    return [
      {
        id: 1,
        code: 'EN_UK',
        name: 'English UK',
      },
      {
        id: 2,
        code: 'EN_US',
        name: 'English US',
      },
      {
        id: 3,
        code: 'ID',
        name: 'Indonesian',
      },
    ];
  }

  static getPublisherList() {
    return [
      {
        id: 2,
        code: 'CRWN',
        name: 'Crown Publishing Group',
        city: 'New York',
      },
      {
        id: 3,
        code: 'GP',
        name: 'Grove Press',
        city: 'New York',
      },
    ];
  }

  static getCategoryList() {
    return [
      {
        id: 2,
        name: 'Biography',
      },
      {
        id: 3,
        name: 'Novel',
      },
      {
        id: 4,
        name: 'Fiction',
      },
      {
        id: 5,
        name: 'History',
      },
    ];
  }

  static getRoleList() {
    return [
      {
        id: 1,
        code: 'ADM',
        name: 'Administrator',
      },
      {
        id: 2,
        code: 'CSHR',
        name: 'Cashier',
      },
    ];
  }

  static getRoleById() {
    return this.getRoleList()[0];
  }

  static getUserList() {
    return [
      {
        id: 1,
        username: 'admin',
        profile: {
          id: 1,
          fullName: 'Bob Code',
          email: 'bobcode@gmail.com',
          phone: '08111231232',
          address: 'California',
        },
        role: {
          id: 1,
          code: 'ADM',
          name: 'Administrator',
        },
      },
      {
        id: 2,
        username: 'cashier',
        profile: {
          id: 2,
          fullName: 'Mark Henstein',
          email: 'henstein@gmail.com',
          phone: '0821731238',
          address: 'New York',
        },
        role: {
          id: 2,
          code: 'CSHR',
          name: 'Cashier',
        },
      },
    ];
  }

  static getUserById() {
    return this.getUserList()[0];
  }
}
