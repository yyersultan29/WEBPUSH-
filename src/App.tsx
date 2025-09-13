import React from 'react';
import { Images } from './images';
import type { ImageEntity } from './model';
import { ProductCard } from './images-card';

function App() {
  const [images, setImages] = React.useState<ImageEntity[]>([]);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=2&limit=30`
        );
        const data = await response.json();
        setImages(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchImages();
  }, []);

  console.log(images);
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <ProductCard images={images.splice(0, 5).map(el => el.download_url)} />
        <ProductCard images={images.splice(5, 10).map(el => el.download_url)} />
      </div>
      <Images />
    </div>
  );
}

export default App;
