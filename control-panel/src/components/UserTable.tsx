import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import { getUserList } from "../slices/usersSlice";
import { UserCell } from "./UserCell";

interface UserTableProps {}

export const UserTable: React.FC<UserTableProps> = () => {
  const { isLoading, users } = useSelector<RootState, RootState["users"]>(
    (state) => state.users
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <>
      <h2>User Table</h2>
      <table className="user--table">
        <thead className="user--table--head">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Height</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return <UserCell key={key} user={user} />;
          })}
        </tbody>
      </table>
    </>
  );
};
