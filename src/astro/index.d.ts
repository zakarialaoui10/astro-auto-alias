// import { Plugin as VitePlugin } from 'vite';
import { AstroIntegration } from 'astro';

export interface AstroAutoAliasOptions {
  /**
   * Root directory to scan for folders to alias.
   * Defaults to `'src'`.
   */
  root?: string;

  /**
   * List of folder names to exclude from alias generation.
   * Defaults to `[]`.
   */
  exclude?: string[];
}

/**
 * An Astro integration that adds a Vite plugin to automatically
 * generate path aliases based on folders in the root directory.
 */
declare function AstroAutoAlias(options?: AstroAutoAliasOptions): AstroIntegration;

export default AstroAutoAlias;
