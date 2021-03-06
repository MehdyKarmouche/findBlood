const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    // Get auth header value
    console.log("test")
    const bearerHeader = req.cookies.jwtToken || req.headers.Authorization || req.body.donation.owner;

    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      const decoded = jwt.verify(bearerHeader, process.env.TOKEN_CENTER);

      // Split at the space
      const bearer = bearerHeader.split(' ');

      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      console.log("payload")
      console.log(decoded)
      req.payload = decoded;
      // Next middleware
      if(req.payload.role == 'center')
        next();
      else {
        return res.status(403).json({
          message:"Auth failed"
        })
      }
    } else {
      // Forbidden status
      return res.status(403).json({
        message:"Forbidden"
      })
    }

  }