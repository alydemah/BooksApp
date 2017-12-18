import React from 'react';
import BooksList from '/BooksList';
import { connect } from 'react-redux';

class BooksPage extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        return (
            <div>
                <h1>Books List</h1>
                
                <BooksListPage books={this.props.books} />    
                
            </div>

        );
    }

}




export default BooksPage;