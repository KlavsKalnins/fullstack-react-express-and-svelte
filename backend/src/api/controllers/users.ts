import * as express from "express";
import { UserModel } from "../models/Users";

class UserController {
  create = async (req: express.Request, res: express.Response) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(newUser);
  };

  findAll = (req: express.Request, res: express.Response) => {
    UserModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  };

  findOne = async (req: express.Request, res: express.Response) => {
    UserModel.findById(req.params.id, (err: any, result: any) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  };

  update = async (req: express.Request, res: express.Response) => {
    const user = { name: req.body.name, age: req.body.age, height: req.body.height };

    UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: user },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        } else {
          res.json(user);
        }
      }
    );
  };

  delete = async (req: express.Request, res: express.Response) => {
    UserModel.findOneAndDelete(
      { _id: req.params.id },
      { new: true },
      (err, doc) => {
        // wierd err is always null
        if (doc === null) {
          res.json({ err: "couldnt find data element" });
        } else {
          res.json(doc);
        }
      }
    );
  };
}

export default UserController;
