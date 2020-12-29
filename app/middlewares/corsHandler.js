function cors(req, res, next) {
  req.header("Access-Control-Origin", "*")
  req.header("Access-Control-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
}