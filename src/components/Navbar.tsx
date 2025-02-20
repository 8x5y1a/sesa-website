import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-gray mx-64 my-8 flex justify-between [backdrop-filter:blur(100px)]">
            <div className="flex gap-16">
                <Link href="/">
                    <Image
                        className="my-0"
                        width="50"
                        height="50"
                        src="sesa-logo.svg"
                        alt="SESA Logo"
                    />
                </Link>
                <div className="flex items-center gap-16">
                    <a className="my-4 font-heading text-xl uppercase" href="#">
                        Team
                    </a>
                    <a className="my-4 font-heading text-xl uppercase" href="#">
                        Events
                    </a>
                    <a className="my-4 font-heading text-xl uppercase" href="#">
                        Resources
                    </a>
                    <Link href="/contact-us" className="my-4 font-heading text-xl uppercase">
                        Contact
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <Button href="#" className="font-heading text-xl uppercase" variant="outline">
                    Discord
                </Button>
                <Button href="#" className="font-heading text-xl uppercase">
                    Sponsor
                </Button>
            </div>
        </header>
    );
}
