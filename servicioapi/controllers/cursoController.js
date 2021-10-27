const Curso = require('../models/curso');
exports.crearCurso = async(req, res) => {
    // console.log('creando curso desde el Controller...');
    // console.log(req.body);
    try {
        let curso;
        //instanciar modelo
        curso = new Curso(req.body);
        await curso.save();
        res.send(curso)
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó :C')
    }
}

exports.consultarCursos = async(req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó, no se actualizó :c')
    }
}

exports.actualizarCurso = async(req, res) => {
    try {
        console.log(req.body)
        const { nombre, profesor, descripcion, precio } = req.body
        let curso = await Curso.findById(req.params.id);
        console.log(curso);

        if (!curso) {
            res.status(404).json({ msg: 'No existe el curso, nada se actualizó' })
        }
        curso.nombre = nombre;
        curso.profesor = profesor;
        curso.descripcion = descripcion;
        curso.precio = precio;

        curso = await Curso.findOneAndUpdate({ _id: req.params.id }, curso, { new: true });

        res.json(curso);
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó, nada se actualizó :c')
    }
}

exports.eliminarCurso = async(req, res) => {
    try {
        let curso = await Curso.findById(req.params.id);
        if (!curso) {
            res.status(404).json({ msg: 'No existe el producto que desea eliminar' })
        }
        await Curso.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Curso eliminado.' })

    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó, no se pudo eliminar el curso :c');
    }
}

exports.consultarCurso = async(req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        if (!curso) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
        res.json(curso);
    } catch (error) {
        console.error(error)
        res.status(500).send('Oich, algo pasó :c')
    }
}