export * from './sequelize';
import User, {associate as associateUser} from "./user";
import Hashtag, {associate as associateHashtag} from "./hashtag";
import Comment, {associate as associateComment} from "./comment";
import Image, {associate as associateImage} from "./image";
import Post, {associate as associatePost} from "./post";

const db = {
    User,
    Comment,
    Hashtag,
    Image,
    Post
};
associateUser(db);
associateComment(db);
associatePost(db);
associateImage(db);
associateHashtag(db);

export type dbType = typeof db;

