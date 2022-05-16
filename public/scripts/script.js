document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})

function updatePosts() {
    fetch("http://192.168.0.4:3000/api/all").then((res) => {
        return res.json();
    }).then(res => {
        let postElements = "";
        let posts = JSON.parse(res);
        posts.forEach(post => {
            let postElement = 
           `<div id=${post.id} class="card mb-3">
            <div class="card-header">
                <h5 class="card-title">
                    ${post.title}
                </h5>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                    <button onclick="editPosts()" class="w-15 m-auto">Editar</button>
                    </div>
                </div>
            </div>`
            postElements += postElement;
        });
        document.getElementById("posts").innerHTML = postElements;
    })

}

function editPosts(){
    let cards = document.querySelectorAll(".card");
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    
    cards.forEach(card => {
        card.addEventListener("click",(event)=>{
            let id = card.getAttribute('id');
            console.log(id);
            const options = {method:"PUT",headers:new Headers({'content-type':'application/json'}),body:JSON.stringify({id,title,description})}
            fetch("http://192.168.0.4:3000/api/edit",options).then(res=>{
                updatePosts();
                document.getElementById("title").value = "";
                document.getElementById("description").value = "";
            })
        })
    })
}

function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let post = {title,description};

    const options = {method:"POST",headers:new Headers({'content-type':'application/json'}),body:JSON.stringify(post)};

    fetch("http://192.168.0.4:3000/api/new",options).then(res=>{
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    });
}