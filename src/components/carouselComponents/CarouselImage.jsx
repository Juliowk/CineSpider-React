/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { forwardRef } from "react";

const CarouselImage = forwardRef(({ src, alt, height, objectFit }, ref) => {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      style={{ objectFit: objectFit && "scale-down", height: height ? height : "620px", }}
      className="d-block w-100"
    />
  );
});

export default CarouselImage;
