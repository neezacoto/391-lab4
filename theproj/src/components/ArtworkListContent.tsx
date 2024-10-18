import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Artwork } from "../types/types";

const ArtworkListContent = () => {
  const [numArtworks, setNumArtworks] = useState<number>(5);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const getArtworks = async () => {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`
      );
      const data = await res.json();
      setArtworks(data.data);
    };
    getArtworks();
  }, [numArtworks]);

  console.log({ artworks });
  console.log(numArtworks);

  return (
    <div>
      <input
        type="number"
        placeholder="Number of artworks"
        value={numArtworks}
        onChange={(e) => setNumArtworks(Number(e.target.value))}
      />
      <div>
        {artworks.map((artwork) => (
          <ArtworkPreview artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

const ArtworkPreviewDiv = styled.div`
  margin: 3rem;
  padding: 1rem;
  width: 20rem;
  background-color: lightblue;
`;

interface ArtworkPreviewProps {
  artwork: Artwork;
}
const ArtworkPreview = ({ artwork }: ArtworkPreviewProps) => {
  return (
    <ArtworkPreviewDiv>
      <h3>{artwork.title}</h3>
      <p>{artwork.place_of_origin}</p>
      <p>{artwork.medium_display}</p>
    </ArtworkPreviewDiv>
  );
};

export default ArtworkListContent;
