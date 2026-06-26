import "../style/Services.css";

const services = [
  {
    title: "Signature Haircut",
    price: "₹299",
    desc: "Precision cut tailored to your style."
  },
  {
    title: "Haircut + Beard",
    price: "₹499",
    desc: "Complete grooming package."
  },
  {
    title: "Premium Facial",
    price: "₹999",
    desc: "Luxury skin rejuvenation."
  },
  {
    title: "Hair Spa",
    price: "₹799",
    desc: "Deep nourishment and repair."
  },
  {
    title: "Hair Coloring",
    price: "₹1499",
    desc: "Professional coloring service."
  },
  {
    title: "Royal Grooming",
    price: "₹1999",
    desc: "The complete gentleman experience."
  }
];

export default function Services() {
  return (
    <section className="services-page">
      <div className="services-header">
        <span>ALI'S SALOON</span>
        <h1>Our Services</h1>
        <p>Luxury grooming crafted for modern gentlemen.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-box" key={service.title}>
            <h3>{service.title}</h3>
            <div className="service-price">{service.price}</div>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}