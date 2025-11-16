import { Component } from '@angular/core';
import { Book } from '../book';
import { BookList } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [BookList, BookForm, CommonModule, FormsModule],
  templateUrl: './book-container.html',
  styleUrls: ['./book-container.css']
})
export class BookContainer {
  books: Book[] = [
    {
      id: 1,
      title: 'après la pluie le beau temps',
      author: 'comtesse de Ségur',
      publisherEmail: 'publisher@example.com',
      publisherPhone: '12345678',
      releaseDate: '1871-01-01',
      category: 'Roman',
      isAvailable: true,
      stock: 10
    },
  ];

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];
  selectedBook: Book | null = null;
  search: string = '';
  filterOption: string = '';

  get filteredBooks() {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  get sortedBooks() {
    let list = [...this.filteredBooks];
        if (this.filterOption && this.filterOption !== 'available') {
      list = list.filter(book => book.category === this.filterOption);
    }
    if (this.filterOption === 'available') {
      list = list.filter(book => book.isAvailable);
    }

    return list;
  }

  addBook(book: Book) {
    book.id = this.books.length + 1;
    this.books.push({ ...book });
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }

  editBook(book: Book) {
    this.selectedBook = { ...book };
  }

  updateBook(updated: Book) {
    const index = this.books.findIndex(b => b.id === updated.id);
    if (index !== -1) this.books[index] = updated;
    this.selectedBook = null;
  }
}
