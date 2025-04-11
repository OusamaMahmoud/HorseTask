import React, { useState } from "react";

type SafeImageProps = {
  src: string;
  fallbackSrc: string;
  alt?: string;
  className?: string;
};

const SafeImage = React.memo(
  ({ src, fallbackSrc, alt = "", className = "" }: SafeImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={() => setImgSrc(fallbackSrc)}
      />
    );
  }
);

export default SafeImage;
