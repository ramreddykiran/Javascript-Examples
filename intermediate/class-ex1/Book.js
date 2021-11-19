class Book{
    constructor (
    title,
    author,
    ISBN,
    pubYear,
    totalPages,
    currentPage,
    readStatus
) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.pubYear = pubYear;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
}
updateCurrentPage(newPage) {
    this.currentPage = newPage;
}
updateNewReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
}
}

export default Book;