import Image from 'next/image';
import Button from './Button';

export default function Footer() {
    return (
        <footer className="mx-64 my-8 bg-gray">
            <div className="flex justify-between [backdrop-filter:blur(100px)]">
                <div className="flex justify-center items-center gap-4">
                    <Image className="my-0" width="50" height="50" src="sesa-logo.svg" alt="SESA Logo" />
                    <Image className="my-0" width="109" height="25" src="logo-text.svg" alt="SESA Logo Text" />
                </div>
                <div className="flex gap-12 items-center">
                    <a className="uppercase text-xl mono my-4" href="#">Team</a>
                    <a className="uppercase text-xl mono my-4" href="#">Events</a>
                    <a className="uppercase text-xl mono my-4" href="#">Resources</a>
                    <a className="uppercase text-xl mono my-4" href="#">Contact</a>
                    <a className="uppercase text-xl mono my-4" href="#">Sponsor</a>
                    <a className="uppercase text-xl mono my-4" href="#">Privacy &amp; Terms</a>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p>&copy; 2014&ndash;{new Date().getFullYear()} uOttawa Software Engineering Student Association (SESA)</p>
                <div className="flex gap-4">
                    <Button href="#" variant='outline' className="!p-3"> <Image width="25" height="25" src="sesa-logo.svg" alt="Instagram Logo" /> </Button>
                    <Button href="#" variant='outline' className="!p-3"> <Image width="25" height="25" src="sesa-logo.svg" alt="Instagram Logo" /> </Button>
                    <Button href="#" variant='outline' className="!p-3"> <Image width="25" height="25" src="sesa-logo.svg" alt="Instagram Logo" /> </Button>
                    <Button href="#" variant='outline' className="!p-3"> <Image width="25" height="25" src="sesa-logo.svg" alt="Instagram Logo" /> </Button>
                    <Button href="#" variant='outline' className="!p-3"> <Image width="25" height="25" src="sesa-logo.svg" alt="Instagram Logo" /> </Button>
                    <Button href="#" variant='outline' className="!p-3"> <Image width="25" height="25" src="sesa-logo.svg" alt="Instagram Logo" /> </Button>
                </div>
            </div>
        </footer>
    );
}
