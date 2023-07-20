import Image from 'next/image';
import axios from 'axios';

const AboutUs = async () => {
  const items = await axios({ method: 'get', url: 'https://ren-s-easygoing-harp-seal.euwest01.umbraco.io/umbraco/delivery/api/v1/content?fetch=children%3A7974a22c-50e4-4598-b7f8-e10bfe4d5f70&skip=0&take=10' });

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-start">
      {!!items?.data?.items
      && items.data.items.map(({ name, properties: { author, coverImage } }) => (
        <div className="flex flex-col" key={name}>
          <p>{name}</p>
          <p>{author}</p>
          <Image
            alt={coverImage[0].name}
            src={`https://ren-s-easygoing-harp-seal.euwest01.umbraco.io${coverImage[0].url}`}
            width={coverImage[0].width}
            height={coverImage[0].height}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
