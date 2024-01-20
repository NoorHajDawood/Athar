import { lusitana } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/Athr.jpg"
        alt="أثر"
        width={100}
        height={100}
      />
    </div>
  );
}
