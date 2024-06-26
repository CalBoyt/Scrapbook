import React from "react";
import { Card, CardImg, CardBody, CardHeader, Col, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";



export const Post = ({ post }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userProfile"));
  return (
    <>
    <Card className="m-4 " style={{width: "60rem",}}>
        <CardHeader className="row ">
            <Col>
            <CardTitle tag='h5' className='mx-3'>
              <Link to={`/post/${post.id}`} className='text-success'>
					      <strong><h2>{post.title}</h2></strong>
				      </Link>
            </CardTitle>
      <CardSubtitle className='mx-3'>
        <h3>Filed Under: 
        <i> {post?.category?.name}</i></h3> 
      </CardSubtitle>

            <CardImg top src={post.image1} className="img-fluid" alt={post.caption1} />
            <h5>{post.caption1}</h5>

            </Col>
        </CardHeader>
      <CardBody>
      <div className="container-fluid bg-3 text-left">
        <font size="5
        ">{post.content}</font>      
      </div>

      <div className="row">
        <div className="col-sm-4">
         <Card className="square border border-0">
            <CardBody>
              <CardImg top src={post.image2} className="img-fluid" alt={post.caption2} />
              <h5>{post.caption2}</h5>      
            </CardBody>
         </Card>
        </div>

        <div className="col-sm-4">
         <Card className="square border border-0">
            <CardBody>
              <CardImg top src={post.image3} className="img-fluid" alt={post.caption3} />
              <h5>{post.caption3}</h5>
            </CardBody>
         </Card>
        </div>


        <div className="col-sm-4">
         <Card className="square border border-0">
            <CardBody>
              <CardImg top src={post.image4} className="img-fluid" alt={post.caption4} />
              <h5>{post.caption4}</h5>
            </CardBody>
         </Card>
        </div>
      </div>
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>

      {/* //Checks to see if the current user is the author of the post and displays the edit and delete buttons only if so */}
      {user.id == post.userProfile.id ? (
        <>
      <Button
							outline
							className='me-2 bg-success text-white'
							onClick={(e) => {
								e.preventDefault();
								navigate(`/post/edit/${post.id}`);
							}}
						>
							Edit Post
						</Button>

      <Button
							outline
							className='me-2 bg-success text-white'
							onClick={(e) => {
								e.preventDefault();
								navigate(`/post/delete/${post.id}`);
							}}
						>
							Delete Post
						</Button>
            </>
            ) : (
              ""
            )}
      </CardBody>
    </Card>
    </>);
};