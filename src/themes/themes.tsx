import { CustomFlowbiteTheme } from "flowbite-react";

// Dein benutzerdefiniertes Theme
export const customRange: CustomFlowbiteTheme["rangeSlider"] = {
  root: {
    base: "flex",
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-700 dark:bg-gray-600",
      sizes: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
      thumb: "w-3 h-3 bg-gray-700 dark:bg-gray-700",
    },
  },
};
