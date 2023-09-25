import { NavLink } from ".";

export default {
  title: "Components/NavLink",
  component: NavLink,
  argTypes: {
    state: {
      options: ["normal", "active", "hover"],
      control: { type: "select" },
    },
    type: {
      options: ["link", "accordion"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "normal",
    type: "link",
    current: true,
    className: {},
    frameClassName: {},
    divClassName: {},
    text: "Link",
    divClassNameOverride: {},
    text1: "Section",
    visible: true,
  },
};
