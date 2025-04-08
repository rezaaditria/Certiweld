import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Sebagai CEO Certiweld Pro Indonesia, saya percaya bahwa kualitas sumber daya manusia adalah fondasi utama dalam membangun industri yang tangguh dan berdaya saing. Di tengah dinamika global dan tuntutan sertifikasi kompetensi yang semakin tinggi, kehadiran layanan pelatihan dan sertitikasi yang kredibel menjadi kebutuhan strategis.",
      name: "DIWAN ALI, S.T , IWIP",
      designation: " CEO Certiweld Pro Indonesia",
      src: "/hero/CEO.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
