import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPost, updatePost } from "../../Managers/PostManager";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { getAllCategories } from "../../Managers/CategoryManager";

export const EditPost = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({
        id: 0,
        userProfileId: 0,
        title: "",
        content: "",
        image1: "",
		image2: "",
        image3: "",
        image4: "",
        caption1: "",
		caption2: "",
        caption3: "",
        caption4: "",
        dateCreated: "",
        categoryId: 0
    });

    const getThisPost = () => {
        return getPost(postId).then((post) => setPost(post));
    };

    const getCategories = () => {
        return getAllCategories().then((categories) => setCategories(categories));
    };

    const handleOnChange = (e) => {
        const copy = { ...post};
        copy[e.target.name] = e.target.value;
        setPost(copy);
    };

	const selectList = (event) => {
		const copy = {
			...post,
		};
		copy.categoryId = event.target.value;
		setPost(copy);
	};


    const handleUpdate = (e) => {
        e.preventDefault();
        const postToSendToApi = {
            id: post.id,
            userProfileId: post.userProfileId,
            title: post.title,
            content: post.content,
            image1: post.image1,
			Image2: post.image2,
            Image3: post.image3,
            Image4: post.image4,
            caption1: post.caption1,
			caption2: post.caption2,
            caption3: post.caption3,
            caption4: post.caption4,
            dateCreated: post.dateCreated,
            categoryId: +post.categoryId,    
        };
        
        return updatePost(postToSendToApi).then((res) => 
        navigate(`/post/${postId}`)
        );
    };

    useEffect(() => {
        getThisPost();
        getCategories();
    }, [postId]);

	useEffect(() => {
		getCategories();
	}, []);


    return(
		<div className="bg-success bg-opacity-25">
        <Container>
			<h1 className='my-4 text-danger'>Edit your post below</h1>

			<Form >
				<FormGroup className='mb-4'>
					<Label for='title'>Title</Label>
					<Input
						id='title'
						name='title'
						type='text'
						value={post.title}
						onChange={(e) => handleOnChange(e)}
					/>
				</FormGroup >
				<FormGroup className='mb-4'>
					<Label for='content'>Content</Label>
					<Input
						id='content'
						name='content'
						type='textarea'
						value={post.content}
						onChange={(e) => handleOnChange(e)}
					/>
				</FormGroup>
				<FormGroup className='mb-4'>
					<Label for='category'>Category</Label>
					<Input
						id='category'
						name='category'
						type='select'
						value={post.categoryId}
						onChange={(event) => selectList(event)}
					>
						{categories.map((category) => {
							return (
								<option value={category.id} key={category.id}>
									{category.name}
								</option>
							);
						})}{" "}
					</Input>
				</FormGroup>
				<FormGroup className='mb-4'>
					<Label for='image1'>Header Image:</Label>
					<Input
						id='image1'
						name='image1'
						type='text'
						value={post.image1}
						onChange={(e) => handleOnChange(e)}
					/>
				</FormGroup>
				<FormGroup>
                    <Label>Caption For Header Photo:</Label>
                    <Input
                    	id='caption1'
						name='caption1'
						type='text'
						value={post.caption1}
						onChange={(e) => handleOnChange(e)}
                    />
                </FormGroup>

				<FormGroup className='mb-4'>
					<Label for='image2'>Image 2 (optional):</Label>
					<Input
						id='image2'
						name='image2'
						type='text'
						value={post.image2}
						onChange={(e) => handleOnChange(e)}
					/>
				</FormGroup>
				<FormGroup>
                    <Label>Caption 2 (optional):</Label>
                    <Input
                    	id='caption2'
						name='caption2'
						type='text'
						value={post.caption2}
						onChange={(e) => handleOnChange(e)}
                    />
                </FormGroup>

				<FormGroup className='mb-4'>
					<Label for='image3'>Image 3 (optional):</Label>
					<Input
						id='image3'
						name='image3'
						type='text'
						value={post.image3}
						onChange={(e) => handleOnChange(e)}
					/>
				</FormGroup>
				<FormGroup>
                    <Label>Caption 3 (optional):</Label>
                    <Input
                    	id='caption3'
						name='caption3'
						type='text'
						value={post.caption3}
						onChange={(e) => handleOnChange(e)}
                    />
                </FormGroup>

				<FormGroup className='mb-4'>
					<Label for='image4'>Image 4 (optional):</Label>
					<Input
						id='image4'
						name='image4'
						type='text'
						value={post.image4}
						onChange={(e) => handleOnChange(e)}
					/>
				</FormGroup>
				<FormGroup>
                    <Label>Caption 4 (optional):</Label>
                    <Input
                    	id='caption4'
						name='caption4'
						type='text'
						value={post.caption4}
						onChange={(e) => handleOnChange(e)}
                    />
                </FormGroup>
				
				<Button
					color='primary'
					className='me-2'
					onClick={(e) => handleUpdate(e)}
				>
					Save
				</Button>
				<Button
					outline
					color='secondary'
					onClick={(e) => {
						e.preventDefault();
						navigate("/post");
					}}
				>
					Cancel
				</Button>
			</Form>

        </Container>
		</div>
    )

}