
const GITHUB_IO_BASE = import.meta.env.VITE_GITHUB_IO_BASE || ''

export function getGithubIoBase(): string {
  return GITHUB_IO_BASE
}

/**
 * Determine the correct base path for a firmware version
 * Event firmware uses a special path, while normal firmware uses the standard path
 * @param version - The firmware version (with or without 'v' prefix)
 * @returns The base path for fetching firmware files
 */
export function getManifestBasePath(version: string): string {
  const cleanVersion = version.replace(/^v/, '')
  return `builds/${cleanVersion}`
}

/**
 * Get the base URL for fetching firmware files
 * @param version - The firmware version (with or without 'v' prefix)
 * @returns The base URL for the firmware files directory
 */
export function getFirmwareBaseUrl(version: string): string {
  return `${getGithubIoBase()}/${getManifestBasePath(version)}`
}

export function getFirmwareRootUrl(relativePath: string): string {
  return `${getGithubIoBase()}/${relativePath}`
}
