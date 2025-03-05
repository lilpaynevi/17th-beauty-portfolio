import Image from "next/image";
import "./page.css";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { comments } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Header from "@/components/global/Header";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 max-w-max">
      <Navbar />
      <Header />

      <div className="CustomMarkdown InfosShop mx-auto" style={{
        marginLeft: '10%',
        marginRight: '10%',
      }}>
        {/* <div className="CustomMarkdown--Cols col-1 InfosShop--Cols">
          <h3 className="text-4xl">17th beauty</h3>
          <span className="text-xl text-[#7b6a58]">
            Le salon de beauté parisien par excellence !
          </span>
          <Image
            src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1667380977/golden_hr.svg"
            alt="17th Beauty"
            width={500}
            height={100}
          />
          <span className="text-xl text-[#7b6a58]">
            Vous cherchez un salon de coiffure à proximité de chez vous...
          </span>
          <div className="text-xl my-5">
            <span className="text-xl text-[#7b6a58] my-4">
              <strong>17th Beauty</strong> est bien plus qu&lsquo;un simple{" "}
              <strong>institut de beauté</strong>, c&lsquo;est un véritable
              temple dédié à la sophistication et à l&lsquo;excellence ! Niché
              entre la majestueuse <strong>place de Wagram</strong> et la
              charmante <strong>porte d&lsquo;Asnières</strong> à proximité de
              l&lsquo;avenue des <strong>Champs-Elysées</strong>. Cet{" "}
              <strong>havre de beauté</strong> se trouve à quelques pas
              seulement{" "}
              <strong>
                des stations de métro Pont Cardinet (ligne 14) et Péreire
                Levallois (lignes C et 3)
              </strong>
              , dans <strong>17e arrondissement de Paris</strong> pour vous
              faire vivre une expérience esthétique inoubliable.
            </span>
          </div>

          <div className="text-xl text-[#7b6a58]">
            <p>
              <span className="text-xl text-[#7b6a58]">
                C&lsquo;est ici, que <strong>Selma</strong> vous ouvre les
                portes d&lsquo;un monde où la beauté est élevée au rang d
                &lsquo;art. Laissez-vous choyer dans un cadre enchanteur, où
                chaque détail est pensé pour{" "}
                <strong>sublimer vos mains, vos pieds, vos cheveux</strong>...
              </span>
            </p>
          </div>
          <div className="my-11 w-full">
            <a
              href="https://widget.treatwell.fr/salon/shay-beauty-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-or px-11 py-4 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
            >
              RÉSERVER
            </a>
          </div>
        </div> */}
        <li className="CustomMarkdown--Cols col-1 InfosShop--Cols">
          <h2>17TH BEAUTY</h2>
          <h4 className="my-4">Le salon de beauté parisien par excellence !</h4>
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1667380977/golden_hr.svg"
              alt="17th Beauty"
              width={500}
              height={100}
            />
          </p>
          <pre className="hidden md:block">
            <code className="my-4">
              Vous cherchez un salon de coiffure à proximité de chez vous...
            </code>
          </pre>
          <p className="my-4">
            <strong>17th Beauty</strong> est bien plus qu&apos;un simple{" "}
            <strong>institut de beauté</strong>, c&apos;est un véritable temple dédié
            à la sophistication et à l&apos;excellence ! Niché entre la majestueuse{" "}
            <strong>place de Wagram</strong> et la charmante{" "}
            <strong>porte d&apos;Asnières</strong> à proximité de l&apos;avenue des{" "}
            <strong>Champs-Elysées</strong>. Cet{" "}
            <strong>havre de beauté</strong> se trouve à quelques pas seulement{" "}
            <strong>
              des stations de métro Pont Cardinet (ligne 14) et Péreire
              Levallois (lignes C et 3)
            </strong>
            , dans <strong>17e arrondissement de Paris</strong> pour vous faire
            vivre une expérience esthétique inoubliable.
          </p>
          <p>
            C&apos;est ici, que <strong>Selma</strong> vous ouvre les portes d&apos;un
            monde où la beauté est élevée au rang d&apos;art. Laissez-vous choyer
            dans un cadre enchanteur, où chaque détail est pensé pour{" "}
            <strong>sublimer vos mains, vos pieds, vos cheveux</strong>...
          </p>
          <h5>
            <a
              href="https://widget.treatwell.fr/salon/shay-beauty-2/?utm_source=partner&amp;amp;utm_medium=salon-site-embedded-book-now-widget"
              target="_blank"
              rel="noopener noreferrer"
            >
              RÉSERVER
            </a>
          </h5>
        </li>
      </div>

      <div style={{ width: "100%", position: "relative", height: "300px" }}>
        <Image
          src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1709107552/SHAY_BEAUTY_bandeau_contenu.jpg"
          alt="17th Beauty"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <ul className="CustomMarkdown--Cols col-1 text-[#7b6a58]">
        <li className="CustomMarkdown--Cols my-8 justify-start">
          <p>
            Laissez-vous enchanter par un univers de raffinement et d&lsquo;
            élégance contemporaine, où le marbre s&lsquo;associe à une ambiance
            raffinée pour un moment de beauté mémorable. Un espace où chaque
            trait est méticuleusement façonné,{" "}
            <strong>
              chaque cheveu est sublimé, chaque regard magnifié, et chaque souci
              esthétique
            </strong>{" "}
            résolu avec une précision experte !
          </p>
          <p>
            Être belle jusqu&lsquo;au bout des ongles, c&lsquo;est ce que vous
            propose l&lsquo;équipe <strong>17th Beauty</strong>&nbsp;! Explorez
            une palette de services exquis, allant de{" "}
            <strong>
              l&lsquo;onglerie, la manucure et la pédicure au maquillage, en
              passant par le lissage et les soins capillaires
            </strong>
            , pour une chevelure lisse et éclatante de santé.
          </p>
          <p>
            De la tête aux pieds, laissez-vous chouchouter par&nbsp;
            <strong>
              des prothésistes ongulaires et esthéticiennes polyvalentes
            </strong>
            &nbsp;dans un lieu où l&lsquo;on se sent bien&nbsp;!
          </p>
        </li>
      </ul>
      <div className="flex flex-col xl:grid xl:grid-cols-2 m-6 xl:m-24 xl:grid-flow-col items-center align-middle justify-start  gap-6">
        <div className="m-3 text-center h-max">
          <h3 className="text-3xl">17TH BEAUTY</h3>
          <h4
            style={{
              fontSize: "16px",
              letterSpacing: "5px",
              fontWeight: 100,
              marginTop: "60px",
              lineHeight: "33px",
              color: "#cbbba1",
              textAlign: "center",
              fontFamily: "&lquo; Rubik&lsquo;, sans-serif",
              textTransform: "uppercase",
            }}
          >
            Lissage et soins capillaires à Paris 17e
          </h4>
          <p
            style={{
              lineHeight: "23px",
              textAlign: "justify",
              fontSize: "14.5px",
              color: "#87613d",
            }}
          >
            Pourquoi ne pas vous accorder un moment de détente bien mérité chez{" "}
            <strong>17th Beauty à Paris 17e</strong> ? Venez explorer{" "}
            <strong>des rituels de soins capillaires</strong> haut de gamme,
            conçus pour nourrir, revitaliser et sublimer votre cuir chevelu.
          </p>
          <p>
            Du <strong>lissage indien</strong> qui lisse et discipline vos
            boucles au soin botox qui répare et fortifie en profondeur, en
            passant par <strong>le soin tokyo qui hydrate</strong> et
            revitalise, vos{" "}
            <strong>expertes en soins capillaires et lissages</strong> vous
            proposent une gamme complète de{" "}
            <strong>traitements capillaires</strong> et vous offrent une
            expérience sur mesure, adaptée à vos besoins.
          </p>
          <p>
            Des traitements spécifiques qui apportent une touche de luxe à votre
            routine capillaire, procurant à vos cheveux une vitalité éclatante !
          </p>
          <h5>
            <div className="my-11 w-full">
              <a
                href="https://widget.treatwell.fr/salon/shay-beauty-2/?utm_source=partner&amp;amp;utm_medium=salon-site-embedded-book-now-widget"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-or px-11 py-4 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
              >
                RÉSERVER
              </a>
            </div>
          </h5>
          <div className="flex justify-center my-8 py-14">
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1708596973/-Shay_Beauty-Shay_Beauty.jpg"
              alt="17th Beauty"
              width={500}
              height={100}
            />
          </div>
        </div>
        <div className="m-3  text-start">
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1708597500/Shay_Beauty-Shay_Beauty.jpg"
              alt="Shay Beauty"
              width={500}
              height={100}
            />
          </div>
          <h3 className="text-4xl text-center m-6">
            Salon de coiffure champs Élysées
          </h3>
          <h4
            style={{
              fontSize: "16px",
              letterSpacing: "5px",
              fontWeight: 100,
              marginTop: "19px",
              lineHeight: "33px",
              color: "#cbbba1",
              textAlign: "center",
              fontFamily: "&lquo; Rubik&lsquo;, sans-serif",
              textTransform: "uppercase",
            }}
          >
            Coupe, colortion, mèches, balayages...
          </h4>
          <div className="mx-12 text-sm">
            <p className="my-4">
              Les prestations capillaires incluent également :
            </p>
            <ul className="list-disc">
              <li className="ml-12 my-4">
                Brushing : pour un look lisse et sophistiqué, un brushing
                impeccable donne à vos cheveux une finition soyeuse et
                brillante.
              </li>
              <li className="ml-12 my-4">
                Mèches : des mèches fines ou des mèches plus marquées, ajoutent
                de la dimension et de la profondeur à votre couleur de base.
              </li>
              <li className="ml-12 my-4">
                Ombre Hair : Cette technique de dégradé subtil, allant des
                racines foncées aux pointes plus claires, crée un effet naturel
                et ensoleillé.
              </li>
              <li className="ml-12 my-4">
                Balayage : offrant un éclat naturel, le balayage illumine votre
                chevelure avec des touches de lumière délicates, pour un effet «
                retour de vacances ».
              </li>
              <li className="ml-12 my-4">
                Couleur et coloration : que vous souhaitiez raviver votre
                couleur actuelle ou adopter une nouvelle teinte, ici on
                personnalise chaque coloration pour un résultat vibrant et
                durable.
              </li>
              <li className="ml-12 my-4">
                Brillance des cheveux : des soins spécifiques qui apportent une
                brillance éclatante à vos cheveux, les laissant sains et
                revitalisés.
              </li>
            </ul>
            <h5>
              <div className="my-11 w-full text-center">
                <a
                  href="https://widget.treatwell.fr/salon/shay-beauty-2/?utm_source=partner&amp;amp;utm_medium=salon-site-embedded-book-now-widget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-or px-11 py-4 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
                >
                  RÉSERVER
                </a>
              </div>
            </h5>
          </div>
        </div>
      </div>

      <h3
        className="text-center m-5"
        style={{
          fontSize: "23px",
          letterSpacing: "1px",
          fontWeight: 100,
          marginTop: "19px",
          lineHeight: "47px",
          color: "#7b6a58",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Beauté des ongles (manucure et pédicure) et Nail art à Paris 17e
      </h3>
      <div className="CustomMarkdown--Cols col-5 flex flex-col xl:flex-row">
        <li className="CustomMarkdown--Col">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1657207988/G%C3%A9ny-Relook-icone2.png"
              alt="17th Beauty"
              width={500}
              height={100}
            />
          </p>
        </li>
        <li className="CustomMarkdown--Col">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1657208163/G%C3%A9ny-Relook-icone5.png"
              alt="17th Beauty"
              width={500}
              height={100}
            />
          </p>
        </li>
        <li className="CustomMarkdown--Col">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1657207989/G%C3%A9ny-Relook-icone3.png"
              alt="17th Beauty"
              width={500}
              height={100}
            />
          </p>
        </li>
        <li className="CustomMarkdown--Col">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1657208163/G%C3%A9ny-Relook-icone4.png"
              alt="17th Beauty"
              width={500}
              height={100}
            />
          </p>
        </li>
        <li className="CustomMarkdown--Col">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1657207988/G%C3%A9ny-Relook-icone1.png"
              alt="17th Beauty"
              width={500}
              height={100}
            />
          </p>
        </li>
      </div>
      <ul className="CustomMarkdown--Cols col-1">
        <li className="InfosShop">
          <p className="text-xl">
            Venez chouchouter vos <strong>ongles</strong> chez{" "}
            <strong>17th Beauty</strong> et découvrez un espace onglerie où{" "}
            <strong>une multitude de nuances de vernis semi-permanent</strong>{" "}
            vous attendent ! Laissez-vous choyer avec la célèbre{" "}
            <strong>manucure russe</strong>, qui prend soin de vos ongles en les
            nourrissant et en les préparant avec soin avant l&lsquo; application{" "}
            <strong>de gel ou de chablon</strong>. Quelle que soit votre envie,
            ici, on vous propose <strong>le nail art</strong>,{" "}
            <strong>la french classique</strong>,{" "}
            <strong>la french colorée</strong>, <strong>le babyboomer</strong>{" "}
            et même les strass scintillants. Less services incluent également{" "}
            <strong>la beauté des mains et des pieds</strong>, pour des ongles
            impeccables et un soin complet. Que vous optiez pour{" "}
            <strong>un gainage</strong> ou <strong>une manucure en gel</strong>,
            osez le changement et laissez libre cours à votre imagination...
            toutes les fantaisies sont possibles !
          </p>
          <p>
            C&lsquo;est ici, que Selma vous ouvre les portes d&lsquo;un monde où
            la beauté est élevée au rang d&lsquo;art. Laissez-vous choyer dans
            un cadre enchanteur, où chaque détail est pensé pour{" "}
            <strong>sublimer vos mains, vos pieds, vos cheveux</strong>...
          </p>
          <div className="my-11 w-full">
            <a
              href="https://widget.treatwell.fr/salon/shay-beauty-2/?utm_source=partner&amp;amp;utm_medium=salon-site-embedded-book-now-widget"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-or px-11 py-4 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
            >
              RÉSERVER
            </a>
          </div>
          <h4
            style={{
              fontSize: "16px",
              letterSpacing: "5px",
              fontWeight: 100,
              marginTop: "19px",
              lineHeight: "33px",
              color: "#cbbba1",
              textAlign: "center",
              fontFamily: "&lquo; Rubik&lsquo;, sans-serif",
              textTransform: "uppercase",
            }}
          >
            Laissez-vous aller, le temps d&lsquo;une parenthèse de douceur chez{" "}
            <strong>17th Beauty</strong>. Ici, chaque visite est une expérience
            beauté personnalisée !
          </h4>
        </li>
      </ul>
      <h3 className="text-4xl my-11 text-center">Les marques</h3>
      <ul className="CustomMarkdown--Cols col-5 grid grid-cols-5">
        <li className="CustomMarkdown--Col m-4">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1708591672/Shay_Beauty-marques_2.png"
              alt="Shay Beauty"
              width={500}
              height={100}
            />
          </p>
          <p>
            La marque <strong>Daisy DND</strong> est une entreprise spécialisée
            dans la création de produits de beauté naturels et respectueux de l
            &lsquo;environnement. Elle propose une gamme variée de cosmétiques,
            de soins du visage et du corps, et de parfums, tous fabriqués à
            partir d&lsquo;ingrédients d&lsquo;origine végétale.
          </p>
        </li>
        <li className="CustomMarkdown--Col m-4">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1708591672/Shay_Beauty-marques_1.png"
              alt="Shay Beauty"
              width={500}
              height={100}
            />
          </p>
          <p>
            <strong>Tokyo Inkarami</strong> est une marque de soins capillaires
            renommée, offrant des produits innovants pour restaurer, renforcer
            et revitaliser les cheveux. Ses formules avancées sont conçues pour
            répondre aux besoins spécifiques des cheveux abîmés et déshydratés,
            leur redonnant ainsi santé, brillance et vitalité.
          </p>
        </li>
        <li className="CustomMarkdown--Col m-4">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1708591671/Shay_Beauty-marques_3.png"
              alt="Shay Beauty"
              width={500}
              height={100}
            />
          </p>
          <p>
            <strong>Gelish</strong> est une marque de vernis à ongles en gel de
            qualité professionnelle, reconnue pour sa durabilité et sa
            brillance. Ses produits offrent une tenue longue durée et une gamme
            de couleurs variée, permettant de créer des manucures impeccables et
            résistantes.
          </p>
        </li>
        <li className="CustomMarkdown--Col m-4">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1708591671/Shay_Beauty-marques_5.png"
              alt="Shay Beauty"
              width={500}
              height={100}
            />
          </p>
          <p>
            Leader mondial du secteur des produits professionnels pour les
            ongles, <strong>O.P.I</strong> est une marque américaine – née en
            1981 – dont la réputation d’excellence et la grande créativité ne
            sont plus à démontrer. Reconnue pour la haute technicité et la
            qualité de ses produits, la marque met l’accent sur la sécurité et
            l’innovation.
          </p>
        </li>
        <li className="CustomMarkdown--Col m-4 ">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1708591672/Shay_Beauty-marques_4.png"
              alt="Shay Beauty"
              width={500}
              height={100}
            />
          </p>
          <p>
            <strong>Nashi</strong> est une marque renommée dans le domaine des
            soins capillaires. Elle propose une gamme de produits de haute
            qualité, notamment des shampooings, des après-shampooings, des
            masques capillaires et des traitements spécifiques, formulés pour
            répondre aux besoins des différents types de cheveux.
          </p>
        </li>
      </ul>
      <div>
        <h4
          className="text-3xl text-center my-7"
          style={{
            fontSize: "16px",
            letterSpacing: "5px",
            fontWeight: 100,
            marginTop: "19px",
            lineHeight: "33px",
            color: "#cbbba1",
            textAlign: "center",
            fontFamily: "&lquo; Rubik&lsquo;, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Retrouvez-nous sur
        </h4>
        <div className="flex justify-center items-center w-full my-11">
          <div className="CustomMarkdown--Col">
            <p>
              <a
                href="https://www.instagram.com/17th_beauty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,w_80,h_80,c_scale/v1709805452/Best-Cut-INSTA.png"
                  alt="Foo"
                  width={100}
                  height={100}
                />
              </a>
            </p>
          </div>
          <div className="mx-11"></div>
          <div className="CustomMarkdown--Col">
            <p>
              <a
                href="https://www.tiktok.com/@17th_beauty?_t=8kRvC4NmnE8&amp;amp;_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,w_80,h_80,c_scale/v1650896265/TIKTOK.png"
                  alt="Foo"
                  width={100}
                  height={100}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-black justify-center p-5">
        <div className="CustomMarkdown--Col">
          <p>
            <Image
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto/v1710508753/Logo_principal_17th_Beauty_Colors_fond_noir2.jpg"
              alt="Shay Beauty"
              width={500}
              height={100}
            />
          </p>
        </div>
        <h4 className="text-2xl">07 82 49 69 08</h4>
      </div>
      <div className="p-24 overflow-hidden">
        {/* <Carousel
          slides={slides.map((it) => {
            return {
              src: it,
            };
          })}
        /> */}
        <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <TextGenerateEffect words={"Nos avis Google"} />;
          <InfiniteMovingCards speed="slow" items={comments} direction="right" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
          console.log("🚀 ~ Home ~ process.env.NEXT_URL:", process.env.NEXT_URL)
}
