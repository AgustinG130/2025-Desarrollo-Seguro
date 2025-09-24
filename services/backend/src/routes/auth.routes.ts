// src/routes/authRouter.ts
import { Router } from 'express';
import routes from '../controllers/authController';
import authenticateJWT from '../middleware/auth.middleware';

const router = Router();

router.get('/', routes.ping);

router.post('/login', routes.login);

// POST /auth/forgot-password
router.post('/forgot-password', routes.forgotPassword);

// POST /auth/reset-password
router.post('/reset-password', routes.resetPassword);

// POST /auth/set-password
router.post('/set-password', authenticateJWT, routes.setPassword);

// Nuevos (los comentados en el codigo)
router.post('/create-user', routes.createUser);
router.put('/update-user/:id', authenticateJWT, routes.updateUser);
router.get('/profile', authenticateJWT, routes.getProfile);
router.put('/profile', authenticateJWT, routes.updateProfile);
router.get('/profile-picture', authenticateJWT, routes.getPicture);
router.post('/profile-picture', authenticateJWT, routes.uploadPicture);
router.delete('/profile-picture', authenticateJWT, routes.deletePicture);

export default router;