let fileStore: File[] = [];
let subscribers: ((files: File[]) => void)[] = [];

export function setFiles(files: File[]): void {
  fileStore.push(...files);
  console.log("filestore", fileStore);
  subscribers.forEach((callback) => callback(files));
}

export function getFiles(): File[] {
  console.log("getfiles function");
  return fileStore;
}

export function subscribe(callback: (files: File[]) => void): void {
  console.log("subscribe function");
  subscribers.push(callback);
}
