import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
    return (
        <header className="flex justify-between mx-64 my-8 [backdrop-filter:blur(100px)] bg-gray">
            <div className="flex gap-16">
                <Image className="my-0" width="50" height="50" src="sesa-logo.svg" alt="SESA Logo" />
                <div className="flex gap-16 items-center">
                    <a className="uppercase text-xl font-mono my-4" href="#">Team</a>
                    <a className="uppercase text-xl font-mono my-4" href="#">Events</a>
                    <a className="uppercase text-xl font-mono my-4" href="#">Resources</a>
                    <a className="uppercase text-xl font-mono my-4" href="#">Contact</a>
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <Button href="#" className="uppercase font-mono text-xl" variant='outline'>Discord</Button>
                <Button href="#" className="uppercase font-mono text-xl">Sponsor</Button>
            </div>
        </header>
    );
}
