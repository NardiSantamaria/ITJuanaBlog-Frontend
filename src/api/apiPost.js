const URL_SERVER = "http://localhost:8000/";

export const getAllPost = async() => {
    try {
        const res = await fetch(URL_SERVER + "posts/");
        return await res.json();

    } catch (error) {
        console.log(error);
    }
};

export const getPostById = async (id) =>{
    try {
        const res = await fetch(URL_SERVER + "post/" + id);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const createPost = async (post) => {
    try {
        const res = await fetch(URL_SERVER + "create-post", {
            method : "POST",
            headers : {"Content-type": "application/json"},
            body: JSON.stringify(post),
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = async (id, post) => {
    try {
      const res = await fetch(URL_SERVER + "update-post/" + id, {
        method: "PUT",
        headers : {"Content-type": "application/json"},
        body: JSON.stringify(post),
      });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
};

export const deletePost = async (id) =>{
    try {
        const res = await fetch(URL_SERVER + "delete-post/" + id, {
            method: "DELETE",
            headers : {"Content-type": "application/json"},
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const createComment = async (id, post)=>{
    try {
         await fetch(URL_SERVER + "create-comment/"+ id,{
            method: "PUT",
            headers : {"Content-type": "application/json"},
            body: JSON.stringify(post),
        });
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = async (id, post) =>{
    try {
       
        const res = await fetch(URL_SERVER + "delete-comment/"+id+"/"+post,{
            method: "PUT",
            headers : {"Content-type": "application/json"},
            // body: JSON.stringify({post}),
        });

        return res
    } catch (error) {
        
    }
}