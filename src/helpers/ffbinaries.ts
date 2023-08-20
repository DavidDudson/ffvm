import ffbinaries, { DownloadResult } from "ffbinaries";
import { binaryCacheFolder } from "./ffvmconfig";
import util from "node:util";
import fs from "node:fs/promises";
import console from "node:console";

const downloadBinaries = util.promisify(ffbinaries.downloadBinaries);
const versions = util.promisify(ffbinaries.listVersions);

const executables = ["ffmpeg", "ffprobe", "ffplay"];

// TODO: Progress Updates, and optional force parameter
export async function install(version?: string): Promise<void> {
  const cacheFolder = await binaryCacheFolder();
  await fs.rm(cacheFolder, { recursive: true, force: true });
  await fs.mkdir(cacheFolder, { recursive: true });
  const result = await downloadBinaries(executables, {
    version,
    destination: cacheFolder,
  }).catch((err) =>
    console.error(
      `Failed to download binaries for version ${version} to ${cacheFolder}`,
      err,
    ),
  );

  result.forEach((result) => printResult(result));
}

export function listPlatforms(): void {
  console.log(`Supported Platforms`);
  const platforms = ffbinaries.listPlatforms();
  platforms.forEach((platform) => console.log(`- ${platform}`));
}

export function currentPlatform(): void {
  return ffbinaries.detectPlatform();
}

export async function listVersions(): Promise<void> {
  const result = await versions().catch((err) =>
    console.error(`Failed to list available versions`, err),
  );

  console.log("Versions");
  result.forEach((version) => console.log(`- ${version}`));
}

export function cleanCache() {
  ffbinaries.clearCache();
}

function printResult(result: DownloadResult) {
  switch (result.code) {
    case "FILE_EXISTS":
      console.log("Already Downloaded, skipping...");
      break;
    case "DONE_FROM_CACHE":
      console.log("Already in cache, skipping...");
      break;
    case "DONE_CLEAN":
      console.log("Successfully downloaded");
      break;
  }
  console.log(`File: ${result.filename}`);
  console.log(`Path: ${result.path}`);
  console.log(`Status: ${result.status}`);
}
