import React, { Component } from 'react';
import apiCall from '../../services/apiCall';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorMessage from '../../CommonComponents/ErrorMessage';
import PostSummary from '../../CommonComponents/PostSummary';

import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            hasError: true,
            posts: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true, hasError: false });
        apiCall('posts').then((post) => { this.setState({ posts: post, loading: false, hasError: false }, () => { console.log(this.state.posts) }); })
            .catch((error) => this.setState({ loading: false, hasError: true }));
        console.log(this.state.posts);
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
                        this.state.posts.map(
                            post =>
                                <PostSummary key={post.id} post={post}>Post</PostSummary>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
   console.log(state);
}

//its optional
const mapDispatchToProps = () => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);