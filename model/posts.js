module.exports = {
    posts:[{id:"2fsadf123",title:"Teste",description:"Descrição Teste"}],
    getAll(){
        return this.posts;
    },
    newPost(title,description){
        this.posts.push({id:randomId(),description,title});
    },
    deletePost(title){
        
    },
    editPost(id,title,description){
        let post = this.posts.find(element => {
            if(element.id == id){
                console.log("Elemento:"+element.id);
                return element;
            }
        })
        console.log(post);
        post.title = title;
        post.description = description;
    }
}


function randomId(){
    return Math.random().toString(36).substring(2,9);
}