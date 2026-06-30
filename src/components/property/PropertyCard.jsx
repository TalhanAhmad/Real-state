import { ArrowUpRight, Bathtub, Bed, Ruler } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <Link className="property-card__media" to={`/properties/${property.id}`} aria-label={`View ${property.title}`}>
        <img src={property.image} alt={`${property.title} in ${property.location}`} />
        <span className="property-card__badge">{property.badge}</span>
      </Link>
      <div className="property-card__body">
        <p className="property-card__location">{property.location}</p>
        <h3>{property.title}</h3>
        <div className="property-card__specs">
          <span><Bed />{property.beds} Beds</span>
          <span><Bathtub />{property.baths} Baths</span>
          <span><Ruler />{property.area}</span>
        </div>
        <div className="property-card__footer">
          <strong>{property.price} <small>/ {property.terms}</small></strong>
          <Link className="circle-link" to={`/properties/${property.id}`} aria-label={`Open ${property.title}`}><ArrowUpRight /></Link>
        </div>
      </div>
    </article>
  );
}
