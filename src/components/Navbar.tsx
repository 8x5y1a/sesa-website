import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="flex justify-between my-8 mx-16 [backdrop-filter:blur(100px)] bg-gray">
            <div className="flex gap-16">
                <Image className="my-0" width="50" height="50" src="sesa-logo.svg" alt="SESA Logo" />
                <div className="flex gap-16 items-center">
                    <a className="uppercase text-xl mono my-4" href="#">Team</a>
                    <a className="uppercase text-xl mono my-4" href="#">Events</a>
                    <a className="uppercase text-xl mono my-4" href="#">Resources</a>
                    <a className="uppercase text-xl mono my-4" href="#">Contact</a>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <a role="button" className="uppercase px-6 py-2 text-xl mono stroke-gradient clip-corner" href="#">Discord</a>
                <a role="button" className="uppercase px-6 py-2 text-xl mono fill-gradient clip-corner" href="#">Sponsor</a>
            </div>
        </header>
    );
}
