const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, data)=> {
            if(err) res.status(403).json("Invalid Token");
            req.user = data;
            next();
        })
    }
        else {
            return res.status(401).json("You are not Authenticate User");
        }
};

const verifyTokenandAuth = (req,res,next) => {
    verifyToken(req,res, ()=> {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("Not allowed for this function");
        }
    })
};

const verifyTokenandAdmin = (req,res,next) => {
    verifyToken(req,res, ()=> {
        if(req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("Not allowed for this function");
        }
    })
};
module.exports = { verifyToken, verifyTokenandAuth, verifyTokenandAdmin};