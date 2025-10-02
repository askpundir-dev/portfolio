
export default function ChangeImage({images}){
  return (
    {images.map(image=>(
<img
            className={`product-image project-image-inside-mackbook z-0 top-[5px] lg:top-2 ${
              isScreenOn ? "block screen-on" : "hidden"
            }`}
            src={image.src}
            alt={image.alt}
          />
    ))}
     
  );
}