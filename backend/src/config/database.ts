import mongoose from "mongoose";
// compass
// mongodb+srv://developer:3opNTmQe1XFlkp3H@cluster0.vr4qv.mongodb.net/test
export const setupDatabase = function () {
  mongoose.connect(
    "mongodb+srv://developer:3opNTmQe1XFlkp3H@cluster0.vr4qv.mongodb.net/tabydb?retryWrites=true&w=majority"
  );
};
