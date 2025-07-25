import AutoAliasPlugin from "../vite/index.js";
const AstroAutoAlias = ({root = "src", exclude = []} = {}) => ({
    name: "astro-auto-alias",
    hooks: {
        "astro:config:setup": async ({ updateConfig }) => {
          updateConfig({
            vite : {
              plugins : [
                AutoAliasPlugin({root, exclude})
              ]
            }
          })
        },
    },
});
export default AstroAutoAlias;