import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../../../styles/intbutton.css";

export const Button = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default-small-icon",
  });

  return (
    <div className={`button ${state.property1} ${className}`}>
      <div
        className="support"
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
      >
        {(state.property1 === "default-large" ||
          state.property1 === "default-medium" ||
          state.property1 === "default-small-icon" ||
          state.property1 === "default-small" ||
          state.property1 === "large-uppercase-white-outline" ||
          state.property1 === "large-uppercase-white" ||
          state.property1 === "outline" ||
          state.property1 === "small-white" ||
          state.property1 === "white-large") && (
          <div className="frame-4">
            {state.property1 === "default-small-icon" && (
              <>
                <div className="text-wrapper-2">Support</div>
                <img
                  className="chevron-down-2"
                  alt="Chevron down"
                  src="https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6532b974383de2c8bb576865/img/chevron-down-3.svg"
                />
              </>
            )}

            {["default-large", "default-small", "small-white"].includes(state.property1) && <>Support</>}

            {state.property1 === "default-medium" && <>Download</>}

            {state.property1 === "outline" && <>More info</>}

            {state.property1 === "white-large" && <>SUPPORT</>}

            {["large-uppercase-white-outline", "large-uppercase-white"].includes(state.property1) && (
              <>REQUEST A DEMO</>
            )}
          </div>
        )}

        {["medium-icon-outline", "medium-icon"].includes(state.property1) && (
          <>
            <div className="text-wrapper-3">Download</div>
            <img
              className="download"
              alt="Download"
              src={
                state.property1 === "medium-icon-outline"
                  ? "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6532b974383de2c8bb576865/img/download-minimalistic-svgrepo-com-1-1.svg"
                  : "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6532b974383de2c8bb576865/img/download-minimalistic-svgrepo-com-1.svg"
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "medium-icon",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "medium-icon-outline",
      };
  }

  return state;
}

Button.propTypes = {
  property1: PropTypes.oneOf([
    "large-uppercase-white-outline",
    "small-white",
    "medium-icon-outline",
    "outline",
    "white-large",
    "default-medium",
    "medium-icon",
    "large-uppercase-white",
    "default-large",
    "default-small",
    "default-small-icon",
  ]),
};
