const model = require('../model/pigs')

function getAll (req, res, next) {
  const data = model.getAll()
  res.status(200).json({ data })
}

function getOne(req, res, next) {
  const data = model.getOne()
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new pig`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

function update(req, res, next) {
  
}

module.exports = { getAll, create }
