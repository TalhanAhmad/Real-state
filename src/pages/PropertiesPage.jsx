import { PropertiesSection } from "../sections/PropertiesSection";

export function PropertiesPage() {
  return (
    <main className="page">
      <header className="page-hero shell"><p className="eyebrow">Private collection</p><h1>Exceptional homes,<br /><em>personally curated.</em></h1><p>Explore a considered selection of landmark residences across the world’s most desirable addresses.</p></header>
      <PropertiesSection />
    </main>
  );
}
