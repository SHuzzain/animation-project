import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

type Props = {};
const parallaxImages: string[] = [
  "hill1.png",
  "hill2.png",
  "hill3.png",
  "hill4.png",
  "hill5.png",
  "tree.png",
  "plant.png",
  "leaf.png",
] as const;

function HomePage({}: Props) {
  const homeRef = useRef(null);

  const { scrollY } = useScroll();

  const h1 = useTransform(scrollY, [0, 600], [0, 700]);
  const hills1 = useTransform(scrollY, [0, 700], [0, 500]);

  const leafx = useTransform(scrollY, [0, 700], [0, 800]);
  const leafy = useTransform(scrollY, [0, 700], [0, -800]);

  return (
    <>
      <section className="relative flex justify-center items-center h-full overflow-hidden">
        <motion.img
          style={{
            y: hills1,
          }}
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[0])}
          alt={"hills1"}
        />

        <motion.img
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[1])}
          alt={"hills2"}
        />

        <motion.img
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[2])}
          alt={"hills3"}
        />

        <motion.img
          initial={{
            x: -100,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            x: leafy,
          }}
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[3])}
          alt={"hills4"}
        />

        <motion.img
          style={{
            x: leafx,
          }}
          initial={{
            y: 100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[4])}
          alt={"hills5"}
        />

        <motion.img
          initial={{
            y: 100,
            x: -100,
          }}
          animate={{
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[5])}
          alt={"tree"}
        />

        <motion.h2
          initial={{
            y: 300,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          style={{ y: h1, x: -50 }}
          className="absolute text-shadow-xl font-poppins font-semibold text-8xl text-white"
        >
          Parallax Scroll
        </motion.h2>

        <motion.img
          initial={{
            y: 100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[6])}
          alt={"plant"}
        />
        <motion.img
          style={{
            x: leafx,
            y: leafy,
          }}
          initial={{
            x: 80,
            y: 0,
          }}
          animate={{
            x: 0,
            y: -100,
          }}
          transition={{
            duration: 0.5,
          }}
          className="parallax-images"
          src={"../../images/".concat(parallaxImages[7])}
          alt={"leaf"}
        />
      </section>

      <motion.section className="relative bg-[#003329] p-20 overflow-hidden">
        <motion.h2
          initial={{
            opacity: 0,
            x: 100,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 2,
          }}
          className="mb-10 font-bold text-7xl text-white"
        >
          Parallax Scolling Magic
        </motion.h2>

        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse magnam
          quibusdam voluptates quia, blanditiis veniam. Harum sit vel iusto
          eveniet perferendis unde, voluptate numquam. Modi ipsa rem doloremque
          quod fuga. Aliquam itaque eligendi quasi. Dolor quasi similique
          eligendi praesentium temporibus, ratione voluptatum iste veritatis
          distinctio libero molestiae sequi aliquam reiciendis repellendus
          excepturi ex exercitationem maiores totam animi asperiores architecto
          porro. Labore cum omnis quidem ea perferendis placeat laborum. Animi
          placeat aliquam necessitatibus. Voluptatem rerum a consequatur
          molestiae quos in, voluptate, repellendus reprehenderit corporis iure
          debitis cupiditate ratione maxime explicabo velit! Fuga illum, numquam
          consequatur nulla architecto similique veniam distinctio quae quis
          autem commodi unde magni aliquid laborum dicta fugiat! Incidunt magni
          optio cupiditate vel! Repellat sed doloribus hic eveniet iste. Dicta
          numquam sunt dignissimos enim odio optio laborum consequatur culpa
          nulla placeat asperiores quam sed necessitatibus, aut, fugit nemo
          velit cum voluptates veritatis tenetur dolorem sapiente modi aliquid?
          Culpa, corporis. Ipsum assumenda molestias amet mollitia, architecto
          nisi. Quis iste molestiae eligendi dolores quia iusto illum explicabo
          dolore dolor. Eveniet molestias cupiditate consequatur iusto quasi
          sapiente ratione officiis earum perspiciatis quas? Veniam quibusdam
          sed deleniti voluptas. Temporibus, saepe. Provident laudantium
          dignissimos, soluta nostrum natus dolorum minima dolorem expedita
          consequatur perspiciatis eveniet voluptate ipsa, vel, velit quae. Sit
          voluptates impedit inventore nemo? Voluptates dolores autem voluptas
          minima, ipsum in sapiente labore delectus. Voluptatum impedit
          voluptatibus dolorum tempore aspernatur magnam laudantium, odit non
          error, voluptate, distinctio aliquam at obcaecati quas vero fugit hic.
          Nostrum natus voluptatem porro voluptate, architecto quis nobis nemo
          ipsam saepe consequatur exercitationem, magnam asperiores. Quaerat
          perspiciatis cum sint ipsum, aperiam nostrum veritatis veniam! Facilis
          commodi qui repellendus. Non, nobis. Exercitationem iure excepturi
          ipsum iste vero dicta ipsam unde totam sint aperiam, ut in ab nihil
          fugiat. Id veritatis nemo vero magnam accusamus iure harum ullam
          impedit vitae ratione. Excepturi? Est tenetur in omnis praesentium
          totam at consequuntur fugit nisi exercitationem magni quis laudantium
          modi, molestiae vero aliquam itaque officia nostrum enim culpa
          similique commodi minus vel! Corporis, reprehenderit? Optio! Error
          itaque laudantium ea esse aliquid similique dolore soluta inventore
          rerum totam eos molestiae quos voluptatum voluptate placeat odio
          quibusdam quaerat aspernatur illum, adipisci, consectetur quod minima
          quas nulla? Optio. In, odio culpa. Ducimus eius soluta nam dolorem
          maxime id accusantium unde accusamus corrupti, eaque laudantium
          adipisci suscipit hic, repudiandae deleniti voluptate. Vero cumque
          dicta cupiditate nesciunt in quod illum. Vero, dignissimos temporibus.
          Numquam dolorem eos provident asperiores, mollitia ipsa in, quas ab
          ratione nostrum soluta ipsum. Officiis pariatur natus, corrupti
          doloremque nihil consequatur, id ut necessitatibus tempora autem
          iusto? Ratione vitae, velit, aut nisi provident laudantium animi harum
          placeat maxime temporibus dolore. Sit facilis, impedit nesciunt sed
          earum debitis culpa quia suscipit fuga eaque id adipisci sapiente
          consequuntur corporis. Aperiam repellat dolorem quae dolorum obcaecati
          sed nobis. Corrupti, non ducimus. Sit corporis sed debitis, mollitia
          doloremque asperiores nostrum, officia magnam harum optio aperiam
          minima ullam repellendus placeat aut expedita? Libero, ipsum pariatur
          sapiente blanditiis tempore autem molestiae rem beatae veniam
          assumenda, illo natus minus nulla quidem ipsa ad voluptate corporis ea
          quos sed distinctio alias. Eos deserunt facere odit. Ex velit beatae
          delectus aut magni voluptate eum facere officiis obcaecati libero
          cupiditate molestias molestiae ipsam, suscipit quos dignissimos illo
          rem sunt? Dolorem ab molestias aliquid non voluptate placeat! Tenetur.
          Obcaecati veritatis minus quibusdam voluptatum ex quidem facilis sit
          voluptates in fugiat asperiores fuga corrupti eos quod, provident
          rerum aperiam sequi mollitia. Aut, corporis laborum natus ex et
          dolorum at! Maiores debitis, cum aut iste amet, sunt alias deserunt
          veritatis dolore possimus repudiandae consequatur? Corrupti doloribus
          aliquam velit accusantium fuga aut, perferendis esse tempora quo minus
          commodi aperiam totam? Porro. Saepe necessitatibus aspernatur at eos
          amet culpa veniam modi in itaque, hic maxime, aliquid quos eveniet
          repellat ea minus molestias. Temporibus dolore consequuntur earum
          veritatis magnam quasi quas cum vitae. Aut dolor qui sapiente adipisci
          voluptate tempora eaque officia quod, soluta hic numquam, quisquam
          animi magnam minus velit nam fugiat mollitia dolorem aperiam
          repellendus placeat! Repudiandae maxime recusandae ipsa cumque! Et
          velit earum enim reiciendis commodi labore qui ipsa, corporis cum
          praesentium voluptatum dolore sequi voluptatem ex explicabo ab dicta
          exercitationem nemo incidunt, autem dignissimos. Molestias, quaerat
          ratione. Magnam, vero. Possimus perspiciatis nisi exercitationem. Esse
          perspiciatis accusamus culpa ut qui totam placeat vitae neque libero
          ab necessitatibus inventore excepturi laudantium nisi exercitationem
          obcaecati, aliquam nam et voluptatum enim est officiis!
        </p>
      </motion.section>
    </>
  );
}

export default HomePage;
