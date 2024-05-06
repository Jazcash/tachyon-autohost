import { fullArchive } from "node-7z-archive";

export async function extract7z(archivePath: string, outputName: string) {
    await fullArchive(archivePath, outputName);
}
