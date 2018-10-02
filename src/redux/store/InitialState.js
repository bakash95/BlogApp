const initialState = {
    posts: [],
    authors:[],
    ajaxCalls: {
        getAllPosts: {
            loading: false,
            hasError: false
        },
        getAllAuthors: {
            loading: false,
            hasError: false
        }
    }
}
export default initialState;