import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <StaticImage
      src="../images/banner1.png"
      className="banner"
      // width={300}
      width={1920}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="La Cafeteria Coffee Roasters"
      // style={{ marginBottom: `1.45rem` }}
    />
    <div class="articles contenedor">
      <div className="articles_card">
        <StaticImage
          src="../images/foto1.png"
          className="article_card_imgs"
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Cafe"
        />
        <div className="article_info">
          <div className="article_info_title">
            <h3 className="no-margin">Visión</h3>
          </div>
          <div className="article_info_subtitle">
            <p className="article_p no-margin">
              Ser un café capaz de complacer los más exigentes paladares por
              poseer altos estándares de la calidad de su grano.
            </p>
          </div>
        </div>
      </div>
      <div className="articles_card">
        <StaticImage
          src="../images/foto2.png"
          className="article_card_imgs"
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Cafe"
        />
        <div className="article_info">
          <div className="article_info_title">
            <h3 className="no-margin">Misión</h3>
          </div>
          <div className="article_info_subtitle">
            <p className="article_p no-margin">
              realizar la preparación de café en tazas mediante el uso de la
              máquina espresso y además realizar las preparaciones en filtrados
              como por ejemplo Quemex, V60, aero press, Prensa francesa y
              cualquier otra preparación de café para el gusto y el disfrute de
              cualquier cliente.
            </p>
          </div>
        </div>
      </div>
      <div className="articles_card">
        <StaticImage
          src="../images/foto3.png"
          className="article_card_imgs"
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Cafe"
        />
        <div className="article_info">
          <div className="article_info_title">
            <h3 className="no-margin">Objetivo</h3>
          </div>
          <div className="article_info_subtitle">
            <p className="article_p no-margin">
              general establecer las técnicas y los procedimientos para la
              preparación de cada uno de los filtrados Y en especial el
              procedimiento para la obtención de un expreso como base de todos
              los cafés.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="cacao-cafe-bg">
      <div className="cacao-cafe contenedor">
        <div className="cacao-cafe-info">
          <h3 className="cacao-cafe-title no-margin">Cacao y Cafe</h3>
          <p className="cacao-cafe-p no-margin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="cacao-img-c">
          <StaticImage
            src="../images/cacao.png"
            className="cacao-cafe-imgs"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Cacao"
          />
        </div>
      </div>
    </div>

    <div className="menu_title contenedor">
      <h2 className="menu_title_h2 no-margin">EXPLORA NUESTRO MENU.</h2>
      <hr className="menu_title_line" />
    </div>

    <div className="menu contenedor">
      <div className="menu_column">
        <div className="menu_wrapper">
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">Caffe Latte</h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$2.95</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Fresh brewed coffee and steamed milk
            </h4>
          </div>
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">
              Caffe Americano
            </h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$2.95</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Espresso Shots and Light Layer of Crema
            </h4>
          </div>
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">Caffe Mocha</h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$3.65</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Espresso With Milk, and Whipped Cream
            </h4>
          </div>
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">
              Chocolate Blanco
            </h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$2.79</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Espresso, White Chocolate, Milk, Ice and Cream
            </h4>
          </div>
        </div>
      </div>
      <div className="menu_column">
        <div className="menu_wrapper">
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">Cappucccino</h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$4.03</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Espresso, and Smoothed Layer of Foam
            </h4>
          </div>
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">Vanilla Latte</h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$3.65</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Espresso Milk With Flavor,and Cream
            </h4>
          </div>
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">
              Expresso Macchiato
            </h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$2.95</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Rich Espresso With Milk and Foam
            </h4>
          </div>
          <div className="menu_wrapper_item">
            <h3 className="menu_wrapper_item_title no-margin">
              Brownie Caramelo
            </h3>
            <div className="menu_line"></div>
            <h3 className="menu_wrapper_item_price no-margin">$3.95</h3>
          </div>
          <div className="menu_wrapper_sub">
            <h4 className="menu_wrapper_h4 no-margin">
              Fresh brewed coffee and steamed milk
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div className="contact">
      <div className="contact_wrap contenedor">
        <div className="contact_wrap_info">
          <p className="contact_p_email no-margin">
            contact@cafeteriaroaster.com
          </p>
          <p className="contact_p_number no-margin">+58 0212 334 558</p>
        </div>
        <div className="contact_wrap_map">
          <iframe
            className="google_maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.36821627274867!2d-66.86392031313999!3d10.490437771841444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5970553076e7%3A0xa6a2d04b673d1502!2sLa%20Cafeter%C3%ADa%20Coffee%20Roasters!5e0!3m2!1ses!2sde!4v1615500486376!5m2!1ses!2sde"
            allowfullscreen=""
            title="Mapa de la cafeteria"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
