// uno.config.ts
import { defineConfig } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetWind from "@unocss/preset-wind";

function convertToRem(value: string) {
  return `${(+value / 10).toLocaleString("en-PH", {
    maximumFractionDigits: 3,
  })}rem`;
}

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      fonts: {
        sans: ["Inter:400,700"],
      },
    }),
  ],
  theme: {
    colors: {
      "black-russian": "#0A0C1C",
      jaguar: "#1B1937",
      "medium-orchard": "#AB5CDB",
    },
    breakpoints: {
      desktop: "1024px",
    },
  },
  preflights: [
    {
      getCSS: () => `:root { font-size: 62.5% }`,
    },
  ],
  shortcuts: {
    stat: "flex flex-col gap-y-2",
    stat__number: "fw-700 text-size-24 leading-29.05",
    stat__category: "text-size-12 leading-25 tracking-1 opacity-60 uppercase",
  },
  rules: [
    // literal numbers
    [
      /^max-w-([\d.]+)$/,
      ([, value]) => ({
        "max-width": convertToRem(value),
      }),
    ],
    [
      /^rounded-([\d.]+)$/,
      ([, value]) => ({
        "border-radius": convertToRem(value),
      }),
    ],
    [
      /^p-([\d.]+)\/([\d.]+)\/([\d.]+)\/([\d.]+)$/,
      ([, top, right, bottom, left]) => ({
        padding: `${convertToRem(top)} ${convertToRem(right)} ${convertToRem(
          bottom
        )} ${convertToRem(left)}`,
      }),
    ],
    [
      /^pr-([\d.]+)$/,
      ([, value]) => ({
        "padding-right": convertToRem(value),
      }),
    ],
    [
      /^gap-y-([\d.]+)$/,
      ([, value]) => ({
        "grid-row-gap": convertToRem(value),
        "row-gap": convertToRem(value),
      }),
    ],
    [
      /^gap-x-([\d.]+)$/,
      ([, value]) => ({
        "grid-column-gap": convertToRem(value),
        "column-gap": convertToRem(value),
      }),
    ],
    [
      /^text-size-([\d.]+)$/,
      ([, value]) => ({
        "font-size": convertToRem(value),
      }),
    ],
    [
      /^leading-([\d.]+)$/,
      ([, value]) => ({
        "line-height": `${(+value / 10).toLocaleString("en-PH", {
          maximumFractionDigits: 3,
        })}rem`,
      }),
    ],
    [
      /^tracking-([\d.]+)$/,
      ([, value]) => ({
        "letter-spacing": convertToRem(value),
      }),
    ],
    [
      /^mt-([\d.]+)$/,
      ([, value]) => ({
        "margin-top": convertToRem(value),
      }),
    ],
  ],
});
