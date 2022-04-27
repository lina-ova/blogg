import React, { useEffect, useState} from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import Post from './post'
import { doc, deleteDoc } from 'firebase/firestore'

const Home = ({isAuth} ) => {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, 'posts');
    

    const deletePost = async (id) => {
        const postDoc = doc(db, 'posts', id)
        await deleteDoc(postDoc)
    };
    
    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPosts();
      }, [deletePost]);

    

    return (
        <div className="homePage">
            {postLists.map((post, i)=>{
                return (
                        <Post title={post.title}
                            isAuth={isAuth}
                            author_name={post.author.name}
                            post_text={post.postText}
                            author_id={post.author.id}
                            post_id={post.id}
                            index={i+post.id}
                            deletePost={deletePost} />
                    )
            })}
        </div>
    );
}

export default Home;