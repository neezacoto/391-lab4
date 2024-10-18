import { useParams } from "react-router-dom";

const ArtworkContent = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default ArtworkContent;
