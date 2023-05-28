exports.middlewareGlobal = (req,res,next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
};

exports.outroMiddleware = (req,res,next) =>{
    console.log("sou seu outro middleware! ");
    next();
};