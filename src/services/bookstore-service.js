export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'You Dont Know JavaScript Yet: Get Started',
      author: 'Kyle Simpson',
      price: 18.95,
      coverImage: 'https://d2sofvawe08yqg.cloudfront.net/ydkjsy-get-started/hero?1580587360',
    },
    {
      id: 2,
      title: 'YDKJS yet: Scope & Closures',
      author: 'Kyle Simpson',
      price: 23.95,
      coverImage: 'https://d2sofvawe08yqg.cloudfront.net/ydkjsy-scope-closures/hero?1583299851'
    },
  ]

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}