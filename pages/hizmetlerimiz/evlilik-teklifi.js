import { useTranslations } from "next-intl";
import Head from "next/head";

import ServicePage from "../../page-templates/ServicePage";

import { servicesSubMenuItems } from "../../components/Header";

let ServicesRoute = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].href;

let ServicesTitle = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].title;

const images = [
  "/images/hizmetler/evlilik-teklifi/evlilik-teklifi-1.jpeg",
  "/images/hizmetler/evlilik-teklifi/evlilik-teklifi-2.jpeg",
  "/images/hizmetler/evlilik-teklifi/evlilik-teklifi-3.jpeg",
  "/images/hizmetler/evlilik-teklifi/evlilik-teklifi-4.jpeg",
  "/images/hizmetler/evlilik-teklifi/evlilik-teklifi-5.jpeg",
];

const evlilikTeklifi = ({}) => {
  const t = useTranslations("MarriageProposal");
  return (
    <>
      <Head>
        <title>Evlilik Teklifi | Sealife Yat Kiralama</title>
        <meta name="description" content="İstanbul Boğaz Turu hakkında" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicePage
        lang="tr"
        route={ServicesRoute}
        servicespagetitle={t("MarriageProposalTitle")}
        servicespagetext={t("MarriageProposalText")}
        img={images}
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

export default evlilikTeklifi;
