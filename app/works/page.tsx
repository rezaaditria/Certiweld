import { title } from "@/components/primitives";

import { WeldingServices } from "@/components/WeldingServices";
import { Certification } from "@/components/Certification";

export default function WorksPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto">
      <div className="py-8">
        <h1 className={title()}>Welding Services</h1>
      </div>
      <WeldingServices />
      <div className="py-8">
        <h1 className={title()}>Welding Training & Certification</h1>
      </div>
      <Certification />
    </section>
  );
}
