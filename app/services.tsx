import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { subtitle, title } from "@/components/primitives";

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center ">
        <h1 className={title({ class: "mb-4" })}>Our Services</h1>
        <p className={subtitle({ class: "mb-12 font-light mt-8 " })}>
          <strong>Certiweld Pro</strong> menyediakan layanan terintegrasi di
          bidang pelatihan dan sertifikasi pengelasan, dirancang untuk memenuhi
          kebutuhan industri dan mendukung peningkatan kompetensi tenaga kerja.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="training" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 md:gap-8 overflow-x-auto min-h-fit rounded-3xl md:rounded-full md:overflow-visible whitespace-nowrap px-2 md:px-0">
            <TabsTrigger
              value="training"
              className="rounded-full text-sm md:text-sm"
            >
              Training & Certification
            </TabsTrigger>
            <TabsTrigger
              value="consulting"
              className="rounded-full text-sm md:text-sm"
            >
              Welding Consultant & Services
            </TabsTrigger>
            <TabsTrigger
              value="individual"
              className="rounded-full text-sm md:text-sm"
            >
              Individual Services
            </TabsTrigger>
          </TabsList>

          {/* Pelatihan & Sertifikasi */}
          <TabsContent value="training">
            <div className="p-6 rounded-xl border w-full  shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Pelatihan & Sertifikasi Kompetensi
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Juru Las / Welder",
                    description:
                      "Pelatihan untuk proses pengelasan seperti SMAW, GTAW, GMAW, dan FCAW. Tersedia uji kompetensi dengan standar nasional (SKKNI) maupun internasional (ISO, ASME, AWS).",
                  },
                  {
                    title: "Welding Inspector",
                    description:
                      "Pelatihan dan sertifikasi WI (Basic, Standard, dan Komprehensif) dengan skema BNSP. Menyediakan In-House Training dan program yang disesuaikan dengan kebutuhan industri.",
                  },
                  {
                    title: "NDT Personel",
                    description:
                      "Pelatihan dan sertifikasi NDT untuk metode UT, MT, PT, RT, dan VT. Cocok untuk industri migas, konstruksi, dan manufaktur.",
                  },
                  {
                    title: "Pipe Fitter",
                    description:
                      "Pelatihan penyetelan, penyambungan, dan instalasi pipa di proyek konstruksi seperti migas, pembangkit listrik, dan pabrik.",
                  },
                ].map((item, index) => (
                  <li key={index} className="border-b pb-4">
                    <strong>🔹 {item.title}</strong>
                    <p className="text-sm mt-2">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          {/* Welding Consultant & Services */}
          <TabsContent value="consulting">
            <div className="p-6 rounded-xl border w-full  shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Welding Consultant & Services
              </h2>
              {[
                {
                  title:
                    "Pembuatan Welding Procedure Specification (WPS) & PQR",
                  items: [
                    "Identifikasi parameter pengelasan sesuai proyek",
                    "Pembuatan WPS lengkap & terstruktur",
                    "Penyusunan PQR berdasarkan uji mekanik & visual",
                    "Pengesahan WPS & PQR (Kemnaker/Migas)",
                  ],
                },
                {
                  title: "Pelaksanaan WQT (Welder Qualification Test)",
                  items: [
                    "Penyediaan material & prosedur sesuai standar (ASME, AWS, ISO)",
                    "Pengawasan oleh Welding Inspector bersertifikat internasional",
                    "Pengujian visual & non-destruktif jika diperlukan",
                    "Dokumentasi hasil uji & penerbitan sertifikat",
                  ],
                },
                {
                  title: "Jasa Inspeksi Kualitas Hasil Pengelasan",
                  items: [
                    "Visual Welding Inspection (VT) untuk evaluasi hasil",
                    "Non-Destructive Testing (UT, MT, PT, RT)",
                    "Verifikasi kesesuaian terhadap WPS & PQR",
                    "Pemeriksaan dimensi & potensi cacat las",
                    "Dokumentasi hasil inspeksi & rekomendasi perbaikan",
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="  mb-2">
                    <strong>🔹 {section.title}</strong>
                  </h3>
                  <ul className="list-disc border-b pb-4 ml-6 text-sm">
                    {section.items.map((item, idx) => (
                      <li className="" key={idx}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Individual Services */}
          <TabsContent value="individual">
            <div className="p-6 rounded-xl border w-full shadow-md">
              <h2 className="text-xl font-semibold ">Individual Services</h2>
              <p className="py-6 text-justify">
                <strong>Certiweld Pro </strong>
                menyediakan layanan khusus untuk peserta perorangan yang ingin
                meningkatkan kompetensi, memperoleh sertifikasi resmi, dan
                memperluas peluang karier di bidang pengelasan dan inspeksi
                teknik. Layanan ini terbuka untuk semua kalangan, baik pemula
                maupun profesional.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Pelatihan Keterampilan Las",
                    description:
                      " Pelatihan praktik dan teori untuk berbagai proses pengelasan (SMAW,GTAW, GMAW, FCAW), disesuaikan dengan level peserta.",
                  },
                  {
                    title:
                      "Sertifikasi Juru Las/Welder (Welder Certification/Renewal certification)",
                    description:
                      "Uji kompetensi resmi untuk mendapatkan sertifikat juru las dari lembaga sertifikasi profesi (LSP) yang diakui.dan juga melayani perpanjangan Sertifikat BNSP.",
                  },
                  {
                    title:
                      "Pelatihan & Sertifikasi Welding Inspector & NDT (Non-Destructive Testing)",
                    description:
                      "Menyediakan pelatihan dan sertifikasi WI (Basic, Standard, dan Komprehensif) serta NDT untuk berbagai metode seperti UT, MT, PT, RT, dan VT. Cocok untuk kebutuhan industri migas, konstruksi, dan manufaktur.",
                  },
                  {
                    title: "Konsultasi Karier & Pendampingan Teknis",
                    description:
                      "Pendampingan dalam merencanakan jalur karier, peningkatan skill, serta persiapan menghadapi dunia kerja industri.",
                  },
                  {
                    title: "Pembelajaran Hybrid & Online",
                    description:
                      "Akses materi teori secara daring dan fleksibel, dilengkapi sesi praktik terjadwal di workshop terdekat.",
                  },
                ].map((item, index) => (
                  <li key={index} className="border-b pb-4">
                    <strong>🔹 {item.title}</strong>
                    <p className="text-sm mt-2">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
