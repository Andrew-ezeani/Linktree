import "../styles/main.css";

function Link({ text, href, id, title }) {
  return (
    <div className="links">
      <a href={href} title={title} id={id}>
        {text}
      </a>
    </div>
  );
}

export default Link;
