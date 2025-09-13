import React from 'react';
import { Image } from './image';
import type { ImageEntity } from '../model';

export const Images = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [images, setImages] = React.useState<ImageEntity[]>([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=2&limit=100`
        );
        const data = await response.json();
        setImages(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map(image => (
          <Image
            key={image.id}
            src={image.download_url}
            height={500}
            width={600}
            alt={image.id}
          />
        ))}
      </div>
    </div>
  );
};
