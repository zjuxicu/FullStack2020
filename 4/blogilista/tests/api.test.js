const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)

const initialBlogs = [
    {
        title: 'String',
        author: 'String',
        url: 'String',
        likes: 0
    },
    {
        title: 'String2',
        author: 'String2',
        url: 'String2',
        likes: 1
    },
]

beforeEach(async () => {
    await Blog.deleteMany({})

    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

})
test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body.length).toBe(initialBlogs.length)
})

test('a valid blog can be added ', async () => {
    const newBlog = {
        title: 'uusBlogi',
        author: 'öäöä',
        url: 'testi.fi',
        likes: 999999999
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const contents = response.body.map(r => r.content)

    expect(response.body.length).toBe(initialBlogs.length + 1)
    expect(contents).toContain(
        'uusBlogi'
    )
})

afterAll(() => {
    mongoose.connection.close()
})