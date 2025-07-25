import path from 'path';
import fs from 'fs';

export default function autoAliasPlugin({ root = 'src', exclude = [] } = {}) {
  return {
    name: 'vite:auto-alias',
    config(config, { command }) {
      const alias = {};
      const absRoot = path.resolve(process.cwd(), root);

      if (!fs.existsSync(absRoot)) return;

      const folders = fs.readdirSync(absRoot, { withFileTypes: true });

      for (const dir of folders) {
        if (dir.isDirectory() && !exclude.includes(dir.name)) {
          alias[`@${dir.name}`] = path.join(absRoot, dir.name);
        }
      }

      return {
        resolve: {
          alias
        }
      };
    }
  };
}
