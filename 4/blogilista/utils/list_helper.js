const dummy = (blogs) => {
    return 1
}

const totalLikes = (array) => {
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }
    return array.length === 0
        ? 0
        : array.reduce(reducer, 0)
}
const favouriteBlog = (blogs) => {
    const maxLikes = Math.max(...blogs.likes)
    return maxLikes
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}