import { useTranslations } from "next-intl";
import Head from "next/head";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import ServicePage from "../../page-templates/ServicePage";

import { servicesSubMenuItems } from "../../components/Header";

let ServicesRoute = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].href;

let ServicesTitle = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].title;

const businessLunch = ({}) => {
  const t = useTranslations("BusinessLunch");
  return (
    <>
      <Head>
        <title>İş Yemeği ve Özel Toplantılar| Sealife Yat Kiralama</title>
        <meta name="description" content="İstanbul Boğaz Turu hakkında" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicePage
        lang="tr"
        route={ServicesRoute}
        servicespagetitle={t("BusinessLunchTitle")}
        servicespagetext={t("BusinessLunchText")}
        carousel={
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <div className="banner-images">
                <Image
                  src="/images/hizmetler/toplantilar/1.jpg"
                  className=""
                  alt="..."
                  width="750"
                  height="650"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="banner-images">
                <Image
                  src="/images/hizmetler/toplantilar/2.jpg"
                  className=""
                  alt="..."
                  width="750"
                  height="560"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        }
      />
    </>
  );
};

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

export default businessLunch;
