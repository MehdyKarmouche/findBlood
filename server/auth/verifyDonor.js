const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    // Get auth header value
    const bearerHeader = req.cookies.jwtToken || req.headers.Authorization;
    console.log(bearerHeader);

    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      const decoded = jwt.verify(bearerHeader, process.env.TOKEN_DONOR);

      // Split at the space
      const bearer = bearerHeader.split(' ');

      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      req.payload = decoded;
      // Next middleware
      if(req.payload.role == 'donor')
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