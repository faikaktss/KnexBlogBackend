import db from '../config/dbConfig.js';

export const getAllComment = (commenter:string, post:number) =>{
    const query = db('Comments');

    if(post){
        query.where("posts_id",post);
    }else if(commenter){
        query.where("commenter_name",commenter);
    }
    return query;
}

export const getCommentId = (id:number)=>{
    return db('Comments').where({id}).first();
}

export const createComment = (data:object) =>{
    return db('Comments').insert(data).returning('*');
}

export const updateComment = (id:number, data:object) =>{
    return db('Comments').where({id}).update(data).returning('*');
}

export const deleteComment = (id:number) =>{
    return db('Comments').where({id}).update({deleted_at:new Date()}).returning('*');
}