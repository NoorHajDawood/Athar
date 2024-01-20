'use client';

import { Faciliator, Workshop } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import styles from "@/app/ui/workshop/card.module.css";
import {
    DocumentDuplicateIcon,
    MapPinIcon
} from '@heroicons/react/24/outline';
import Image from "next/image";
import { useState } from 'react';

export function Card({
    workshop
}: {
    workshop: Workshop;
}) {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <DocumentDuplicateIcon
                    className={styles.card__header__icon}
                />
                <div>
                    <h3 className={styles.card__header__title}>{workshop.title}</h3>
                    {workshop.intendedAudience ? (
                        <p className={styles.card__header__subtitle}>
                            <b>🎈الفئة العمرية:</b> {workshop.intendedAudience}
                        </p>
                    ) : null}
                </div>
                <Image
                    src={workshop.image_url}
                    alt={workshop.title}
                    width={100}
                    height={100}
                    className={styles.card__header__image}
                />
            </div>
            <div className={styles.card__body}>
                <p className={styles.card__body__text}>{workshop.breif}</p>
                {showDescription ? (
                    <p className={styles.card__body__text}>{workshop.description}</p>
                ) : null}
                <button
                    onClick={toggleDescription}
                    className={styles.card__body__button}
                >
                    {showDescription ? 'إقرأ أقل' : 'إقرأ ألمزيد'}
                </button>
                <p className={styles.card__body__text}>
                    {workshop.facilitators.map((facilitator, index) => (
                        <span key={facilitator.id}>
                            {facilitator.name}
                            {index < workshop.facilitators.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </p>
            </div>
            <div className={styles.card__footer}>
                <p className={styles.card__footer__text}>📅 {workshop.date}</p>
                <p className={styles.card__footer__text}>🕕 {workshop.time}</p>
                <p className={styles.card__footer__text}>
                    📍 {workshop.location}
                </p>
            </div>
        </div>
    );
}
