export default class BookstoreService {

  getBooks() {
    return [
      {
        id: 1,
        title: 'You Dont Know JavaScript Yet: Get Started',
        author: 'Kyle Simpson',
      },
      {
        id: 2,
        title: 'YDKJS yet: Scope & Closures',
        author: 'Kyle Simpson',
      },
    ]
  }
}