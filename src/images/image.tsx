import React from 'react';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow?: boolean;
};

export const Image: React.FC<ImageProps> = ({
  src,
  width,
  height,
  rounded = 'none',
  shadow = false,
  style,
  ...restProps
}) => {
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [visible, setIsVisible] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const borderRadius = {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  }[rounded];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entires => {
        entires.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width,
        height,
        ...style,
      }}
    >
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#e5e7eb', // серый
            borderRadius,
            boxShadow: shadow ? '0 2px 6px rgba(0,0,0,0.2)' : undefined,
          }}
        />
      )}

      {/* Картинка */}
      {visible && (
        <img
          ref={imgRef}
          src={src}
          width={width}
          height={height}
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius,
            boxShadow: shadow ? '0 2px 6px rgba(0,0,0,0.2)' : undefined,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            display: 'block',
          }}
          {...restProps}
        />
      )}

      {!visible && (
        <div
          ref={imgRef as React.RefObject<HTMLDivElement>}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};
