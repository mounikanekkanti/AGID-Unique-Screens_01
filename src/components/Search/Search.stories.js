import { Search } from ".";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    size: {
      options: ["big", "small", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "big",
    className: {},
    overlapClassName: {},
    rectangleClassName: {},
    vector: "/img/vector-33.svg",
    groupClassName: {},
    img: "/img/vector-32.svg",
    divClassName: {},
    inputType: "text",
  },
};
