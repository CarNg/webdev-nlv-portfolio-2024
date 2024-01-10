import { getLangingPageData } from "@/lib/api/fetchLandingPage";

export default async function Home() {
  const data = await getLangingPageData();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Night Light Visuals</p>
    </main>
  );
}
