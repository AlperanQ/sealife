import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const BogazCocugu = () => <BoatPage boatUrl="yacht-5" />;

export default BogazCocugu;
