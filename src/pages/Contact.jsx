import React from "react";

const Contact = () => {
  const handleSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleSubmit}>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder="Enter you name"
            className="form-control"
          />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Enter you email"
            className="form-control"
          />
          <textarea
            name="message"
            required
            autoComplete="off"
            placeholder="Enter you message"
            className="form-control"
            rows="10"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
