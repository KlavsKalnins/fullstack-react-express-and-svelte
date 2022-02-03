import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delUser, updateUser } from "../api";
import { User } from "../types/user";
import { getUserList } from "../slices/usersSlice";

interface UserCellProps {
  user: User;
}

export const UserCell: React.FC<UserCellProps> = ({ user }) => {
  const dispatch = useDispatch();
  const onEdit = async () => {
    userInput._id = user._id;
    const create = await updateUser(userInput);
    if (create === "200") {
      dispatch(getUserList());
      setIsEditing(false);
    }
  };
  const onDelete = async () => {
    const onDel = await delUser(user);
    if (onDel === "200") dispatch(getUserList());
  };

  const [userInput, setUserInput] = useState<User>(user);
  const [isEditing, setIsEditing] = useState(false);

  const onIsEditing = function () {
    setIsEditing(!isEditing);
    if (!isEditing) setUserInput(user);
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setUserInput((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <tr>
        {isEditing ? (
          <>
            <td>
              <input
                value={userInput.name}
                className="usercell--input"
                name="name"
                placeholder="Name..."
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                value={userInput.age}
                className="usercell--input"
                name="age"
                placeholder="Age..."
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                value={userInput.height}
                className="usercell--input"
                name="height"
                placeholder="Height..."
                onChange={handleInputChange}
              />
            </td>
          </>
        ) : (
          <>
            <td className="cell">{user.name}</td>
            <td className="cell">{user.age}</td>
            <td className="cell">{user.height}</td>
          </>
        )}
        <td>
          <button className="cell--button" onClick={() => onIsEditing()}>
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </td>
        {isEditing && (
          <td>
            <button className="cell--button" onClick={onEdit}>
              Submit
            </button>
          </td>
        )}
        <td>{!isEditing && <button onClick={onDelete}>Remove</button>}</td>
      </tr>
    </>
  );
};
