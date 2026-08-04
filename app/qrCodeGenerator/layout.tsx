import Navbar from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Suspense } from "react";
import { SkeletonQr } from "@/ui/skeletonQr";
import FooterSection from "@/ui/footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "25rem",
            "--sidebar-width-mobile": "25rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <main className={`w-full ${roboto.className}`}>
          <SidebarTrigger />
          <Navbar />
          <Suspense fallback={<SkeletonQr />}>{children}</Suspense>
          <FooterSection />
        </main>
      </SidebarProvider>
    </>
  );
}
