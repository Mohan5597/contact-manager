const express = require('express')
const router = express.Router()
const contactsController = require('../app/controllers/contactsController')

const categoryController = require('../app/controllers/categoryController')
const userController=require('../app/controllers/userController')

const {authenticateUser}=require('../app/middlewares/authentication')


router.get('/contacts',authenticateUser, contactsController.list)
router.get('/contacts/:id',authenticateUser, contactsController.show)
router.post('/contacts',authenticateUser,contactsController.create)
router.put('/contacts/:id',authenticateUser, contactsController.update)
router.delete('/contacts/:id',authenticateUser, contactsController.destroy)

router.get('/categories', authenticateUser,categoryController.list)
router.get('/categories/:id',authenticateUser, categoryController.show)
router.post('/categories',authenticateUser, categoryController.create)
router.put('/categories/:id',authenticateUser, categoryController.update)
router.delete('/categories/:id',authenticateUser, categoryController.destroy)

router.get('/users/profile',authenticateUser,userController.list)
router.put('/users/profile/edit',authenticateUser,userController.update)
router.post('/users/register',userController.register)
router.post('/users/login',userController.create)
router.delete('/users/logout', authenticateUser,userController.destroy)



module.exports=router