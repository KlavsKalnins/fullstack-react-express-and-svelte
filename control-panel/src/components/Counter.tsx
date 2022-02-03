import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";
import React, { useEffect, useState } from "react";

import { Dispatch } from "@reduxjs/toolkit";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
