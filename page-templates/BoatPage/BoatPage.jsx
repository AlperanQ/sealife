import {
  BoatPageHead,
  BoatData,
  Container,
  Contact,
  Header,
  Footer,
  YachtDetailPage,
  WhatsappButton,
} from ".";

const BoatPage = ({ boatUrl }) => {
  // Get boat data from url prop
  const boat = BoatData.filter((item) => item.url === boatUrl)[0];
  return (
    <>
      <BoatPageHead boat={boat} />
      <main>
        <Container>
          <WhatsappButton phone={boat.phone} />
          <Contact />
          <Header />
        </Container>
        <YachtDetailPage images={boat.DetailImages} boat={boat} />
        <Footer />
      </main>
    </>
  );
};

export default BoatPage;
