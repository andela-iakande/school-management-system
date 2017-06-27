import jwt from 'jsonwebtoken';
import db from '../models';
import handleError from '../helpers/HandleError';

const secret = process.env.SECRET || 'iloveicecream';

const Authenticator = {
  /**
  * Generate a token
  *
  * @param {Object} userDetails user details
  * @returns {String} token
  */
  generateToken(userDetails) {
    return jwt.sign(userDetails, secret, {
      expiresIn: '1d'
    });
  },

  /**
  * Verify a user
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @param {Function} next next function
  * @returns {Response} response object
  */
  verifyUser(req, res, next) {
    const token = req.body.token
      || req.query.token
      || req.get('Authorization');
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(403).send({ message: 'Authentication failed' });
        }
        res.decoded = decoded;
        return next();
      });
    } else {
      return res.status(403).send({
        message: 'No token provided'
      });
    }
  },

 /**
  * Verify user token
  *
  * @param {String} token the token
  * @returns {Object|Boolean} decoded token or false
  */
  verifyToken(token) {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      return false;
    }
  },
/**
  * Allow access for an admin only
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @param {Function} next next function
  * @returns {Response} response object
  */
  permitAdmin(req, res, next) {
    if (res.decoded.groupId === 1) {
      return next();
    }

    return res.status(403).send({ message: 'Access denied' });
  },

  /**
  * Allow access for an Teacher only
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @param {Function} next next function
  * @returns {Response} response object
  */
  permitTeacher(req, res, next) {
    if (res.decoded.groupId === 2) {
      return next();
    }
    return res.status(401).send({ message: `Only Teachers are permitted to 
    access` });
  },

  /**
  * Allow access for an Parent only
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @param {Function} next next function
  * @returns {Response} response object
  */
  permitParent(req, res, next) {
    if (res.decoded.groupId === 4) {
      return next();
    }
    return res.status(401).send({ message: `Only Teachers are permitted to 
    access` });
  },

  /**
  * Permit an admin or profile owner
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @param {Function} next next function
  * @returns {Response} response object
  */
  permitAll(req, res, next) {
    return db.Users.findById(req.params.id)
      .then((user) => {
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.decoded.user = user;
        return next();
      })
      .catch(error => handleError(error, res));
  },

  /**
  * Permit an admin or profile owner
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @param {Function} next next function
  * @returns {Response} response object
  */
  permitOwnerOrAdmin(req, res, next) {
    return db.Users.findById(req.params.id)
      .then((user) => {
        if (!user) return res.status(404).send({ message: 'User not found' });
        if (res.decoded.groupId !== 1 && res.decoded.id !==
        parseInt(req.params.id, 10)) {
          return res.status(403).send({ message: 'Access denied' });
        }

        res.decoded.user = user;
        return next();
      })
      .catch(error => handleError(error, res));
  },

  /**
   * Validate user's input
   * @param {Object} req req object
   * @param {Object} res response object
   * @param {Object} next Move to next controller handler
   * @returns {void|Object} response object or void
   * */
  validateUserInput(req, res, next) {
    if (req.body.groupId && req.body.groupId === 1) {
      return res.status(403)
        .send({
          message: 'Permission denied, You cannot sign up as an admin user'
        });
    }
    let userName = /\w+/g.test(req.body.userName);
    let firstName = /\w+/g.test(req.body.firstName);
    let lastName = /\w+/g.test(req.body.lastName);
    let email = /\S+@\S+\.\S+/.test(req.body.email);
    let password = /\w+/g.test(req.body.password);
    let address = /\w+/g.test(req.body.address);
    let gender = /\w+/g.test(req.body.gender);
    let levelId = /\w+/g.test(req.body.levelId);

    if (!userName) {
      return res.status(400)
        .send({
          message: 'Enter a valid username'
        });
    }
    if (!firstName) {
      return res.status(400)
        .send({
          message: 'Enter a valid firstname'
        });
    }
    if (!lastName) {
      return res.status(400)
        .send({
          message: 'Enter a valid lastname'
        });
    }
    if (!email) {
      return res.status(400)
        .send({
          message: 'Enter a valid email'
        });
    }
    if (!password) {
      return res.status(400)
        .send({
          message: 'Enter a valid password'
        });
    }
    if (req.body.password && req.body.password.length < 6) {
      return res.status(400)
        .send({
          message: 'Minimum of 6 characters is allowed for password'
        });
    }

    db.Users.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          return res.status(409)
            .send({
              message: 'email already exists'
            });
        }
        db.Users.findOne({ where: { userName: req.body.userName } })
          .then((newUser) => {
            if (newUser) {
              return res.status(409)
                .send({
                  message: 'userName already exists'
                });
            }
            userName = req.body.userName;
            firstName = req.body.firstName;
            lastName = req.body.lastName;
            email = req.body.email;
            password = req.body.password;
            address = req.body.address;
            gender = req.body.gender;
            levelId = req.body.levelId;
            const groupId = req.body.groupId || 2;
            req.userInput =
            { userName,
              firstName,
              lastName,
              groupId,
              email,
              password,
              address,
              gender,
              levelId };
            next();
          });
      });
  },

  /**
  * Allow access for the document author
  *
  * @param {Object} req request object
  * @param {Object} res response object
  * @param {Function} next next function
  * @returns {Response} response object
  */
  permitAuthor(req, res, next) {
    return db.Document.findById(req.params.id)
      .then((document) => {
        if (!document) {
          return res.status(404).send({ message: 'Document not found' });
        }

        if (res.decoded.id !== document.authorId) {
          return res.status(403).send({ message: 'Access denied' });
        }

        res.decoded.document = document;
        return next();
      })
      .catch(error => handleError(error, res));
  },

  /**
  * Return secure user details
  *
  * @param {String} user user details
  * @returns {Object} secure data
  */
  secureUserDetails(user) {
    return {
      id: user.id,
      username: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      gender: user.gender,
      groupId: user.groupId,
    };
  }
};

export default Authenticator;
