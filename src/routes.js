const {addBooksHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByIdHandler, deleteBooksByIdHandler} = require("./handler");

const routes = [
    // menyimpan buku
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    //menampilkan seluruh buku
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    //menampilkan detail buku dengan Id
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksByIdHandler,
    },
    //mengubah data buku
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksByIdHandler,
    },
    //menghapus buku
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksByIdHandler,
    }
];

module.exports = routes;