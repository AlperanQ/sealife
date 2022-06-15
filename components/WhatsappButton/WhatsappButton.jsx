import { useTranslations } from "next-intl";
import Link from "next/link";

import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";


const WhatsappButton = ({ boatname, phone }) => {
  const t = useTranslations("Header");
  return (
    <>
      <div className="call-button ">
        <a href={"tel:" + (phone ?? '+905323283867')}>
          <FiPhoneCall color="white" size="30px" className="me-2" />
          <span className="live-support-text">{t("callUs")}</span>
        </a>
      </div>
      <div className="whatsapp-chat d-flex   align-items-center">
        <Link
          href={`https://api.whatsapp.com/send/?phone=${phone ?? "+905323283867"}&text=Merhaba%2C+${
            boatname ?? "hizmetleriniz"
          }+hakk%C4%B1nda+bilgi+almak+istiyorum.&app_absent=0`}
        >
          <div>
            {" "}
            <BsWhatsapp color="white" size="30px" className="" />{" "}
            <span className="live-support-text">{t("whatsAppBtn")}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WhatsappButton;
