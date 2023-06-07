import posts from './data.js'


document.addEventListener("dblclick", (e)=> {
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(postId){
    const targetLikeObj = posts.filter((post) => post.uuid === postId)[0]
    
    if(targetLikeObj.isLiked){
        targetLikeObj.likes--
        targetLikeObj.isLiked = false
    }else{
        targetLikeObj.likes++
        targetLikeObj.isLiked = true
    }
    render()
}


function getPostHtml(){

    let postHtml = ``

    posts.forEach((post) =>{

        const likeIcon = post.isLiked ? "liked" : ""

        postHtml += `
        
        <div class="post">
        <div class="post-header">
        <img src="${post.avatar}" alt="" class="post-logo">
        <div class="name-container">
        <p class="name-title">${post.name}</p>
        <p class="location">${post.location}</p>
        </div>
        </div>
        <img src="${post.post}" alt="" class="post-img">
        <div class="icon-container">
        <i class="fa-solid fa-heart ${likeIcon}" data-like = ${post.uuid}></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-paper-plane"></i>
        </div>
        <p class="likes">${post.likes} likes</p>
        <p class="description"> <strong>${post.name}</strong>  ${post.comment}</p>
        </div>
        `
    })
    return postHtml
}


function render(){
    document.getElementById("container").innerHTML = getPostHtml()
}
render()


