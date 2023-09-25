import { Row } from ".";

export default {
  title: "Components/Row",
  component: Row,
  argTypes: {
    row: {
      options: ["odd", "even"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    row: "odd",
    className: {},
    cellText: "State",
    cellText1: "2023",
  },
};
