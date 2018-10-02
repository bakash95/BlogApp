import React, { Component } from 'react';
import LoadingIndicator from '../CommonComponents/LoadingIndicator';
import ErrorMessage from '../CommonComponents/ErrorMessage';
import AuthorDetails from '../CommonComponents/AuthorDetails';

import { connect } from 'react-redux'
class Authors extends Component {
    render() {
        return (
            <div>
                <table className={`table table-striped`}>
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
                        this.props.authors.map(
                            authorName =>
                                <AuthorDetails authors={authorName}/>
                        )
                    }
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authors: state.authors,
        loading: state.ajaxCalls.getAllPosts.loading,
        hasError: state.ajaxCalls.getAllPosts.hasError,
    };
}

//its optional
const mapDispatchToProps = () => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authors);