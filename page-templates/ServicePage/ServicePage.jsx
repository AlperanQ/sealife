import { Header } from ".";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer/Footer";
import PageLogo from "../../components/PageLogo/PageLogo";
import { Carousel } from "react-bootstrap";

const ServicePage = ({ servicespagetitle, servicespagetext, img }) => {
  const images = img;
  return (
    <main className="">
      <div className="top-section container">
        <Contact />
        <Header />
        <PageLogo pagename={servicespagetitle} />
        <p className="servicespagetext">{servicespagetext}</p>
      </div>
      <div className="images flex-wrap">
        {" "}
        <Carousel fade indicators={false} controls={false}>
          {images &&
            images?.map((item) => (
              <Carousel.Item>
                <img src={item} alt="" className="service-image" />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>

      <Footer />
    </main>
  );
};
export default ServicePage;
