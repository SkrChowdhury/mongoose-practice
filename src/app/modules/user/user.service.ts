import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "4345",
    role: "student",
    password: "r4324",
    name: {
      firstName: "Hello",
      middleName: "",
      lastName: "World",
    },
    dateOfBirth: "",
    gender: "female",
    email: "",
    contactNo: "33343434",
    emergencyContactNo: "343434",
    presentAddress: "USA",
    permanentAddress: "Dhaka",
  });
  await user.save();
  return user;
};
