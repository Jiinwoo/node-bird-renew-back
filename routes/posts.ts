import * as express from 'express';
import Post from "../models/post";
import Hashtag from "../models/hashtag";
import User from "../models/user";
import Image from "../models/image";
import * as Sequelize from "sequelize";

const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        let where = {};
        if (parseInt(req.query.lastId as string, 10)) {
            where = {
                id: {
                    [Sequelize.Op.lt]: parseInt(req.query.lastId as string, 10), // less than
                },
            };
        }
        const posts = await Post.findAll({
            where,
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }],
            }],
            order: [['createdAt', 'DESC']], // DESC는 내림차순, ASC는 오름차순
            limit: parseInt(req.query.limit as string, 10),
        });
        return res.json(posts);
    } catch (err) {
        console.error(err);
        return next(err);
    }
});
export default router;
