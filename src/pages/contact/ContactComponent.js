import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import ContactImg from "./ContactImg.js";
import emailjs from "emailjs-com";

emailjs.init(process.env.REACT_APP_PUBLIC_KEY);

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      isSubmitting: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, phone, email, message } = this.state;
    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          phone: phone,
          message: message,
          to_email: "akilaramaesh1910@gmail.com",
        }
      );

      this.setState({
        isSubmitting: false,
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Error sending message: ${error.message}`);
    }
  };
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <ContactImg theme={theme} />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <div className="contact-form-div">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" style={{ color: theme.text }}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        placeholder="Enter Your Name"
                        required
                        style={{
                          backgroundColor: theme.expTxtColor,
                          color: theme.splashBg,
                          borderColor: theme.secondaryText,
                          outline: "none",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name" style={{ color: theme.text }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        placeholder="Enter Your Phone Number"
                        // required
                        pattern="[0-9]{10}"
                        style={{
                          backgroundColor: theme.expTxtColor,
                          color: theme.splashBg,
                          borderColor: theme.secondaryText,
                          outline: "none",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name" style={{ color: theme.text }}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="Enter Your Email"
                        required
                        style={{
                          backgroundColor: theme.expTxtColor,
                          color: theme.splashBg,
                          borderColor: theme.secondaryText,
                          outline: "none",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" style={{ color: theme.text }}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                        placeholder="~~~~~ Give me feedback ~~~~~"
                        style={{
                          backgroundColor: theme.expTxtColor,
                          color: theme.splashBg,
                          borderColor: theme.secondaryText,
                          outline: "none",
                        }}
                      />
                    </div>
                    <div className="submit-button-container">
                      <button
                        type="submit"
                        className="main-button"
                        disabled={this.state.compImgHighlight}
                        style={{
                          backgroundColor: theme.highlight,
                          color: theme.text,
                          padding: "12px 30px",
                          borderRadius: "5px",
                          border: `1px solid ${theme.text}`,
                          transition:
                            "transform 0.2s ease-in-out, background-color 0.2s ease",
                          cursor: "pointer",
                          textDecoration: "none",
                          boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "5px 5px 15px rgba(0, 0, 0, 0.3)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow =
                            "3px 3px 10px rgba(0, 0, 0, 0.2)";
                        }}
                      >
                        {this.state.isSubmitting
                          ? "Sending..."
                          : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
