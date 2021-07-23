import express from 'express'
import blogModel from '../models/blogModel'

export const Insert = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { title, author, content, content_img } = req.body;
        const create = new blogModel({
            title: title,
            author: author,
            content: content,
            content_img: content_img,
        });
        const save = await create.save();
        res
            .status(200)
            .json({
            status: '200',
            message: 'Created Blog!'
        });
    }
    catch (err) {
        next(err);
    }
}