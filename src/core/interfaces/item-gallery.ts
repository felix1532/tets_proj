export interface ItemGallery {
  photo: Promise<firebase.default.storage.Reference>;
  fullPath: string;
}
