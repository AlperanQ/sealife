import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const Bodrum5 = () => <BoatPage boatUrl="bodrum-5" />;

export default Bodrum5;
