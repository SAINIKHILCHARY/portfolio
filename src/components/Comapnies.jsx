import Marquee from "react-fast-marquee";
// import udemy from "../assets/Udemy-Logo.png";
// import octanet from "../assets/octanet.jpeg";
// import bharat_intern from "../assets/bharat_intern.jpeg";
// import techplement from "../assets/techplement.jpeg";
// import codeclause from "../assets/codeclause.png";
// import ducat from "../assets/ducat.png";
// import internpay from "../assets/internpay.png";
// import internspedia from "../assets/internspedia.png";
// import lgm from "../assets/letsgrowmore.png";
// import nexus from "../assets/nexusbyte.png";
// import oasis from "../assets/oasis.png";
// import prodigy from "../assets/prodigy.png";
// import systemtron from "../assets/systemtron.png";
// import tcsion from "../assets/tcsion.webp";
// import technocolabs from "../assets/technocolabs.png";
// import twilearn from "../assets/twilearn.png";
// import txon from "../assets/txon.png";
// import mentor from "../assets/mentorbox.png";
// import instaPost from "../assets/instaPic.png";
// import { Link } from "react-router-dom";
// import byteXL from "../assets/bytexl.jpeg";

const Comapnies = () => {
  return (
    <div className=" w-full h-full mt-20">
      <h1 className="text-3xl font-semibold lg:text-start md:text-start text-center">
        Companies
      </h1>
      <p className="mt-2 text-lg font-medium text-gray-500 lg:text-start md:text-start text-center">
        My portfolio reflects a journey of continuous learning, growth, and
        dedication to excellence.
      </p>
      <Marquee pauseOnHover={true}>
        <div className="flex flex-row gap-10 p-10 ">
          {/* <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={udemy} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={octanet} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={bharat_intern} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={techplement} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={codeclause} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={byteXL} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={ducat} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={internpay} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={internspedia} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={lgm} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={nexus} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={oasis} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={prodigy} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={systemtron} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={tcsion} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={technocolabs} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={twilearn} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={txon} alt="" className="object-cover w-40" />
            </div>
          </div>
          <div className=" h-full w-full mt-8 rounded-2xl bg-white p-3 flex shadow-xl min-h-60 min-w-60 max-h-60 max-w-60">
            <div className="flex w-full justify-center items-center place-content-center">
              <img src={mentor} alt="" className="object-cover w-40" />
            </div>
          </div> */}
        </div>
      </Marquee>
      {/* Social Media Starts */}
      <div className="w-full h-96 mt-20 lg:flex flex-row gap-10 md:hidden hidden">
        {/* left div */}
        {/* <div className="w-3/5 h-full bg-white rounded-xl shadow-xl flex flex-row">
          <div className=" h-full w-3/5">
            <iframe
              src="https://open.spotify.com/embed/playlist/2cdkBS6JAmaKETJgS6npOU?utm_source=generator"
              width="100%"
              frameBorder={0}
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="h-full rounded-xl rounded-r-none"
            />
          </div>
          <div className="w-2/5 p-5 ">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
                className="w-14"
                alt=""
              />
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-2xl">
                Checkout my playlists on spotify!
              </h1>
            </div>
            <div className="mt-5">
              <p className="text-gray-500 font-semibold">
                Explore my curated Spotify playlist, carefully selected to calm
                your mind and nourish your soul with the captivating depths of
                lo-fi music.
              </p>
            </div>
          </div>
        </div> */}
        {/* right div */}
        {/* <div className="w-1/3 h-full rounded-xl shadow-xl bg-white">
          <div className="w-full h-full">
            <Link
              to="https://www.instagram.com/madupu_sainikhil/"
              target="_blank"
            >
              {" "}
              <img
                src={instaPost}
                alt=""
                className="w-full object-cover rounded-xl max-h-96"
              />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Comapnies;
