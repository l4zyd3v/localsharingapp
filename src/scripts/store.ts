let fileStore: File[] = [];
let subscribers: ((files: File[]) => void)[] = [];

console.log("filestore", fileStore);

export function setFiles(files: File[]): void {
  console.log("files in function setFiles", files);
  fileStore = files;
  subscribers.forEach((callback) => callback(files));
}

export function getFiles(): File[] {
  return fileStore;
}

export function subscribe(callback: (files: File[]) => void): void {
  subscribers.push(callback);
}
