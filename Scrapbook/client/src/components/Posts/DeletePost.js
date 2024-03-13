import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container } from "reactstrap";
import { deletePost, getPost } from "../../Managers/PostManager";

export const DeletePost = () => {
    const [post, setPost] = useState({
        title: ''
    });
    const { postId } = useParams();
	const user = JSON.parse(localStorage.getItem("userProfile"));
	const navigate = useNavigate();
    const [tagUsers, setTagUsers] = useState([])
    

    // const getTags = () => {
	// 	return getTagUsers(postId).then((tags) => setTagUsers(tags));
	// };

    
    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     deletePost(postId).then((res) => {
    //         if (postTags.length){
    //             return tagUsers.forEach(tag => {deleteTag(tag)
    //     });
    //         }
                
    //     })        
    //     .then(() =>         
    //     navigate(`/post`));
    // };

    const handleDelete = (e) => {
        e.preventDefault();
        deletePost(postId).then(() => navigate("/post"));
    }

    useEffect(() => {
        getPost(postId).then((res) => setPost(res));
    }, [postId]);
    
    // useEffect(() => {
    //     getTags();
    // }, [post]);
   

    return (
        <Container>
            <Card>
                <h3>
                    Delete Post {postId}, Title: "{post.title}"?
                </h3>
                <Button
					color='danger'					
					onClick={(e) => handleDelete(e)}
				>
					Confirm Delete
				</Button>

                <Button
					outline
					color='secondary'
					onClick={(e) => {
						e.preventDefault();
						navigate(`/post/${post.id}`);
					}}
				>
					Cancel
				</Button>

            </Card>
        </Container>

    );    

}