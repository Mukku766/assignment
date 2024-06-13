import Image from 'next/image';
import bannerImg from './banner.png';

export default function Banner() {
  return (
    <div className="banner-container">
      <Image
        src={bannerImg}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
