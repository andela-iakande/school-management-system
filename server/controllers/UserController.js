import db from '../models';
import Authenticator from '../helpers/Authenticator';
import handleError from '../helpers/HandleError';
import paginator from '../helpers/paginator';

const UserController = {
    /**
  * Create a user
  * Route: POST: /users
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */
  createUser(req, res) {
    if (req.body.groupId === '1') {
      return res.status(401).send({ message: 'Invalid groupId' });
    }

    return db.Users.create(req.userInput)
      .then((user) => {
        const token = Authenticator.generateToken({
          id: user.id,
          username: user.userName,
          groupId: user.groupId
        });
        const response = Authenticator.secureUserDetails(user);
        response.message = 'User created succesfully';
        response.token = token;
        return res.status(201).send(response);
      })
      .catch(error => handleError(error, res));
  },
  /**
  * Login a user
  * Route: POST: /users/login
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */
  login(req, res) {
    return db.Users.findOne({ where: {
      email: req.body.email
    } })
    .then((user) => {
      if (user && user.verifyPassword(req.body.password)) {
        const token = Authenticator.generateToken({
          id: user.id,
          username: user.userName,
          email: user.email,
          groupId: user.groupId
        });

        res.status(200).send({
          token,
          message: 'Login successful'
        });
      } else {
        res.status(401).send({ message: 'Invalid username or password' });
      }
    })
    .catch(error => handleError(error, res));
  },
  /**
    * Get a user
    * Route: GET: /users/:id
    *
    * @param {Object} req request object
    * @param {Object} res response object
    * @returns {Response} response object
    */
  getUser(req, res) {
    return db.Users.findById(req.params.id)
      .then((user) => {
        if (!user) return res.status(404).send({ message: 'User not found' });

        res.status(200).send(Authenticator.secureUserDetails(user));
      })
      .catch(error => handleError(error, res));
  },
  /**
  * Get users
  * Route: GET: /users or GET: /users/?limit=[integer]&
  * offset=[integer]&q=[username]
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */
  getAllUsers(req, res) {
    let searchKey = '%%';
    if (req.query.q) searchKey = `%${req.query.q}%`;

    const offset = Number(req.query.offset) || 0;
    const limit = Number(req.query.limit) || 20;

    return db.Users.findAndCount({
      offset,
      limit,
      attributes: ['id', 'userName', 'firstName', 'lastName', 'email',
        'groupId', 'gender', 'address'],
      where: { userName: {
        $iLike: searchKey
      } },
      order: [['createdAt', 'DESC']]
    })
    .then((users) => {
      const response = {
        rows: users.rows,
        metaData: paginator(users.count, limit, offset)
      };

      return res.status(200).send(response);
    })
    .catch(error => handleError(error, res));
  },

  /**
  * Get a user's documents
  * Route: GET: /users/:id/documents
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */
  getUserStatus(req, res) {
    return db.Status.findAll({
      where: { userId: res.decoded.user.id },
      include: [{
        model: db.Users,
        attributes: ['userName', 'groupId'] }],
    })
    .then((status) => {
      res.status(200).send(status);
    })
    .catch(error => handleError(error, res));
  },


  /**
  * Update a user
  * Route: PUT: /users/:id
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */
  updateUser(req, res) {
    if (req.body.groupId === '1' && res.decoded.groupId !== 1) {
      return res.status(403).send({
        message: 'Only an admin can upgrade a user to an admin role'
      });
    }
    return res.decoded.user.update(req.body, { fields: Object.keys(req.body) })
      .then(updatedUser =>
        res.status(200).send(Authenticator.secureUserDetails(updatedUser)))
      .catch(error => handleError(error, res));
  },

  /**
  * Delete a user
  * Route: DELETE: /users/:id
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */
  deleteUser(req, res) {
    if (res.decoded.groupId !== 1) {
      return res.status(403).send({ message: 'Access denied' });
    }
    return res.decoded.user.destroy()
    .then(() => res.status(200).send({ message: 'User deleted succesfully' }));
  },

   /**
  * Logout a user
  * Route: POST: /users/logout
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */
  logout(req, res) {
    return res.status(200).send({
      message: 'User succesfully logout'
    });
  }
};

export default UserController;
