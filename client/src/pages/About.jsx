import { Link } from "react-router-dom";


import React from 'react'
import icon from '/public/SWINE.png'
function About({user}) {
  return (
    <div className="text-center flex mt-20 flex-col p-10 ">
        <img src={icon} alt="Logo" className="w-52 mx-auto"/> 
            {user?
            <Link className=" badge-sm" to='/posts'>Posts</Link> :
            <div>
                <Link  className="text-2xl text-green-400" badge badge-smame="badge badge-sm" to='/login'>If yoclassNamre="ady h Login</Link>
                <br/>
                <Link className="text-2xl text-blue-400" badge badge-smsName="badge badge-sm" to='/register'>className="er ifady have an account?</Link>
            </div>
            }
            <br/>
            
            <div className="bg-white bg-opacity-10 rounded-md p-5">
                <h1 className="text-xl">About Swine Speak</h1>
                
                <h2 className="text-xl">Welcome to Swine Speak - The Swine-tastic Social Media Experience!</h2>
                <h3 className="text-lg">Our Story</h3>
                <p>At Swine Speak, we're all about turning everyday conversations into playful, oink-tastic adventures. We started with a simple idea:
                    why not have fun with language while connecting with friends and followers? That's how Swine Speak was born.
                </p>
                <div className="divider"></div>
                <h3 className="text-lg">What is Pig Latin, Anyway?</h3>
                <p>Pig Latin is a whimsical and cryptic language that transforms ordinary words into a delightful mishmash of syllables, making every
                    sentence a puzzle waiting to be solved. Pig Latin takes words and rearranges them in a way that's both intriguing and amusing. It's a
                    bit like a secret code that anyone can learn and enjoy.
                </p>
                <div className="divider"></div>
                <h3 className="text-lg">Why Swine Speak?</h3>
                <h4 className="text-lg">Engage in Playful Conversations:</h4>
                <p>Swine Speak lets you transform your text into Pig Latin with a single click. Surprise your friends with clever, coded messages, and keep them guessing.</p>
                
                <div className="divider"></div>
                
                <h4 className="text-lg">Connect with a Twist:</h4>
                
                <p>Connect with fellow Pig Latin enthusiasts or introduce your friends to the joys of this language game. Expand your social circle with something that's both unique and entertaining.</p>
                <h4 className="text-lg">Learn While You Chat:</h4>
                <p>Swine Speak is a fun way to learn Pig Latin. Whether you're a language aficionado or just curious, our app makes it easy to pick up this quirky language as you go.</p>
                <h4 className="text-lg">Express Yourself:</h4>
               
                <p>Let your creativity shine by adding a Pig Latin twist to your posts, comments, and messages. It's the perfect platform to express yourself in a fun and original way.</p>
                <div className="divider"></div>
                <h3 className="text-lg">Join the Oink-tastic Community</h3>
                <p>Swine Speak is more than just a social media app; it's a vibrant community of language enthusiasts, puzzle lovers,
                    and those who appreciate a good laugh. Our mission is to bring joy and creativity to your online interactions.className="text-lg"
                </p>
                <p>So why wait? Dive into the world of Pig Latin and discover a whole new way to socialize, communicate, and have fun. Join us today and let's make language playfully pig-tastic!</p>
                <h3 className="text-lg"><strong className="text-5xl text-pink-400">Oinkify</strong> Your Texts. Connect in Style. Join Swine Speak today!</h3>
            </div>
        </div>




  )
}

export default About