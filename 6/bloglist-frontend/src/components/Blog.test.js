import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'


const testUser = {
    username: 'admin',
    name: 'Admin Developperrson'
}


describe('first', () => {
    const testBlog = {
        title: 'Testing',
        author: 'Testi Person',
        url: 'www.google.az',
        likes: 1,
        user: {
            username: 'admin'
        }
    }
        const component = render(
            <Blog blog={testBlog} />
        )
    })

    test('title & author', () => {
        console.log(component)
        console.log(container)
        expect(component.container).toHaveTextContent(blog.author)
        expect(component.container).toHaveTextContent(blog.title)
    })
    test('url & likes', () => {
        expect(component.container).not.toHaveTextContent(blog.likes)
        expect(component.container).not.toHaveTextContent(blog.url)
          
    })

}) 