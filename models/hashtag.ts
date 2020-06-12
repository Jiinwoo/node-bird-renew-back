import {BelongsToManyAddAssociationsMixin, DataTypes, Model} from 'sequelize';
import sequelize from "./sequelize";
import {dbType} from "./index";

class Hashtag extends Model {
    public readonly id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public addHashtags!: BelongsToManyAddAssociationsMixin<Hashtag, number>

}
Hashtag.init({
    name : {
        type : DataTypes.STRING(20),
        allowNull : false,
    },
},{
    sequelize,
    modelName : 'Hashtag',
    tableName: 'hashtag',
    charset: 'utf8',
    collate: 'utf8_general_ci',
})
export const associate = (db : dbType)=>{

}
export default Hashtag;
