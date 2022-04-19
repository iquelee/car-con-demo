module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const AdminUser = require('../../models/AdminUser')
  const jwt = require('jsonwebtoken')

  router.post('/admin-users', async (req, res) => {
    const model = await AdminUser.create(req.body)
    res.send(model)
  })

  router.get('/admin-users/:id', async (req, res) => {
    const model = await AdminUser.findById(req.params.id, req.body)
    res.send(model)
  })

  router.get('/admin-users', async (req, res) => {
    const items = await AdminUser.find()
    res.send(items)
  })

  router.put('/admin-users/:id', async (req, res) => {
    const model = await AdminUser.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/admin-users/:id', async (req, res) => {
    await AdminUser.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  router.post('/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const user = await AdminUser.findOne({
      username: username
    }).select('+password') // select是为了取到password的值（因为模型定义时，password：{select: false}）
    if(!user) {
      return res.status(422).send({
        message: '用户不存在'
      })
    }
    // 2.校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    if(!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }
    // 3.登录成功，返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token, username })
  })

  app.use('/admin/api', router)
}