import { AlertManager } from 'react-alert';

export function readAsDataUrl(
  event: React.ChangeEvent<HTMLInputElement>,
  alert: AlertManager,
  setImage: React.Dispatch<React.SetStateAction<string>>
): void {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setImage(reader.result as string);
      alert.success('Photo success download', {
        timeout: 2000,
      });
    }
  };
  reader.readAsDataURL(event.target.files[0]);
}
