import { collection } from "../data/properties";

export function CollectionSection() {
  return (
    <section className="collection section">
      <div className="shell"><p className="eyebrow">More properties</p></div>
      <div className="collection__track">
        {collection.map((item) => (
          <article className="collection-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div><p>{item.city}</p><h3>{item.title}</h3><strong>{item.price}</strong></div>
          </article>
        ))}
      </div>
    </section>
  );
}
