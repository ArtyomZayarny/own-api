import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModule = mongoose.model("User", UserSchema);
export const getUsers = () => UserModule.find();
export const getUserByEmail = (email: string) => UserModule.findOne({ email });
export const getUserBySessiontoken = (sessiontoken: string) =>
  UserModule.findOne({
    "authentication.sessionToken": sessiontoken,
  });
export const getUserById = (id: string) => UserModule.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModule(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserModule.findByIdAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModule.findByIdAndUpdate(id, values);
