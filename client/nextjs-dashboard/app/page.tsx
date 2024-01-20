import { fetchAnnouncements, fetchWorkshops } from '@/app/lib/data';
import AnnouncementsBar from '@/app/ui/announcements/announcements-bar';
import AcmeLogo from '@/app/ui/athr-logo';
import { lusitana } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import SideNav from '@/app/ui/sidenav';
import WorkshopsList from '@/app/workshops/workshops-list';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  return (
    <main className="main">
      {/* <AnnouncementsBar announcments={await fetchAnnouncements()} /> */}
      {/* Replace this with a component that lists workshops */}
      <WorkshopsList workshops={await fetchWorkshops()} />

    </main>
  );
}
