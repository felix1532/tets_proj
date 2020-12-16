export interface ItemGallery {
  photo: Promise<firebase.default.storage.Reference>;
  fullPath: string;
  timeCreated: Promise<firebase.default.storage.FullMetadata>;
  name: string;
}
