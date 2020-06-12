import {Sequelize} from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV as ('production' | 'development' | 'test') || 'development';

const {database, username, password} = config[env];
const sequelize = new Sequelize();

export {sequelize} ;
export default sequelize;
