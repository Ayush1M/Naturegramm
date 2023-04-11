import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const posts = [
    {
        name: "Vincent",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/vincent.png",
        post: "images/green-mountains.jpg",
        comment: "that place looks amazing!!",
        likes: 21,
        isLiked: false,
        uuid: uuidv4()
    },
    {
        name: "Gustave",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/gustave.png",
        post: "images/nature-walk.jpg",
        comment: "a dream place to be walking between the nature and admire the beauty.",
        likes: 4,
        isLiked: false,
        uuid: uuidv4()
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/joseph.png",
        post: "images/nature.jpg",
        comment: "nature always helps in reducing stress and helps to relax too.",
        likes: 152,
        isLiked: false,
        uuid: uuidv4()
    }
]

export default posts


