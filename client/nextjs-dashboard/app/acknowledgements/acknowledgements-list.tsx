import { fetchAcknowledgements } from "@/app/lib/data";
import { Card } from "@/app/ui/acknowledgement/card";
import { lusitana } from "@/app/ui/fonts";

export default async function AcknowledgementsList() {
    const acknowledgements = await fetchAcknowledgements();
    return (
        // add border styling
        <div
            className="flex flex-col gap-4 border-2 border-gray-300 rounded-md p-1 h-full"
        >
            <h2 className={`${lusitana.className} text-2xl list-title`}>
                شكر وتقدير
            </h2>
            {acknowledgements.map((acknowledgement) => (
                <Card
                    key={`${acknowledgement.acknowledgement}_${acknowledgement.name}`}
                    acknowledgement={acknowledgement}
                />
            ))}
        </div>
    );
}