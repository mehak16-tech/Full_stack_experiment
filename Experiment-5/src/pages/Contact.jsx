function Contact() {
  return (
    <div className="container my-5">

      <h4 className="mb-3">Contact Us</h4>

      <p className="text-muted">
        This page allows users to contact the Product Store for queries,
        support and feedback.
      </p>

      <form className="mt-4" style={{ maxWidth: "500px" }}>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Contact;
