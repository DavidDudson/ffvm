import packageJson from "#package.json";

export function packageVersion(): string {
  return packageJson.version;
}

export function packageName(): string {
  return packageJson.name;
}
