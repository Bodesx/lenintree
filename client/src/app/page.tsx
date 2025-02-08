import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";
import { MarqueeDemo } from "@/components/testimonia";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <div  >
 <MarqueeDemo/>
      </div>
     
      <Footer />
    </div>
  );
}
