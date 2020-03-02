import React, { useState } from 'react'

const NewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleNewBlog = (event) => {
        event.preventDefault()
        props.createBlog({
            title, author, url
        })

        setTitle('')
        setAuthor('')
        setUrl('')
    }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleNewBlog}>
                <div>author
                <input
                        id='author'
                        value={author}
                        onChange={({ target }) => setAuthor(target.value)}
                    ></input>
                </div>
                <div>
                    title<input
                        id='title'
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                    ></input>
                </div>
                <div>
                    url<input
                        id='url'
                        value={url}
                        onChange={({ target }) => setUrl(target.value)}
                    ></input>

                    <button id="create">create</button>
                    <br></br>
                </div>
            </form>
        </div>
    )
}
export default NewBlog