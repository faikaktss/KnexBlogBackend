import { Router } from "express";
import{addPosts,editPosts,getPosts,removePosts,listPosts} from '../controllers/postsControlerr.js';


const router = Router();

router.get('/',listPosts);
router.get('/:id',getPosts);
router.post('/',addPosts);
router.put('/:id',editPosts);
router.delete('/:id',removePosts);

export default router