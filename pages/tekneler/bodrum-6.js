import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const Bodrum6 = () => <BoatPage boatUrl="bodrum-6" />;

export default Bodrum6;
