module.exports = (res, error) => {
    console.log(error); //SIEMPRE muestro por consola el error

    return res.status(error.status || 500).json({
        ok: false,
        error : {
            status : error.status || 500,
            message : error.message || "Uppppsss, hubo un error.",
        }
    })
}