import axios from "axios"

export const getAllPostsData = () => {
    return axios.get("/api/posts");
}

export const editPostData = (postData, token) => {
    return axios.post(
        `/api/posts/edit/${postData._id}`, 
        {
            postData
        },
        {
            headers: {authorization: token}
        }
    )
}

export const deletePostFromData = (token, postId) => {
    return axios.delete(
        `/api/posts/${postId}`,
        {
            headers: {authorization: token}
        }
    )
}

export const addNewPostInData = (postData, token) => {
    return axios.post(
        "/api/posts",
        {
            postData
        },
        {
            headers: {authorization: token}
        }
    )
}

export const likePostCall = (postId, token) => {
    return axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
            headers: {authorization: token}
        }
    )
}

export const dislikePostCall = (postId, token) => {
    return axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
            headers: {authorization: token}
        }
    )
}