
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer_section_padding">
        <div className="sb_footer_links">
          <div className="sb_footer_links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer_links_div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resources center</p>
            </a>
            <a href="/testimonial">
              <p>Testimonial</p>
            </a>
            <a href="/stv">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer_links_div">
            <h4>Partners</h4>
            <a href="/testimonial">
              <p>Testimonial</p>
            </a>
            <a href="/bodegas">
              <p>Bodegas</p>
            </a>
          </div>
          <div className="sb_footer_links_div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/prensa">
              <p>Prensa</p>
            </a>
            <a href="/contacto">
              <p>Contacto</p>
            </a>
          </div>
          <div className="sb_footer_links_div">
            <h4>Muy pronto en Winery</h4>
            <a href="/socialmedia">
              <p>Social Media</p>
            </a>
          </div>
          <div className="sb_footer_links_div">
            <h2>Síguenos en redes sociales</h2>
            <div>
              <a
                href="https://www.facebook.com/tu_pagina_de_facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.linkedin.com/tu_perfil_de_linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/tu_perfil_de_instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.whatsapp.com/tu_perfil_de_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb_footer_below">
          <div className="sb_footer_copyright">
          <p>
          &copy; {new Date().getFullYear()} Vinos de España. Todos los derechos
          reservados.
        </p>
          </div>
          <div className="sb_footer_below_lnks">
            <a href="/terms">
              <p>Términos y condiciones</p>
            </a>
            <a href="/privacy">
              <p>Política de privacidad</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

