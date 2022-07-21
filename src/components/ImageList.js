import React from "react";

const ImageList = ({ images }) => {
  console.log("🚀 ~ ImageList ~ images", images);

  const pictures = images.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });
  return <div>{pictures}</div>;
};

export default ImageList;
