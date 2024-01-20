import { Workshop } from "@/app/lib/definitions";
import { lusitana } from "@/app/ui/fonts";
import { Card } from "@/app/ui/workshop/card";
import styles from "@/app/workshops/workshops.module.css";
import Image from "next/image";

export default function WorkshopsList({
    workshops
}: {
    workshops: Workshop[];
}) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className={`${lusitana.className} text-2xl list-title`}>
                ورشات
            </h2>
            {workshops.map((workshop) => (
                <Card key={workshop.id} workshop={workshop} />
            ))}
        </div>
    );
}