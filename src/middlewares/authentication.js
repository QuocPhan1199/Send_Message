const jwt = require('jsonwebtoken');

const middleware = {
    // verifytoken

    verifyToken: (req, res, next) =>{
        const token = req.header('Authorization').replace('Bearer ', '');
        if(token)
        {
            const accessToken = token;
            jwt.verify(accessToken, process.env.JWT_TOKEN, (err, user) =>{
               if(err){
                   res.status(403).json("Token is not valid");
                   return;
               }     
               req.user = user
               next();
            });
        }
        else{
            res.status(401).json("You're not authentication");
        }
    },

    //permission 
    permissionToken:(req, res, next)=>{
        middleware.verifyToken(req, res, ()=>{
            if(req.user.id == req.params.id || req.user.role === "admin"){
                next();
            }
            else{
                res.status(403).json("You're not allowed to delete other" );
            }
        });
    }
}

module.exports = middleware;