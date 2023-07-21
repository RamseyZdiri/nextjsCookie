import Image from 'next/image';

const textImage = ({ data: { properties: { text, image } } }) => (

  <div className="flex ">
    {text.markup}
    <Image alt={image[0].name} src="https://cdn.motor1.com/images/mgl/P3nO74/s1/2000-nissan-skyline-r34-gt-r-by-kaizo-industries-driven-by-paul-walker-in-fast-and-furious-bonham-s-auction.webp" width={400} height={400} />
  </div>
);

export default textImage;
