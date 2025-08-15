import "./index.css";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index} className="breadcrumb-item">
          {index !== 0 && <span className="separator">/</span>}
          {index === paths.length - 1 ? (
            <span className="active">{path.name}</span>
          ) : (
            <a href={path.link}>{path.name}</a>
          )}
        </span>
      ))}
    </nav>
  ); 
};

export default Breadcrumb;
