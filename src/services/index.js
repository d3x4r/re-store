export default class BookstoreServive {
  data = [
    {
      id: 1,
      title: 'First Book',
      author: 'First Book author',
      price: 15,
      description: 'First book description, First book description',
    },
    {
      id: 2,
      title: 'Second Book',
      author: 'Seconds Book author',
      price: 12,
      description: 'Seconds book description, Seconds book description, Seconds book description',
    },
    {
      id: 3,
      title: 'Third Book',
      author: 'Third Book author',
      price: 31,
      description: 'Third book description, Third book description, Third book description',
    },
    {
      id: 4,
      title: 'Fourth Book',
      author: 'Fourth Book author',
      price: 20,
      description: 'Fourth book description, Fourth book description, Fourth book description',
    },
  ];

  getBooks = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 700);
    });
  };
}
