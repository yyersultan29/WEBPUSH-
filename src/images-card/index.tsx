import React, { useState, useRef } from 'react';

type ProductCardProps = {
  images: string[];
  width?: number;
  height?: number;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  images,
  width = 250,
  height = 300,
}) => {
  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const part = rect.width / images.length;

    const newIndex = Math.floor(x / part);
    setIndex(newIndex);
  };

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #ddd',
        borderRadius: 8,
        cursor: 'pointer',
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIndex(0)}
    >
      {/* Лента изображений */}
      <div
        style={{
          display: 'flex',
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
          transition: 'transform 0.3s ease',
          height: '100%',
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`product-${i}`}
            style={{
              width: `${100 / images.length}%`,
              objectFit: 'cover',
            }}
          />
        ))}
      </div>

      {/* Индикаторы (точки) */}
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 6,
        }}
      >
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: i === index ? 'green' : '#ccc',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};
