const { response } = require('express');

const usuariosGet = (req, res = response) => {
    // Extraer parámetros de la url en petición get. En la respuesta son opcionales, no importa si no se mandan de regreso
    const { q, nombre = 'Sin Nombre', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        limit,
    });
};

const usuariosPost = (req, res = response) => {
    // Recibir parámetros por post

    /*  Recibe todos los parámetros y los almacena en la variable body*/
    // const body = req.body;

    /* Recibe el body y extrae nombre y edad en sus variables */
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad,
    });
};

const usuariosPut = (req, res = response) => {
    // Recibir parámetros dentro del url pero antes del ? con put

    /* Extrae de la url el id http://url/carpeta/ID?params */
    const { id } = req.params;

    res.json({
        msg: 'put API - Controlador',
        id,
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador',
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador',
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
};
