let book = {
  title: "I too had a love story",
  author: "Ravinder Singh",
  year: "2008",
  describe() {
    return `title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  },
};

console.log(book.describe());