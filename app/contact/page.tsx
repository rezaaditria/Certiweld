import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { InstagramIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <div className="py-12 flex flex-col md:flex-row items-center gap-8 my-12 p-6  bg-gradient-to-l from-gray-100 from-50%  via-gray-100 via-98% to-transparent to-99%  rounded-3xl shadow-input">
      <div className="w-full md:w-1/2">
        <iframe
          title="Our Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2843881564554!2d107.01147317571134!3d-6.226185044865512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ea49d2f718f%3A0x9c5f5e61c116374c!2sJl.%20Agus%20Salim%20No.206%2C%20RT.001%2FRW.008%2C%20Bekasi%20Jaya%2C%20Kec.%20Bekasi%20Tim.%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017112!5e0!3m2!1sen!2sid!4v1743839789430!5m2!1sen!2sid"
          width="100%"
          height="300"
          className="border-0 rounded-2xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Visit Our Office
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our office is located at:
        </p>
        <p className="text-lg text-gray-800 font-medium mt-2">
          Jl. Agus Salim No.206, Bekasi Jaya, Bekasi Timur, Kota Bekasi, Jawa
          Barat 17112
        </p>
        <div className="py-6 flex flex-col items-center md:items-start gap-2">
          <span className="text-gray-600 text-sm mb-1">
            Follow us on Instagram
          </span>
          <Link
            aria-label="Instagram"
            href={siteConfig.links.insta}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2"
          >
            <InstagramIcon className="text-white" />
            <span className="font-medium">@certiweld</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
