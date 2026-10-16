/**
 * Asset and Link resolution utilities for Vite & GitHub Pages.
 */

/**
 * Resolves an asset path to work both on localhost and GitHub Pages subpaths.
 * Converts root-relative paths like '/media/rem_preview.mp4' into relative paths './media/rem_preview.mp4'.
 */
export function getAssetUrl(path) {
  if (!path) return '';
  if (/^(https?:|data:|blob:|\/\/)/.test(path)) {
    return path;
  }
  // Strip leading slashes and prefix with './'
  const clean = path.replace(/^\/+/, '');
  return `./${clean}`;
}

/**
 * Checks if a GitHub URL is a specific repository rather than a generic profile link.
 */
export function isSpecificRepo(url) {
  if (!url || typeof url !== 'string') return false;
  const clean = url.trim().replace(/\/+$/, '');
  return (
    clean !== 'https://github.com/JoshUEL2' &&
    clean !== 'http://github.com/JoshUEL2' &&
    clean !== 'https://github.com' &&
    clean !== 'http://github.com'
  );
}

/**
 * Checks if a LinkedIn URL is a specific project/post rather than a generic profile link.
 */
export function isSpecificLinkedIn(url) {
  if (!url || typeof url !== 'string') return false;
  const clean = url.trim().replace(/\/+$/, '');
  return (
    clean !== 'https://www.linkedin.com/in/joshgamedev' &&
    clean !== 'https://linkedin.com/in/joshgamedev' &&
    clean !== 'https://www.linkedin.com/in/joshua-johnson-485543351' &&
    clean !== 'https://linkedin.com/in/joshua-johnson-485543351' &&
    clean !== 'https://www.linkedin.com' &&
    clean !== 'https://linkedin.com'
  );
}
