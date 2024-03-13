import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Post } from "./Post";
import { getPost } from "../../Managers/PostManager";

const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPost(id).then(setPost);
    }, [id]);

    if (!post) {
        return null;
    }

	return (
		<div className="bg-success bg-opacity-25">
			<div className='container'>
				<div className='cards-column row justify-content-center'>
					<Post post={post} />
			</div>
		</div>

		</div>
	);
};

export default PostDetails;