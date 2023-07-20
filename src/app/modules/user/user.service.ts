import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload); // User -> clsss and user -> instance
  await user.save(); //build-in instance methods
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });

  user?.fullName(); // * Custom Instance methods
  return user;
};

export const getAdminUsersFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });

  user?.fullName(); // * Custom Instance methods
  return user;
};
