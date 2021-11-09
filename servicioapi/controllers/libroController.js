const Libro = require('../models/libro');
exports.crearLibro = async(req, res) => {
    try {
        let libro;
        //instanciar modelo
        libro = new Libro(req.body);
        await libro.save();
        res.send(libro)
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó :C')
    }
}

exports.consultarLibros = async(req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó, no se actualizó :c')
    }
}

exports.actualizarLibro = async(req, res) => {
    try {
        console.log(req.body)
        const { isbn, nombre, autor, precio } = req.body
        let libro = await Libro.findById(req.params.id);
        console.log(libro);

        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro, nada se actualizó' })
        }
        libro.isbn = isbn;
        libro.nombre = nombre;
        libro.autor = autor;
        libro.precio = precio;

        libro = await Libro.findOneAndUpdate({ _id: req.params.id }, libro, { new: true });

        res.json(libro);
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó, nada se actualizó :c')
    }
}

exports.eliminarLibro = async(req, res) => {
    try {
        let libro = await Libro.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: 'No existe el producto que desea eliminar' })
        }
        await Libro.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Libro eliminado.' })

    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó, no se pudo eliminar el libro :c');
    }
}

exports.consultarLibro = async(req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
        res.json(libro);
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó :c')
    }
}