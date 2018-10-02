import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import LoadingIndicator from '../CommonComponents/LoadingIndicator';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import PostSummary from '../CommonComponents/PostSummary';

import { connect } from 'react-redux';

class Author extends Component {
    render() {
        return (
            <div>
                <div className="posts-container container">
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
                        this.props.posts ?
                            this.props.posts.map(
                                (post) =>
                                    <PostSummary key={post.id} post={post} />
                            ) :
                            null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const authorName = decodeURI(ownProps.match.params.authorname);
    return {
        posts: state.posts.filter((post) => { if (post.author === authorName) return post; }),
        loading: state.ajaxCalls.getAllAuthors.loading,
        hasError: state.ajaxCalls.getAllAuthors.hasError
    }
}

export default withRouter(connect(mapStateToProps)(Author));