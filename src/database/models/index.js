import Sequelize from 'sequelize';
import databaseConnection from '../connection'


import users from './users';

const models = {
    users: databaseConnection.import("users", users)
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
})

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;