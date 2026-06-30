import { ArrowLeft, Bathtub, Bed, MapPin, Ruler } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import { properties } from "../data/properties";

export function PropertyPage() {
  const { propertyId } = useParams();
  const property = properties.find((item) => item.id === propertyId);
  if (!property) return <NotFoundProperty />;
  return (
    <main className="page property-detail">
      <div className="shell">
        <Link className="text-link property-detail__back" to="/properties"><ArrowLeft /> Back to listings</Link>
        <div className="property-detail__hero">
          <img src={property.image} alt={property.title} />
          <div>
            <p className="eyebrow">{property.type} · {property.badge}</p>
            <h1>{property.title}</h1>
            <p className="property-detail__location"><MapPin />{property.location}</p>
            <strong className="property-detail__price">{property.price}</strong>
            <div className="property-detail__specs"><span><Bed />{property.beds} Beds</span><span><Bathtub />{property.baths} Baths</span><span><Ruler />{property.area}</span></div>
            <p className="property-detail__copy">A rare residence shaped by calm proportions, considered materials, and extraordinary views. Private viewings are available by appointment.</p>
            <Link className="button button--primary" to="/contact">Arrange private viewing</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function NotFoundProperty() {
  return <main className="page empty-state shell"><p className="eyebrow">Listing unavailable</p><h1>This property has left the collection.</h1><Link className="button button--primary" to="/properties">Browse current listings</Link></main>;
}
