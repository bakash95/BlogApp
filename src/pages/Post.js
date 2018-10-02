import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import LoadingIndicator from '../CommonComponents/LoadingIndicator';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import PostSummary from '../CommonComponents/PostSummary';

import { connect } from 'react-redux';

class Post extends Component {
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
                        this.props.post ?
                            <PostSummary key={this.props.post.id} post={this.props.post} />
                            : null
                    }
                </div>
            </div>
        )
    }
}

//ownProps gets the properties of the wrapped component in this case the withRouter
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts.find((post) => post.id === ownProps.match.params.id),
        loading: state.ajaxCalls.getAllPosts.loading,
        hasError: state.ajaxCalls.getAllPosts.hasError
    }
}

export default withRouter(connect(mapStateToProps)(Post));