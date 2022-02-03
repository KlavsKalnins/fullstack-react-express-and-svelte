import React from "react";
import { User } from "../types/user";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getUserList } from "../slices/usersSlice";
import { createUser } from "../api";

interface CreateUserProps {}

export const CreateUser: React.FC<CreateUserProps> = ({}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: User) => {
    const create = await createUser(data);
    console.log(create);
    if (create === "200") dispatch(getUserList());
  };

  return (
    <>
      <form className="form--user" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form--user--input"
          placeholder="name.."
          {...register("name", { required: true })}
        />
        <input
          className="form--user--input"
          placeholder="age.."
          {...register("age", { required: true })}
        />
        <input
          className="form--user--input"
          placeholder="height.."
          {...register("height", { required: true })}
        />
        <input type="submit" />
        <div>
          {errors.name && <p className="error--color">name is required.</p>}
          {errors.age && (
            <p className="error--color">Please enter number for age.</p>
          )}
          {errors.height && <p className="error--color">height is required.</p>}
        </div>
      </form>
    </>
  );
};
