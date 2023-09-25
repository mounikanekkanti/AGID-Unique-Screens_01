import { Cell } from ".";

export default {
  title: "Components/Cell",
  component: Cell,
  argTypes: {
    type: {
      options: [
        "state",
        "states-down",
        "category-up",
        "states-up",
        "years-down",
        "data",
        "first-column",
        "years-up",
        "category-down",
      ],
      control: { type: "select" },
    },
    row: {
      options: ["even", "odd"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "state",
    row: "even",
    text: "State",
    className: {},
    divClassName: {},
    text1: "Data",
    frameClassName: {},
    text2: "Data Element Name",
    text3: "2023",
  },
};
