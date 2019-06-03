import models from '@models';

export async function fetchUsers(_parent, data, _, __) {
    try {
        return await models.users.findAll({

        });
    } catch (e) {
        console.log(e);
    }
}
