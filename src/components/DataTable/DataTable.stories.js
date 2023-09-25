import { DataTable } from ".";

export default {
  title: "Components/DataTable",
  component: DataTable,
  argTypes: {
    property1: {
      options: ["three-states-3-years", "multi-year", "single-year"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "three-states-3-years",
    cellType: "category-up",
    className: {},
    categoryClassName: {},
    tableClassName: {},
    cellText: "2022",
    cellText1: "2021",
    cellText2: "2020",
    cellText3: "2022",
    cellText4: "2021",
    cellText5: "2020",
    cellText6: "2022",
    cellText7: "2021",
    cellText8: "2020",
  },
};
