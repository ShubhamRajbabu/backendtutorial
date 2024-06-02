const z = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should contain atleast 3 characters" })
    .max(255, { message: "Name can contain only 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ required_error: "Email is required" })
    .min(3, { message: "Name should contain atleast 3 characters" })
    .max(255, { message: "Name can contain only 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password should contain atleast 8 characters" })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

const logInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ required_error: "Email is required" })
    .min(3, { message: "Name should contain atleast 3 characters" })
    .max(255, { message: "Name can contain only 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password should contain atleast 8 characters" })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

module.exports = {signUpSchema, logInSchema};