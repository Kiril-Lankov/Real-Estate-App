import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) return res.status(401).json({message: "Not Authenicated!"});
    
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if(err) return res.status(403).json({message: "Token Not Valid!"});
        req.userId = payload.id;
        
        // next process when authentication is completed

        next();
    });
};