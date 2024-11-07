import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  safelist: ["i-mdi:lightbulb-outline"],
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        content: [
          {
            name: "Source Sans Pro",
            weights: ["200", "400", "700"],
            italic: true,
          },
        ],
      },
    }),
  ],
});
