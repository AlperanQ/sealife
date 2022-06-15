import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const Bodrum7 = () => <BoatPage boatUrl="bodrum-7" />;

export default Bodrum7;
