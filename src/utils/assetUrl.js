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
  const clean = path.replace(/^\/+/, '');
  return `./${clean}`;
}

/**
 * Checks if a GitHub URL is a specific repository rather than a generic profile link.
 */
export function isSpecificRepo(url) {
  if (!url || typeof url !== 'string') return false;
  const clean = url.trim().replace(/\/+$/, '').toLowerCase();
  return (
    clean !== 'https://github.com/joshuel2' &&
    clean !== 'http://github.com/joshuel2' &&
    clean !== 'https://github.com' &&
    clean !== 'http://github.com'
  );
}

/**
 * Checks if a LinkedIn URL links to a specific project post/media item rather than a generic profile directory.
 */
export function isSpecificLinkedIn(url) {
  if (!url || typeof url !== 'string') return false;
  const clean = url.trim().replace(/\/+$/, '').toLowerCase();
  if (
    clean === 'https://www.linkedin.com/in/joshgamedev' ||
    clean === 'https://linkedin.com/in/joshgamedev' ||
    clean === 'https://www.linkedin.com/in/joshua-johnson-485543351' ||
    clean === 'https://linkedin.com/in/joshua-johnson-485543351' ||
    clean === 'https://www.linkedin.com' ||
    clean === 'https://linkedin.com' ||
    clean.includes('/details/projects')
  ) {
    return false;
  }
  return true;
}
