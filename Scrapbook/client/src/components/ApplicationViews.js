import { Routes, Route, Navigate} from "react-router-dom";
import PostList from "./Posts/PostList";
import { PostForm } from "./Posts/PostForm";
import { CategoryList } from "./Categories/CategoryList";
import UserProfile from "./UserProfiles/UserProfile";
import UserProfileList from "./UserProfiles/UserProfileList";
import { DeletePost } from "./Posts/DeletePost";
import PostDetails from "./Posts/PostDetails";
import { EditPost } from "./Posts/EditPost";
import { UserPosts } from "./Posts/UserPosts";
import { AddNewUser } from "./UserProfiles/AddUserProfile";
import Splash from "./Splash";
import { PostSearch } from "./Posts/PostSearch";


export default function ApplicationViews({ isLoggedIn, isAdmin }) {
	const user = JSON.parse(localStorage.getItem("userProfile"));

return (
     <Routes>

      <Route path="/" element={<Splash />} />
     
        <Route path="/post" element= {<PostList />} />
        
        <Route path="/postForm" element={<PostForm />} />
        <Route path='/Categories' element={<CategoryList />} />
        <Route path='/UserProfiles' element={<UserProfileList />} />
        <Route path="/UserProfile/:id" element={<UserProfile />} />
        <Route path="/post/delete/:postId" element={<DeletePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/post/edit/:postId" element={<EditPost />} />
        <Route path="/my-posts" element={<UserPosts />} />
        <Route path="/post/search" element={<PostSearch />} />


        <Route path="*" element={<p>Whoops, nothing here...</p>} />
        
        { user && user.isAdmin == 1 ? <Route path="/new-user" element={<AddNewUser />} />:""}


     
     </Routes>
    
    )
    
    
   };
   // {user && user.isAdmin == 1 ? (
   //  <Route path="/new-user" element={<AddNewUser />} />         
   // )}
