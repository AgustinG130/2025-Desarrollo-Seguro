// src/routes/authRouter.ts
import { Router } from 'express';
import routes from '../controllers/authController';

const router = Router();

router.get('/', routes.ping);
router.post('/login', routes.login);
router.post('/forgot-password', routes.forgotPassword);
router.post('/reset-password', routes.resetPassword);
router.post('/set-password', routes.setPassword);

// Nuevos (los comentados en el codigo)
router.post('/create-user', routes.createUser); // Missing Auth
router.put('/update-user/:id', routes.updateUser);
router.get('/profile', routes.getProfile);
router.put('/profile', routes.updateProfile);
router.get('/profile-picture', routes.getPicture);
router.post('/profile-picture', routes.uploadPicture);
router.delete('/profile-picture', routes.deletePicture);

export default router;
