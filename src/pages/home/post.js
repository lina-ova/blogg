import React from 'react';
import { auth } from '../../firebase-config'



const Post = ({title, isAuth, author_name, post_text, author_id, post_id, index, deletePost} ) => {
    
    return (
        <div className="post" key={index}>
                            <div className="postHeader">
                                <div className="title">
                                    <h1>{title}</h1>
                                </div>

                                {isAuth && author_id === auth.currentUser.uid &&
                                    <div className="deletePost">
                                        <button onClick={()=>{deletePost(post_id)}}> &#142; </button>
                                    </div>
                                }
                                
                            </div>

                            <div className="postTextContainer">
                                {post_text}
                            </div>
                            <h3>@{author_name}</h3>
                        </div>
    )
}

export default Post;