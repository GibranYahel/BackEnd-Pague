const { response } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = ( req, res = response, next ) => {

    // x-token
    const token = req.header('x-token');

    if( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'Token doesnt exist'
        })
    }

    try {

        const payload = jwt.decode(
            token,
            process.env.SECRET_JWT_SEED,
        );
        
    } catch (error) {
        console.log(error)
        return res.status(402).json({
            ok: false,
            msg: 'Invalid Token'
        });
    }

    next();
}

module.exports = {
    validarJWT
};