export default (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        userId: {
            type: DataTypes.STRING,
            primaryKey: true,
            field: 'userId'
        }
    }, {
            tableName: 'users',
            timestamps: false
        })
    users["associate"] = (models) => {

    }
    return users;
}