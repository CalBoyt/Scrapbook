import { useState } from "react"
import { SearchPosts } from "../../Managers/PostManager"
import { Button, Container, Form, FormGroup, Input } from "reactstrap"
import { Post } from "./Post";


export const PostSearch = () => {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    // SearchPosts

    const searchOnChange = (e) => {
        setSearch(e.target.value)
    }

    const searchOnClick = (e) => {
        e.preventDefault()

        SearchPosts(search)
            .then(res => {
                setSearchResults(res)
            })
    }

    return (
        <div className="bg-success bg-opacity-25 p-5">
            <Container>
            <h1 className='pt-5 pb-5 text-danger'>Search Scraps by Keyword:</h1>

                <Form >
                    <FormGroup >
                        <Input 
                        bsSize="lg"
                        className="mb-3 p-3"
                        placeholder="enter keyword(s)"
                        type="text" value={search} onChange={searchOnChange} />
                    </FormGroup>
                    <Button 
					color='success'
					className='mb-3 p-3 me-2'
                        onClick={searchOnClick}>Search</Button>
                </Form>
                <h3 className="mb-3 p-3">
                    Search Results Below:
                    {searchResults.map((post) =>
                        <>
                            <Post key={post.id} post={post} />
                        </>
                    )}
                </h3>

            </Container>
        </div>
    )

}