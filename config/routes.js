const express = require('express')
const router = express.Router()
const contactsController = require('../app/controllers/contactsController')

const categoryController = require('../app/controllers/categoryController')
const userController=require('../app/controllers/userController')

const {authenticateUser}=require('../app/middlewares/authentication')

router.get('/contacts', contactsController.list)

//router.get('/contacts',authenticateUser, contactsController.list)
router.get('/contacts/:id',authenticateUser, contactsController.show)
router.post('/contacts',contactsController.create)
router.put('/contacts/:id',authenticateUser, contactsController.update)
router.delete('/contacts/:id',authenticateUser, contactsController.destroy)

router.get('/categorys',authenticateUser, categoryController.list)
router.get('/categorys/:id',authenticateUser, categoryController.show)
router.post('/categorys',authenticateUser, categoryController.create)
router.put('/categorys/:id',authenticateUser, categoryController.update)
router.delete('/categorys/:id',authenticateUser, categoryController.destroy)

router.get('/users/account',authenticateUser,userController.list)
router.post('/users/register',userController.register)
router.post('/users/login',userController.create)
router.delete('/users/logout', authenticateUser,userController.destroy)



module.exports=router