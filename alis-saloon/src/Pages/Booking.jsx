import "../style/Booking.css";

export default function Booking() {
  return (
    <section className="booking-page">

      <div className="booking-left">
        <span>BOOK YOUR EXPERIENCE</span>

        <h1>
          Reserve
          <br />
          Your Chair
        </h1>

        <p>
          Schedule your appointment with our master stylists.
        </p>
      </div>

      <div className="booking-right">

        <form className="booking-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>
            <option>Select Service</option>
            <option>Haircut</option>
            <option>Haircut + Beard</option>
            <option>Hair Spa</option>
            <option>Facial</option>
          </select>

          <input type="date" />

          <input type="time" />

          <textarea
            rows="4"
            placeholder="Special Requests"
          />

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>

    </section>
  );
}