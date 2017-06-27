import express from 'express';
import UserController from '../controllers/UserController';
import Authenticator from '../helpers/Authenticator';

const userRoutes = express.Router();

userRoutes.route('/')
 .post(Authenticator.validateUserInput, UserController.createUser)
 .get(Authenticator.verifyUser, Authenticator.permitAdmin,
    UserController.getAllUsers);

userRoutes.route('/login')
 .post(UserController.login);

userRoutes.route('/:id')
 .get(Authenticator.verifyUser, UserController.getUser);

userRoutes.route('/:id')
 .put(Authenticator.verifyUser, Authenticator.permitOwnerOrAdmin,
  UserController.updateUser);

userRoutes.route('/:id/status')
  .get(Authenticator.verifyUser,
    Authenticator.permitAll, UserController.getUserStatus);

userRoutes.route('/:id')
.delete(Authenticator.verifyUser, Authenticator.permitOwnerOrAdmin,
 UserController.deleteUser);

userRoutes.route('/logout')
 .post(UserController.logout);

export default userRoutes;
