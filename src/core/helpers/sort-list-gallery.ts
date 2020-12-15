import { ListGallery } from '../interfaces/list-gallery';

export function sortListGallery(
  listGallery: Array<ListGallery>
): Array<ListGallery> {
  return listGallery.sort(
    (a, b) =>
      new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime()
  );
}
