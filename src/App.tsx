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
          `https://picsum.photos/v2/list?page=2&limit=5`
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
      <h3>PRODUCT CARD</h3>
      <ProductCard images={images.map(el => el.download_url)} />
      <Images />
    </div>
  );
}

export default App;
