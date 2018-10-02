import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import apiCall from '../services/apiCall';
import LoadingIndicator from '../CommonComponents/LoadingIndicator';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import PostSummary from '../CommonComponents/PostSummary';

class Author extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            hasError: true,
            author: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true, hasError: false });
        apiCall(`author/${this.props.match.params.authorname}`).then((author) => { this.setState({author, loading: false, hasError: false }, () => { console.log("Author name and post "+this.state.author[0].id) }); })
            .catch((error) => this.setState({ loading: false, hasError: true }));
    }

    render() {
        return (
            <div>
                <div class="posts-container container">
                    {
                        this.state.loading ?
                            <LoadingIndicator />
                            :
                            null
                    }
                    {
                        this.state.hasError ?
                            <ErrorMessage title={`Error!`} message={`Unable to Fetch Results`} /> :
                            null
                    }
                    {
                        this.state.author.map(
                            post => <PostSummary key={post.id} post={post}/>
                        )
                    }
                </div>
            </div>
        )
    }



}

export default withRouter(Author);