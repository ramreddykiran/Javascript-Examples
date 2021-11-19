import Book from "./Book.js";

//Book parameter order: title, author,ISBN, pubYear,totalPages,currentPage,readStatus
const dataStructuresOfJava = new Book(
    "DataStructures using Java",
    "John R Hubbard",
    964872839742123,
    2013,
    1020,
    430,
    "In Progress"
    );

    const dataStructuresOfJavaContent = `
    <main>
        <article class="book">
            <figure class="book_image">
                <img src="./DATA-STRUCTURES-JAVA-SOS_102468.jpeg" alt="Data Structures Java" width="300px" height="400px">
            </figure>
            <h1 class="book_title">${dataStructuresOfJava.title}</h1>
            <ul class="book_details">
                <li class="book_author">author: <span>${dataStructuresOfJava.author}</span></li>
                <li class="book_isbn">ISBN: <span>${dataStructuresOfJava.ISBN}</span></li>
                <li class="book_pub_year">pubYear: <span>${dataStructuresOfJava.pubYear}</span></li>
                <li class="book_total_pages">totalPages: <span>${dataStructuresOfJava.totalPages}</span></li>
                <li class="book_current_page">currentPage: <span>${dataStructuresOfJava.currentPage}</span></li>
                <li class="book_read_status">readStatus:  <span>${dataStructuresOfJava.readStatus}</span></li>
            </ul>
        <article>
    </main> 
    `
    console.log('dataStructuresOfJava details ', dataStructuresOfJava);
    dataStructuresOfJava.updateCurrentPage(1019);
    console.log(`changed current page: ${dataStructuresOfJava.currentPage}`);
    dataStructuresOfJava.updateNewReadStatus("Completed");
    console.log(`changed read status: ${dataStructuresOfJava.readStatus}`);

    document.body.innerHTML = dataStructuresOfJavaContent;

