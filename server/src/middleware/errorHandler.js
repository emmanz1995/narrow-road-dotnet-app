const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
    res.status(statusCode);
    res.json({
        msg: err?.message,
        stack: process.env.NODE_ENV === 'production' ? null: err?.stack
    })
}
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req?.originalUrl}`);
    res.status(404);
    next(error);
}

module.exports = { errorHandler, notFound }
