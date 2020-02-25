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
      description:
        'Seconds book description, Seconds book description, Seconds book description',
    },
  ];

  getBooks = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 2700);
    });
  };
}
