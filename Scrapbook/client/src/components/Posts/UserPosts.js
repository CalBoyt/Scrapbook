import { useEffect, useState } from "react"
import { getUserPosts } from "../../Managers/PostManager";
import { Post } from "./Post";

export const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([]);
    
    const localScrapbookUser = localStorage.getItem("userProfile");
    const localScrapbookObject = JSON.parse(localScrapbookUser);

    useEffect(() => {
        getUserPosts(localScrapbookObject.id)
        .then((data) => {
            setUserPosts(data)
        })
        .catch((error) => {
            console.log("Unable to fetch user posts:", error)
        });
    }, [localScrapbookObject.id]);

    return (
    <>
        <div className="bg-success bg-opacity-25">
            <h1 className='pt-5 text-danger'>My Scraps</h1>
                <div className="post-list">
                <div className="row justify-content-center">
                    <div className="cards-column row justify-content-center">
                        {userPosts.map((post) => {
                        return  <Post key={post.id} post={post}  /> 
                        })}
                    </div>
                </div>
            </div>

        </div>
    </>
    )


}