const uuid = require('uuid/v4')
const pigs = [ { id: uuid(), name: 'Cletus' } ]

function getAll (limit) {
  return limit ? pigs.slice(0, limit) : pigs
}

function getOne() {
  let response
  if(!id) {
    errors.push("Cannot find pig")
    response = { errors }
  } else {
    response = pig
  }
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const pig = { id: uuid(), name }
    pigs.push(pig)
    response = pig
  }

  return response
}

module.exports = { getAll, create }
