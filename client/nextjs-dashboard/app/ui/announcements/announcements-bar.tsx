import { Announcement } from "@/app/lib/definitions";

export default async function AnnouncementsBar({
    announcments
}: {
    announcments: Announcement[];
}) {
    return (
        <div className="w-full md:col-span-4">
            <h2 className="mb-4 text-xl md:text-2xl">Announcments</h2>
            <div className="rounded-xl bg-gray-50 p-4">
                <div className="flex flex-col items-center gap-2">
                    {announcments.map((announcment) => (
                        <div key={announcment.id} className="flex flex-col items-center gap-2">
                            <div className="w-full rounded-md bg-blue-300">
                                <p className="text-sm text-gray-400 sm:rotate-0">{announcment.title}</p>
                                <p className="text-sm text-gray-400 sm:rotate-0">{announcment.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}