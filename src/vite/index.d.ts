import { Plugin } from 'vite';

export interface AutoAliasPluginOptions {
  /**
   * Root directory to scan for folders to alias.
   * Defaults to `'src'`.
   */
  root?: string;

  /**
   * Array of folder names to exclude from aliasing.
   * Defaults to `[]`.
   */
  exclude?: string[];
}

/**
 * A Vite plugin that automatically generates path aliases
 * from subfolders of a given root directory.
 */
export default function autoAliasPlugin(options?: AutoAliasPluginOptions): Plugin;
