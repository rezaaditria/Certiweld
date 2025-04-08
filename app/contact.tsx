"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { CallIcon, InstagramIcon } from "@/components/icons";

export const Contact = () => {
  return (
    <>
      <div className="py-12 flex flex-col md:flex-row items-center gap-8 my-6 p-6 rounded-3xl shadow-input">
        <div className="w-full md:w-1/2">
          <iframe
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.87343437022543!2d107.03562565459242!3d-6.267024767194945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e4150e00b75%3A0x1cbc8fdb87c6203c!2sGrand%20Kalimas%2C%20Jl.%20Inspeksi%20Kalimalang%20ruko%20No.a19%2C%20Tambun%2C%20Kec.%20Tambun%20Sel.%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017510!5e0!3m2!1sen!2sid!4v1744030023982!5m2!1sen!2sid"
            width="100%"
            height="350"
            className="border-0 rounded-[30px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold  mb-4">Visit Our Office</h2>
          <p className="text-lg  leading-relaxed">Our office is located at:</p>
          <p className="text-lg  font-extralight mt-2">
            RUKO GRAND KALIMAS, JALAN KYAI H NOER ALI INSPEKSI KALIMALANG A-20
            NOMOR 20, Desa/Kelurahan Jatimulya, Kec. Tambun Selatan, Kab.
            Bekasi, Provinsi Jawa Barat. 17510
          </p>
          <div className="pb-2 pt-6 flex flex-col items-center md:items-start gap-2">
            <span className=" text-sm mb-1">Follow us on Instagram</span>
            <Link
              aria-label="Instagram"
              href={siteConfig.links.insta}
              className="px-4 py-2 flex items-center gap-2"
            >
              <InstagramIcon className="text-default-500" />
              <span className="font-medium">@certiweld</span>
            </Link>
          </div>
          <div className=" flex flex-col md:flex-col-2 items-center md:items-start gap-2">
            <p aria-label="call" className="px-4 py-2  flex items-center gap-2">
              <CallIcon className="text-default-500" />
              <span className="font-medium">+62-8132-4861-055</span>
            </p>
            <p aria-label="call" className="px-4 py-2 flex items-center gap-2">
              <CallIcon className="text-default-500" />
              <span className="font-medium">+62-8132-4861-055</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
