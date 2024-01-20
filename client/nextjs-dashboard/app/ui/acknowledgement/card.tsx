import { Acknowledgement, Faciliator } from '@/app/lib/definitions';
import styles from "@/app/ui/acknowledgement/card.module.css";
import { lusitana } from '@/app/ui/fonts';
import backgroundImage from '@/public/acknowledgements/background.png';
import {
    DocumentDuplicateIcon,
    MapPinIcon
} from '@heroicons/react/24/outline';
import Image from "next/image";

export function Card({
    acknowledgement,
    width,
    height
}: {
    acknowledgement: Acknowledgement;
    width?: number;
    height?: number;
}) {
    width = width || 250;
    height = height || 250;

    // make sure card is square
    if (width !== height) {
        height = width;
    }

    return (
        <div
            className={styles.card}
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                width: `${width}px`,
                height: `${height}px`
            }}
        >
            <p className={styles.card_title}>
                {acknowledgement.name}
            </p>
            <p className={styles.card_acknowledgement_text}>
                {acknowledgement.acknowledgement}
            </p>
            <p className={styles.card_description}>
                {acknowledgement.description}
            </p>
            <Image
                src={acknowledgement.image_url}
                alt={acknowledgement.name}
                width={100}
                height={100}
                className={styles.card_image}
            />
        </div>
    );
}
