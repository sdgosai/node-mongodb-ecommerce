const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // console.log(token);
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decodedToken);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            res.status(400).json('Invalid user ID');
        }
        // else (userId === token) {
        //     res.status(400).json("not match")
        // }
        next();
    } catch {
        res.status(401).json('Invalid request!');
    }
};

module.exports = verifyToken;