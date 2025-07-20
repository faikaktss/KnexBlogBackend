import db from '../config/dbConfig.js';

export const getAllPosts = (showDeleted : string, status : string, category:number) =>{
    const query = db('posts');

    if(category){
        query.where('category_id',category);
    }
    if(showDeleted ==="true"){
    }else if(showDeleted === "onlyDeleted"){    
        query.whereNot('deleted_at',null);
    }else{
        query.where('deleted_at',null);
    }

    if(status === "published_at"){
        query.whereNot('published_at ',null);
    }else if(status === "draft"){
            query.where('published_at ',null);
    }else{
    
    }
    return query;
}

export const getPostsId = (id:number)=>{
    return db('posts').where({id}).first();
}

export const createPosts = (data:object) =>{
    return db('categories').insert(data).returning('*');
}

export const updatePosts = (id:number, data:object) =>{
    return db('posts').where({id}).update(data).returning('*');
}

export const deletePosts = (id:number) =>{
    return db('posts').where({id}).update({deleted_at:new Date()}).returning('*');
}