import React, { Component } from 'react';
import LoadingIndicator from '../../CommonComponents/LoadingIndicator';
import ErrorMessage from '../../CommonComponents/ErrorMessage';
import PostSummary from '../../CommonComponents/PostSummary';

import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div>
                <div className={`posts-container container`}>
                    {
                        this.props.loading ?
                            <LoadingIndicator />
                            :
                            null
                    }
                    {
                        this.props.hasError ?
                            <ErrorMessage title={`Error!`} message={`Unable to Fetch Results`} /> :
                            null
                    }
                    {
                        this.props.posts.map(
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
    return {
        posts: state.posts,
        loading: state.ajaxCalls.getAllPosts.loading,
        hasError: state.ajaxCalls.getAllPosts.hasError,
    };
}

//its optional
const mapDispatchToProps = () => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);