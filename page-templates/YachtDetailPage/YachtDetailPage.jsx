import { useTranslations } from "next-intl";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import PageLogo from "../../components/PageLogo/PageLogo";
import WhatsappButton from "../../components/WhatsappButton/WhatsappButton";
import Container from "../../components/Container";
import Image from "next/image";
import Link from "next/link";

const YachtDetailPage = ({ images, boat }) => {
  const t = useTranslations("BoatSpecifications");

  return (
    <div className="">
      <Container>
        <WhatsappButton boatname={boat.Name} phone={boat.phone} /> <Contact />
        <Header />
      </Container>
      <div className="margin-top">
        {" "}
        <PageLogo pagename={boat.Name} />
      </div>

      <div className="row mx-0  boat-specifications py-4 ">
        <div className="col-md-4 ">
          <div className="mx-4">
            <div className="text-dark">
              <h2 className=" mb-4 text-center">{t("BoatSpecifications")}</h2>
              <table
                className="table table-striped"
                cellpadding="0"
                cellspacing="0"
              >
                <tbody className="text-dark">
                  <tr>
                    <td className="font-italic"> {t("BoatType")}</td>
                    <td>{t("Motoryacht")}</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("Length")}:</td>
                    <td>
                      {boat.height} {t("Meter")}
                    </td>
                  </tr>

                  <tr>
                    <td className="font-italic">{t("NumberofCabin")}:</td>
                    <td>3</td>
                  </tr>

                  <tr>
                    <td className="font-italic">{t("PassengerCapacity")}:</td>
                    <td>{boat.capacity}</td>
                  </tr>
                  <tr>
                    <td className="font-italic"> {t("PassengerFood")}:</td>
                    <td>{boat.food}</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("Crew")}:</td>
                    <td>{boat.crew}</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("Speed")}:</td>
                    <td>20 Kn/{t("Hour")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-8 container">
          <div className="row my-1 d-flex flex-wrap mx-3">
            {images.map((i) => {
              return (
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4 my-3 px-1 d-flex align-items-center justify-content-center">
                  <a href={i} data-fancybox="gallery" data-caption="">
                    <img
                      src={i}
                      className="card-image "
                      alt=""
                    
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <Link
            href={`https://api.whatsapp.com/send/?phone=${boat.phone ?? '+905323283867'}&text=Merhaba%2C+${
              boat.Name ?? "hizmetleriniz"
            }+hakk%C4%B1nda+bilgi+almak+istiyorum.&app_absent=0`}
          >
            <button type="button" class="btn btn-primary w-auto d-block m-auto">
            {t("Reservation")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YachtDetailPage;
