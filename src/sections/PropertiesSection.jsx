import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/common/SectionHeading";
import { PropertyCard } from "../components/property/PropertyCard";
import { properties } from "../data/properties";

const filters = ["All", "Penthouse", "Villa", "Estate"];

export function PropertiesSection({ limit }) {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(() => {
    const filtered = filter === "All" ? properties : properties.filter((property) => property.type === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <section className="section shell" id="properties">
      <div className="properties-heading">
        <SectionHeading eyebrow="All listings">Curated <em>Estates</em></SectionHeading>
        <div className="filters" role="group" aria-label="Filter properties">
          {filters.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}
        </div>
      </div>
      <div className="property-grid">{visible.map((property) => <PropertyCard key={property.id} property={property} />)}</div>
      {limit && <div className="section-action"><Link className="button button--outline" to="/properties">View all listings</Link></div>}
    </section>
  );
}
