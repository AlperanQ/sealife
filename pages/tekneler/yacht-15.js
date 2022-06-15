import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const SelametDavut = () => <BoatPage boatUrl="yacht-15" />;

export default SelametDavut;
