import "../styles/main.css";

function Link({ text, href, id }) {
  return (
    <div className="links">
      <a href={href} id={id}>
        {text}
      </a>
    </div>
  );
}

export default Link;
