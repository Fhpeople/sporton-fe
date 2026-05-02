import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white">
      <div className="container mx-auto flex justify-between pt-10 pb-16 px-20">
        <div className="w-96">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={150}
            height={44}
          />
          <p className="mt-6 text-sm">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="w-80 grid grid-cols-2">
          <div className="flex gap-5 flex-col text-sm">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-5 flex-col text-sm">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-4.5 flex justify-between px-20 text-sm">
          <div>SportsOn © 2025 All Rights Reserverd.</div>

          <div className="grid grid-cols-2 w-80">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;