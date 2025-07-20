import { Request,Response } from "express";
import { getAllCategories , getCategoryById, createCategory,updateCategory,deleteCategory} from "../models/categoryModel.js";

export const listCategories = async(req:Request,res:Response) =>{
    try{
        const {showDeleted} = req.query;
        const categories = await getAllCategories(showDeleted);
        res.status(200).json(categories);
    }catch(error){
        console.log(error);
        res.status(400).json({message:'Kategoriler listelenemedi'})
    }
}


export const getCategory = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        const category = await getCategoryById(Number(id)); 
        if(!category)
            res.status(404).json({message:'Kategori bulunamadi'});
        else
            res.json(category);
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Kategori bulunamadi'});
    }
}

export const addCategory = async(req:Request,res:Response) =>{
    try {
        const newCategory = await createCategory(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Kategori eklenemedi'});
    }
}

export const editCategory = async(req:Request,res:Response) =>{
    try {
        const editCategory = await updateCategory(Number(req.params.id),req.body);
        res.status(202).json(editCategory);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:'Kategori bulunamadi'});
    }
}

export const removeCategory = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;
        const deletedCategoryy = await deleteCategory(Number(id));
        res.json(deleteCategory);
    } catch (error) {
        console.log(error);
        res.status(405).json({message:'Kategori bulunamadi'});
    }
}