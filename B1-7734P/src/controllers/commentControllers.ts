import { Request,Response } from "express";
import {getAllComment,getCommentId,createComment,updateComment,deleteComment} from '../models/commentModels.js';


export const listComments = async(req:Request,res:Response) =>{
    try {
        const{post,commneter} = req.query;
        const Comments = await getAllComment(commenter as string , post as number);
        res.status(200).json(Comments);
    } catch (error) {
        console.log(error); 
        res.status(400).json({message:'Kategoriler bulunamadi'});
    }
}

export const getComments = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        const Comment = await getCommentId(Number(id));
        res.status(201).json(Comment);
     } catch (error) {
        console.log(error);
        res.status(400).json({message:'Kategoriler bulunamadi'});
    }
}

export const addComments = async(req:Request,res:Response) =>{
    try {
        const addComment = await createComment(req.body);
        res.status(201).json(addComment)
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Kategoriler bulunamadi'});
    }
}

export const editComments  = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        const editComment = await updateComment(Number(id),req.body);
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Kategori bulunamadi'})
    }
}
export const removeCommnets = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        const deletedComment = await deleteComment(Number(id)); 
        res.status(201).json(deleteComment);
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Kategoriler bulunamadi'});
    }
}