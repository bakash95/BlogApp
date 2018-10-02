import React, { Component } from 'react';
import apiCall from '../services/apiCall';
import LoadingIndicator from '../CommonComponents/LoadingIndicator';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import AuthorDetails from '../CommonComponents/AuthorDetails';

export default class Authors extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            hasError: true,
            authors: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true, hasError: false });
        apiCall('authors').then((author) => { this.setState({ authors: author, loading: false, hasError: false }, () => { console.log(this.state.authors) }); })
            .catch((error) => this.setState({ loading: false, hasError: true }));
    } 
    render() {
        return (
            <div>
                <table className={`table table-striped`}>
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
                        this.state.authors.map(
                            authorName =>
                                <AuthorDetails authors={authorName}/>
                        )
                    }
                </table>
            </div>
        )
    }



}