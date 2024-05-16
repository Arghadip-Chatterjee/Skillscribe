import { HoverEffect } from "./components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <main className="bg-slate-950">
            <div className="w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="max-w-4xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </main>
    );
}
export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    // {
    //     title: "Google",
    //     description:
    //         "A multinational technology company that specializes in Internet-related services and products.",
    //     link: "https://google.com",
    // },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    // {
    //     title: "Microsoft",
    //     description:
    //         "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //     link: "https://microsoft.com",
    // },
];
