import {Router} from "express";
import{getAllComment,getCommentId,createComment,updateComment,deleteComment} from '../models/commentModels.js';

const router = Router();

router.get('/',getAllComment);
router.get('/:id',getCommentId);
router.post('/',createComment);
router.put('/:id',updateComment);
router.delete('/:id',deleteComment);

export default router;