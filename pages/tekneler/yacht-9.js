import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const WhiteHorse = () => <BoatPage boatUrl="yacht-9" />;

export default WhiteHorse;
