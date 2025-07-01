import '../styles/Blog.css';

const articles = [
  {
    title: 'Los Mejores Vinos de Ribera del Duero',
    image: '/images/RiveraLand.jpeg',
    description: 'Descubre los vinos más prestigiosos de la Ribera del Duero...',
    link: '#',
  },
  {
    title: 'Cata de Vinos: Consejos y Trucos',
    image: '/images/catasdevino.jpeg',
    description: 'Aprende a catar vinos como un profesional con estos consejos...',
    link: '#',
  },
  {
    title: 'Las Bodegas Más Antiguas de España',
    image: '/images/bodegas.jpeg',
    description: 'Un recorrido por las bodegas con más historia en España...',
    link: '#',
  },
];

const featuredArticle = {
  title: 'Explorando los Vinos de La Rioja',
  image: '/images/RiojaLand.jpeg',
  description:
    'Un viaje a través de los viñedos y bodegas de La Rioja, descubriendo los secretos de sus vinos...',
  link: '#',
};

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Blog Winery</h2>

      {/* Artículo destacado */}
      <div className="featured-article">
        <img src={featuredArticle.image} alt={featuredArticle.title} />
        <div className="featured-content">
          <h3>{featuredArticle.title}</h3>
          <p>{featuredArticle.description}</p>
          <a href={featuredArticle.link} className="button">Leer más</a>
        </div>
      </div>

      {/* Lista de artículos */}
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} />
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <a href={article.link} className="button">Leer más</a>
          </div>
        ))}
      </div>

      {/* Suscripción */}
      <div className="subscription">
        <h3>Suscríbete a nuestro boletín</h3>
        <p>Recibe las últimas noticias y artículos sobre vinos directamente en tu bandeja de entrada.</p>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
