const CarouselImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "550px" }}
    />
  );
};

export default CarouselImage;

