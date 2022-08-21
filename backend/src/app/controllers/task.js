import { Router } from "express";
import taskSchema from '../../database/schemas/task.js';

const taskRouter = new Router();

taskRouter.get('/', (req, res) => {
    taskSchema.find().then((data) => {
        return res.status(200).send(data);
    }).catch((err) => {
        return res.status(500).send(err);
    })
});

taskRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(500).send('id é obrigatório');

    taskSchema.findById(id).then((response) => {
        return res.status(200).send(response);
    }).catch((err) => {
        return res.status(500).send(err);
    })
});

taskRouter.post('/', (req, res) => {
    taskSchema.create(req.body).then(() => {
        return res.status(200).send('operação efetuada com sucesso');
    }).catch((err) => {
        return res.status(500).send(err);
    })
});

taskRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(500).send('id é obrigatório');

    taskSchema.findByIdAndDelete(id).then((response) => {
        return res.status(200).send(response);
    }).catch((err) => {
        return res.status(500).send(err);
    })
});

taskRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(500).send('id é obrigatório');

    taskSchema.findByIdAndUpdate(id, req.body).then((response) => {
        return res.status(200).send(response);
    }).catch((err) => {
        return res.status(500).send(err);
    })
});

export default taskRouter;
