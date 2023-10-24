import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Tile } from "../Tile/Tile";
import "../../../styles/Srpastyle.css";

export const Srpa = ({
  property1,
  tileThumbUpFill = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/thumb-up-2-fill-1.svg",
  tileSecureSvgrepoCom = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/secure-svgrepo-com-1.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className="SRPA">
      <Tile
        className={`${state.property1 === "simple" ? "class" : "class-2"}`}
        happyFill={
          state.property1 === "simple"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/happy-fill-1.svg"
            : undefined
        }
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        property1={state.property1 === "simple" ? "simple-l" : "simple"}
      />
      <Tile
        className={`${state.property1 === "reliable" ? "class-3" : "class-4"}`}
        img={
          state.property1 === "reliable"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/thumb-up-2-fill-1-2.svg"
            : undefined
        }
        onMouseEnter={() => {
          dispatch("mouse_enter_581");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave_581");
        }}
        property1={state.property1 === "reliable" ? "relaible-l" : "reliable"}
        thumbUpFill={tileThumbUpFill}
      />
      <Tile
        className={`${state.property1 === "proven" ? "class-5" : "class-6"}`}
        onMouseEnter={() => {
          dispatch("mouse_enter_585");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave_585");
        }}
        property1={state.property1 === "proven" ? "proven-l" : "proven"}
        secureSvgrepoCom={tileSecureSvgrepoCom}
      />
      <Tile
        className={`${state.property1 === "affordable" ? "class-7" : "class-8"}`}
        onMouseEnter={() => {
          dispatch("mouse_enter_590");
        }}
        onMouseLeave={() => {
          dispatch("mouse_leave_590");
        }}
        property1={state.property1 === "affordable" ? "affordable-l" : "affordable"}
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "simple") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "affordable",
        };
    }
  }

  if (state.property1 === "reliable") {
    switch (action) {
      case "mouse_leave_581":
        return {
          property1: "affordable",
        };
    }
  }

  if (state.property1 === "proven") {
    switch (action) {
      case "mouse_leave_585":
        return {
          property1: "affordable",
        };
    }
  }

  if (state.property1 === "affordable") {
    switch (action) {
      case "mouse_leave_590":
        return {
          property1: "proven",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "simple",
      };

    case "mouse_enter_581":
      return {
        ...state,
        property1: "reliable",
      };

    case "mouse_enter_585":
      return {
        ...state,
        property1: "proven",
      };

    case "mouse_enter_590":
      return {
        ...state,
        property1: "affordable",
      };
  }

  return state;
}

Srpa.propTypes = {
  property1: PropTypes.oneOf(["reliable", "default", "proven", "affordable", "simple"]),
  tileThumbUpFill: PropTypes.string,
  tileSecureSvgrepoCom: PropTypes.string,
};
