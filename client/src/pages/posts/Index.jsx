import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import axios from '../../api'


function Index({ user }) {

    const [posts, setPosts] = useState([])
    const [translate, setTraslate] = useState(true)
    const navigate = useNavigate()


   

    async function pigTranslate() {

        
        // if(e.target.style.diplay === undefinded){

        // }
        setTraslate((preV) => preV = !preV)



    }


    async function getPosts() {
        if (user) {
            try {

                console.log('v1.00')
                const response = await axios.get('/api/posts', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(response.data)
                setPosts(response.data)
            } catch (err) {
                console.log(err)
            }
        }

    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What they speaking?</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            PIG LATIN
                        </p>
                        <Link className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-3" to={`/posts/new`} >NEW POST</Link>
                        <br/>
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-3" onClick={() => pigTranslate()}>Translate</button>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col bg-yellow-400    flex-wrap p-5 rounded-xl text-center">
                                <div key={post.id} className="flex items-center gap-x-4 text-xs">
                                    <Link
                                        to={`/posts/${post._id}`}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-bold text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.user}
                                    </Link>


                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">
                                        <h1 >
                                            <span className="absolute inset-0" />
                                            {post.subject}
                                        </h1>
                                    </h3>
                                    {translate?<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.body}</p>:
                                    
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.original}</p>}
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <time dateTime={post.createdAt} className="text-gray-500">
                                        {post.createdAt.slice(0, 10)} @ {post.createdAt.slice(11, 16)}
                                    </time>
                                    
                                    {/* <button value={post.original} onClick={(e) => pigTranslate(e)}>Translate</button> */}
                                    {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                                    {/* <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div> */}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Index

// {posts.map((post, index) =>
//     <div className="a-post" key={index}>
//         <h1>{post.user} said:</h1>
//         <Link to={`/posts/${post._id}`}>{post.body}</Link>
//         <button className="btn btn-primary" onClick={()=> alert('hey im clicked')}>translate</button>
//     </div>
// )}