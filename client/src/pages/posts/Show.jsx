import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'

import axios from '../../api'

function Show({ user }) {

    const [post, setPost] = useState({})

    const { id } = useParams()
    const navigate = useNavigate()

    const detailsRef = useRef()
    const textRef = useRef()

    async function getPost() {
        try {
            const response = await axios.get(`/api/posts/${id}`)
            console.log(response.data)
            setPost(response.data)
        } catch(err) {
            console.log(err.message)
            navigate('/posts')
        }
    }

    async function handleDeletePost() {
        try {
            await axios.delete(`/api/posts/${id}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                }
              })
            navigate('/posts')
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    async function handleDeleteComment(commentId) {
        try {
            await axios.delete(`/api/comments/${post._id}/${commentId}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            let updatedPost = { ...post }
            updatedPost.comments = updatedPost.comments.filter(c => c._id !== commentId)
            setPost(updatedPost)
        } catch(err) {
            console.log(err)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const comment = {
            text: textRef.current.value
        }
        const response = await axios.post(`/api/comments/${id}`, comment, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        
        const updatedPost = { ...post }
        updatedPost.comments.push(response.data)
        setPost(updatedPost)

        textRef.current.value = ''
        detailsRef.current.open = false
    }

    if (!post.subject) {
        return <div>Loading...</div>
    }

    return (
        <div className="a-post bg-scroll bg-no-repeat h-screen flex justify-center items-center">
            <div className=" ml-10 text-center flex  text-black flex-col">
                <h2 className="text-8xl -mt-20 h-1/2">{post.subject}</h2>
                <h5 className="text-3xl" style={{ opacity: '.3' }}>Posted by {post.user} on {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</h5>
                <p className='p-body font-bold bg-slate-300 rounded-lg p-5'>{post.body}</p><br /><br />
    
                {
                    post?.comments?.length ?
                        <div className="flex flex-col  overflow-hidden overflow-y-scroll h-24">
                            <div>Comments:</div>
                            <div className="bg-white">{post.comments.map((comment, i) =>
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.text}</div>
                                    {comment.user === user &&
                                        <>
                                            <button onClick={() => handleDeleteComment(comment._id)}>X</button>
                                            <Link to={`/comments/${comment._id}/edit`}><span>+</span></Link>
                                        </>
                                    }
                                </div>
                            )}</div>
                            <br /><br />
                        </div>
                        : ''
                }
                {user &&
                    <details clas ref={detailsRef}>
                        <summary className="btn btn-success"  style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form onSubmit={handleSubmit}>
                            <textarea className="bg-white h-6" name="text" id="lc" cols="1" rows="1" ref={textRef} />
                            <button>Comment</button>
                        </form>
                    </details>
                }
    
                <div className="buttons">
                    {post.user === user &&
                        <>
                            <button className="bg-red-500 text-white  rounded hover:bg-red-600"  onClick={handleDeletePost}>Delete</button>
                            <button className="bg-blue-500 text-white  rounded hover:bg-blue-600"  onClick={() => navigate(`/posts/${id}/edit`)}>Edit</button>
                        </>
                    }
                    <button className="bg-gray-300 text-gray-800  rounded hover:bg-gray-400"  onClick={() => navigate('/posts')}>Back</button>
                </div>
            </div>
        </div>
    );
   }
export default Show