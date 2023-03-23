import posts from './data.js'


function getPostHtml(){

    let postHtml = ``

    posts.forEach((post) =>{

        postHtml+= `
        
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
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
        <img>
        </div>
        <p class="likes">${post.likes}</p>
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




