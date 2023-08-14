import React, { useReducer } from "react";

interface ViewState {
  views: number;
}

interface ViewAction {
  type: "increment" | "decrement";
  payload: number | string;
}

const initialState: ViewState = { views: 0 };

function reducer(state: ViewState, action: ViewAction) {
  switch (action.type) {
    case "increment":
      return { views: state.views + Number(action.payload) };
    case "decrement":
      return { views: state.views - Number(action.payload) };
    default:
      throw new Error();
  }
}

export default function ViewCount() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="max-w-sm p-8">
      <video className="w-full" controls>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm"
        />
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex justify-between mt-4">
        <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
          +
        </button>
        <span>{state.views} views</span>
        <button onClick={() => dispatch({ type: "decrement", payload: "3" })}>
          -
        </button>
      </div>
    </div>
  );
}
