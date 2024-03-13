import { useEffect, useState } from "react"
import { addPost } from "../../Managers/PostManager";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../Managers/CategoryManager";
import { Button, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";

export const PostForm = () => {
    const localScrapbookUser = localStorage.getItem("userProfile");
	const scrapbookUserObject = JSON.parse(localScrapbookUser);
    const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

    const getCategories = () => {
		getAllCategories().then((allCategories) => setCategories(allCategories));
	};

	useEffect(() => {
		getCategories();
	}, []);

    const [newPost, setNewPost] = useState( {
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
        dateCreated: new Date(),
        categoryId: 0,
        userProfileId: scrapbookUserObject.id,
    });

    const clickTheSaveButton = (e) => {
		e.preventDefault();

        const newPostForAPI = {
            Title: newPost.title,
            Content: newPost.content,
            Image1: newPost.image1,
            Image2: newPost.image2,
            Image3: newPost.image3,
            Image4: newPost.image4,
            Caption1: newPost.caption1,
            Caption2: newPost.caption2,
            caption3: newPost.caption3,
            Caption4: newPost.caption4,
            DateCreated: new Date(),
            CategoryId: +newPost.categoryId,
            UserProfileId: scrapbookUserObject.id,
        }
        
        addPost(newPostForAPI).then(navigate("/post"))

    //    return addPost(newPostForAPI)
    //     .then((res) => res.json())
    //     .then(() => {
    //         (navigate("/post"))
    //     });

    };

    const selectList = (event) => {
		const copy = {
			...newPost,
		};
		copy.categoryId = event.target.value;
		setNewPost(copy);
	};

    return(
        <div className="bg-success bg-opacity-25">

        <Container >
            <h1 className='pt-5 pb-3 text-danger'>Create a New Post</h1>
			<Form >
				<FormGroup className='mb-4'>
					<Label for='title'>Title:</Label>
					<Input
						id='title'
						name='title'
						type='text'
						value={newPost.title}
						onChange={                        
                            (event) => {
                            const copy = { ...newPost }
                            copy.title = event.target.value
                            setNewPost(copy)
                        }
                    }
					/>
				</FormGroup >
				<FormGroup className='mb-4'>
					<Label for='content'>Content:</Label>
					<Input
						id='content'
						name='content'
						type='textarea'
						value={newPost.content}
						onChange={                        
                            (event) => {
                            const copy = { ...newPost }
                            copy.content = event.target.value
                            setNewPost(copy)
                        }
                    }
					/>
				</FormGroup>
				<FormGroup className='mb-4'>
					<Label for='category'>Category:</Label>
					<Input
						id='category'
						name='category'
						type='select'
                        value={newPost.categoryId}
                        onChange={(event) => selectList(event)}
                    >
                        <option value='0'>Select a category</option>
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
					<Label for='image1'>Header Photo:</Label>
					<Input
						id='image1'
						name='image1'
						type='text'
						value={newPost.image1}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.image1 = event.target.value
                            setNewPost(copy)
                        }
                    }
					/>
				</FormGroup>
                <FormGroup>
                    <Label>Caption For Header Photo:</Label>
                    <Input
                    	id='caption1'
						name='caption1'
						type='text'
						value={newPost.caption1}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.caption1 = event.target.value
                            setNewPost(copy)
                        }
                    }
                    />
                </FormGroup>
				<FormGroup className='mb-4'>
					<Label for='image2'>Image 2 (optional):</Label>
					<Input
						id='image2'
						name='image2'
						type='text'
						value={newPost.image2}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.image2 = event.target.value
                            setNewPost(copy)
                        }
                    }
					/>
				</FormGroup>
                <FormGroup>
                    <Label>Caption For Image 2 (optional):</Label>
                    <Input
                    	id='caption2'
						name='caption2'
						type='text'
						value={newPost.caption2}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.caption2 = event.target.value
                            setNewPost(copy)
                        }
                    }
                    />
                </FormGroup>

				<FormGroup className='mb-4'>
					<Label for='image3'>Image 3 (optional):</Label>
					<Input
						id='image3'
						name='image3'
						type='text'
						value={newPost.image3}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.image3 = event.target.value
                            setNewPost(copy)
                        }
                    }
					/>
				</FormGroup>
                <FormGroup>
                    <Label>Caption For Image 3 (optional):</Label>
                    <Input
                    	id='caption3'
						name='caption3'
						type='text'
						value={newPost.caption3}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.caption3 = event.target.value
                            setNewPost(copy)
                        }
                    }
                    />
                </FormGroup>
				<FormGroup className='mb-4'>
					<Label for='image4'>Image 4 (optional):</Label>
					<Input
						id='image4'
						name='image4'
						type='text'
						value={newPost.image4}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.image4 = event.target.value
                            setNewPost(copy)
                        }
                    }
					/>
				</FormGroup>
                <FormGroup>
                    <Label>Caption For Image 4 (optional):</Label>
                    <Input
                    	id='caption4'
						name='caption4'
						type='text'
						value={newPost.caption4}
						onChange={                        (event) => {
                            const copy = { ...newPost }
                            copy.caption4 = event.target.value
                            setNewPost(copy)
                        }
                    }
                    />
                </FormGroup>
				<Button
					color='primary'
					className='me-2'
                    onClick={(clickEvent) => clickTheSaveButton(clickEvent)} 
                    >Submit Post				
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


        // return(
    //     <>
    //     <form className="post-form">
    //         <h2 className="post-form-title">Create a New Post</h2>
        
    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="title">Title: </label>
    //                 <input 
    //                 type="text"
    //                 id="title"
    //                 value={newPost.title}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.title = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="content">Content: </label>
    //                 <input 
    //                 type="text"
    //                 id="content"
    //                 value={newPost.content}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.content = event.target.value
    //                         setNewPost(copy)
    //                     }   
    //                 }/>
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="image1">Image 1: </label>
    //                 <input 
    //                 type="text"
    //                 id="image1"
    //                 value={newPost.image1}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.image1 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>

    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="caption1">Caption 1: </label>
    //                 <input 
    //                 type="text"
    //                 id="caption1"
    //                 value={newPost.caption1}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.caption1 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="image2">Image 2: </label>
    //                 <input 
    //                 type="text"
    //                 id="image2"
    //                 value={newPost.image2}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.image2 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="caption2">Caption 2: </label>
    //                 <input 
    //                 type="text"
    //                 id="caption2"
    //                 value={newPost.caption2}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.caption2 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>

    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="image3">Image 3: </label>
    //                 <input 
    //                 type="text"
    //                 id="image3"
    //                 value={newPost.image3}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.image3 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="caption3">Caption 3: </label>
    //                 <input 
    //                 type="text"
    //                 id="caption3"
    //                 value={newPost.caption3}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.caption3 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>

    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="image4">Image 4: </label>
    //                 <input 
    //                 type="text"
    //                 id="image4"
    //                 value={newPost.image4}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.image4 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>
    //         <fieldset>
    //             <div className="form-group">
    //             <label htmlFor="caption4">Caption 4: </label>
    //                 <input 
    //                 type="text"
    //                 id="caption4"
    //                 value={newPost.caption4}
    //                 onChange={
    //                     (event) => {
    //                         const copy = { ...newPost }
    //                         copy.caption4 = event.target.value
    //                         setNewPost(copy)
    //                     }
    //                 } />
    //             </div>
    //         </fieldset>


            // <fieldset>
            //     <div className='form-group'>
            //         <label htmlFor='category-select'>Select Category: </label>
            //         <select
            //             id='type'
            //             value={newPost.categoryId}
            //             onChange={(event) => selectList(event)}
            //         >
            //             <option value='0'>Select a category</option>
            //             {categories.map((category) => {
            //                 return (
            //                     <option value={category.id} key={category.id}>
            //                         {category.name}
            //                     </option>
            //                 );
            //             })}{" "}
            //         </select>
            //     </div>
            // </fieldset>

    //         <button
    //         onClick={(clickEvent) => clickTheSaveButton(clickEvent)} className="btn btn-primary">Submit Post</button>
    //     </form>
    //     </>
    // )

}