import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import nasbak from "./assets/img/nasbak.jpeg";
import risol from "./assets/img/risol.jpg";
import pudot from "./assets/img/pudot.png";
import thaitea from "./assets/img/thaitea.jpg";
import stock1 from "./assets/img/stock-1.jpg";
import stock2 from "./assets/img/stock-2.jpg";
import MenuBox from "./components/MenuBox";

function App() {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNavbarOpacity = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener("scroll", changeNavbarOpacity);
  return (
    <>
      <nav
        className={`fixed top-0 z-10 grid w-full grid-flow-col bg-white py-4 px-10 ${
          scrollNav && `bg-transparent`
        } transition-colors duration-300`}
      >
        <div className="flex items-center">
          <a
            href="#top"
            className={`rounded-xl px-3 py-1 text-3xl font-bold transition-colors duration-300 ${
              scrollNav ? `bg-black text-white` : `text-black`
            }`}
          >
            Qta
          </a>
        </div>
        <div className="flex items-center justify-end">
          <a
            href="#about"
            className={`rounded-xl px-5 py-2 transition-colors duration-300 hover:bg-zinc-900 hover:text-white ${
              scrollNav ? `text-white` : `text-black`
            }`}
          >
            About
          </a>
          <a
            href="#menu"
            className={`rounded-xl px-5 py-2 transition-colors duration-300 hover:bg-zinc-900 hover:text-white ${
              scrollNav ? `text-white` : `text-black`
            }`}
          >
            Menu
          </a>
          <a
            href="#contact"
            className={`rounded-xl px-5 py-2 transition-colors duration-300 hover:bg-zinc-900 hover:text-white ${
              scrollNav ? `text-white` : `text-black`
            }`}
          >
            Contact
          </a>
        </div>
      </nav>
      <main className="bg-black">
        <motion.div
          id="top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: true }}
          className='flex h-[102vh] flex-col items-center justify-center gap-3 bg-[url("./assets/img/bg1-100.jpg")] from-transparent to-black bg-cover bg-bottom bg-no-repeat p-5'
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl font-bold text-white"
          >
            Qta
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-bold text-white"
          >
            Best food waiting for your belly
          </motion.h1>
        </motion.div>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: true }}
          className="py-5 px-10"
          id="about"
        >
          <h1 className="pb-5 text-3xl font-bold text-white">About Us</h1>
          <img
            src={stock2}
            alt="Stock Images"
            className="h-56 w-full rounded-xl object-cover"
          />
          <p className="pt-2 text-center text-xl font-bold text-white">
            Dapoer Qta adalah usaha kuliner yang berdedikasi untuk menyajikan
            makanan dan minuman berkualitas tinggi yang memanjakan lidah
            pelanggan kami.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-flow-col place-items-center gap-5 pt-10"
          >
            <img
              src={stock1}
              alt="Stock"
              className="h-[60vh] w-full rounded-xl object-cover"
            />
            <p className="text-xl text-white">
              Tim kami yang berdedikasi akan memastikan pelayanan yang cepat dan
              ramah, serta membantu memenuhi kebutuhan dan preferensi makan
              pelanggan kami. Kami juga terus berinovasi dan menambah menu baru
              untuk menjaga variasi dan memberikan pilihan yang lebih banyak
              bagi pelanggan kami. Dengan bahan-bahan berkualitas dan resep
              tradisional yang dipoles, kami memastikan setiap hidangan yang
              kami sajikan memiliki cita rasa yang unik dan memuaskan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-flow-col place-items-center gap-5 pt-5"
          >
            <p className="text-xl text-white">
              Selain itu, kami memastikan bahwa setiap hidangan yang kami
              sajikan dibuat dengan bahan-bahan berkualitas dan diproses dengan
              baik untuk memastikan kesegaran dan keamanan makanan. Kami sangat
              menghargai dukungan pelanggan kami dan berusaha untuk terus
              meningkatkan pengalaman makan mereka. Datanglah dan rasakan
              sensasi makan yang luar biasa bersama kami!
            </p>
            <img
              src={stock2}
              alt="Stock"
              className="h-[60vh] w-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.section>
        <section className="bg-white py-5 px-10" id="menu">
          <h1 className="pb-5 text-3xl font-bold">Featured Menu</h1>
          <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-4">
            <MenuBox
              delay={0}
              favorite={true}
              image={nasbak}
              name="Nasi Bakar"
              desc="Nasi lezat berisi yang dibungkus dalam daun pisang dan dibakar hingga matang"
              price="20.000"
            />
            <MenuBox
              delay={0.2}
              favorite={true}
              image={thaitea}
              name="Thai Tea"
              desc="Minuman berwarna orange-kemerahan yang terbuat dari teh hitam, kondensed milk, dan rempah-rempah"
              price="15.000"
            />
            <MenuBox
              delay={0.4}
              image={pudot}
              name="Pudding Sedot"
              desc="Pudding lembut aneka rasa"
              price="15.000"
            />
            <MenuBox
              delay={0.6}
              image={risol}
              name="Risoles"
              desc="Hidangan adonan tepung kulit yang diisi dengan daging sapi, keju, sayuran, dan rempah-rempah. Diolah dengan bahan berkualitas dan memiliki cita rasa lezat dan renyah"
              price="5.000"
            />
          </div>
        </section>
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="py-5 px-10"
          id="contact"
        >
          <h1 className="pb-5 text-3xl font-bold text-white">Contact Us</h1>
          <div className="grid h-[150vh] grid-cols-1 divide-x-2 divide-zinc-600 rounded-xl border border-zinc-600 bg-zinc-900 md:h-[70vh] md:grid-cols-2">
            <div className="w-full py-3 px-5">
              <h1 className="text-xl text-white">Socials</h1>
              <div className="flex h-full w-full flex-col items-center justify-center gap-5">
                <FaPhone color="white" className="h-24 w-24" />
                <span className="text-2xl text-white">+6281298809651</span>
                <div className="flex gap-3">
                  <a
                    href="#wa"
                    className="rounded-xl border border-zinc-600 p-2 transition-colors hover:bg-green-600"
                  >
                    <FaWhatsapp color="white" className="h-12 w-12" />
                  </a>
                  <a
                    href="#insta"
                    className="rounded-xl border border-zinc-600 p-2 transition-colors hover:bg-purple-600"
                  >
                    <FaInstagram color="white" className="h-12 w-12" />
                  </a>
                </div>
              </div>
            </div>
            <div className="h-full w-full py-3 px-5">
              <h1 className="text-xl text-white">Location</h1>
              <div className="flex h-full items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.9536148206362!2d106.9152504587219!3d-6.275927200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d4a73f744d9%3A0xa772562d6ee41a4!2sGg.%20Mangga%20I%20No.24%2C%20RT.001%2FRW.014%2C%20Jatiwaringin%2C%20Kec.%20Pd.%20Gede%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017411!5e0!3m2!1sen!2sid!4v1675751436787!5m2!1sen!2sid"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-5/6 w-full rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  );
}

export default App;
