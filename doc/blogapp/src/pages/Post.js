import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import apiCall from '../services/apiCall';
import LoadingIndicator from '../CommonComponents/LoadingIndicator';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import PostSummary from '../CommonComponents/PostSummary';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            hasError: true,
            post: {},
        };
    }

    componentDidMount() {
        this.setState({ loading: true, hasError: false });
        apiCall(`post/${this.props.match.params.id}`).then((post) => { this.setState({ post, loading: false, hasError: false }, () => { console.log(this.state.post) }); })
            .catch((error) => this.setState({ loading: false, hasError: true }));
        console.log(this.state.post);
    }

    render() {
        return (
            <div>
                <div className={`posts-container container`}>
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
                        <PostSummary key={this.state.post.id} post={this.state.post} />
                    }
                </div>
            </div>
        )
    }
}


export default withRouter(Post);