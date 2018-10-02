import React, { Component } from 'react';
import apiCall from '../services/apiCall';
import PostInputField from '../component/PostInputField';
import LoadingIndicator from '../CommonComponents/LoadingIndicator';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import SuccessMessage from '../CommonComponents/SuccessMessage';

export default class NewPostForm extends Component {
    constructor() {
        super();
        this.state = {
            author: '',
            title: '',
            content: '',
            loading: false,
            success: false,
            hasError: false,
        };
    }
    handleSubmit = (event) => {
        this.setState({ loading: true });

        const date = new Date();
        const epoch = (date.getTime() / 1000).toFixed(0).toString();
        const body = {
            id: date.getTime().toString(),
            author: this.state.author,
            title: this.state.title,
            content: this.state.content,
            datetime: epoch,
        };

        apiCall(`post`, 'POST', body)
            .then(() => {
                this.setState({
                    author: '',
                    title: '',
                    content: '',
                    noOfLines: 0,
                    loading: false,
                    success: true,
                });
            })
            .catch(error => {
                this.setState({ hasError: true, loading: false });
                console.error(error);
            });

        event.preventDefault();
    }

    editAuthorName = (event) => {
        this.setState({ author: event.target.value });
    }

    editContent = (event) => {
        const linesArray = event.target.value.split('\n');
        this.setState({ content: event.target.value, noOfLines: linesArray.length });
    }

    editTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <PostInputField
                    className={'author-name-input'}
                    id={'author'}
                    title={'Author Name:'}
                    value={this.state.author}
                    onChange={this.editAuthorName}
                />

                <PostInputField
                    className={'title-input'}
                    id={'title'}
                    title={'Title:'}
                    value={this.state.title}
                    onChange={this.editTitle}
                />
                    <h6>Post</h6>
                <textarea className="form-control" rows={5} id="content" value={this.state.content} onChange={this.editContent}></textarea>
                {
                    this.state.loading
                        ?
                        <LoadingIndicator />
                        :
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit Post</button>
                }

                {
                    this.state.hasError
                        ?
                        <ErrorMessage title={'Error!'} message={`Unable to submit post!`} />
                        :
                        null
                }

                {
                    this.state.success
                        ?
                        <SuccessMessage title={'Success!'} message={`Post has been Submitted!`} />
                        :
                        null
                }
            </form>
        )
    }
}