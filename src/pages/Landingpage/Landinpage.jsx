import BannerHome from "../../components/views/landingpage/BannerHome/BannerHome.jsx";
import BannerHistoria from "../../components/views/landingpage/BannerHistoria/BannerHistoria.jsx";
import BannerPorque from "../../components/views/landingpage/BannerPorque/BannerPorque.jsx";
import BannerAtividades from "../../components/views/landingpage/BannerAtividades/BannerAtividades.jsx";
import Bannerfooter from "../../components/common/Bannerfooter/Bannerfooter.jsx";
import Header from "../../components/views/landingpage/Header/Header.jsx";

const Landinpage = () => {
  return (
    <>
      <Header />
      <BannerHome />
      <BannerHistoria />
      <BannerPorque />
      <BannerAtividades />
      <Bannerfooter />
    </>
  );
};

export default Landinpage;
