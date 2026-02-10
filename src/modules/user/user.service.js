import { User } from "../../DB/models/user.model.js";


export const signup = async (data) => {
const exist = await User.findOne({ where: { email: data.email } });
if (exist) return { message: "Email already exists" };


const user = User.build(data);
await user.save();
return user;
};


export const createOrUpdate = async (id, data) => {
const [user, created] = await User.upsert({ id, ...data }, { validate: false });
return { created };
};
export const getByEmail = async (email) => {
return await User.findOne({ where: { email } });
};


export const getById = async (id) => {
return await User.findByPk(id, {
attributes: { exclude: ["role"] }
});
};