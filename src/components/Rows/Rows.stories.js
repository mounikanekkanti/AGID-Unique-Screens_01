import { Rows } from ".";

export default {
  title: "Components/Rows",
  component: Rows,
  argTypes: {
    row: {
      options: [
        "save-bar",
        "visualization-bar",
        "print-save-share",
        "table-preview",
        "even",
        "odd",
        "header",
        "codebook",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    row: "save-bar",
    className: {},
    divClassName: {},
    buttonBigIconSizeBigIconStateClassName: {},
    buttonBigIconText: "View Data",
    frameClassName: {},
    frameClassNameOverride: {},
    buttonBigIconSizeBigIconStateClassNameOverride: {},
    buttonBigIconDivClassName: {},
    buttonBigIconDivClassNameOverride: {},
    buttonBigIconDivClassName1: {},
    visible: true,
    buttonBigIconSizeBigIconStateClassName1: {},
    buttonBigIconDivClassName2: {},
    buttonBigIconText1: "Save",
    buttonBigIconSizeBigIconStateClassName2: {},
    buttonBigIconDivClassName3: {},
  },
};
