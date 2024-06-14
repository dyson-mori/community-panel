import React, { useState } from "react";

import { Container } from "./styles";

type Props = {
  setUpload: (item: string) => void;
}

export const Upload: React.FC<Props> = ({ setUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<'empty' | 'loading' | 'has'>('empty');

  const handleFileChange = (evt: any) => {
    const reader = new FileReader();
    const selectedFile = evt.target.files[0];

    setLoading('loading')

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }

    reader.onload = (readerEvent: any) => setPreview(readerEvent.target.result);

    setTimeout(() => {
      setLoading('has');
      setUpload(selectedFile);
    }, 2000);
  };

  return (
    <Container>

      {loading === 'loading'&& (
        <div className="load">
          <span className="loader"></span>
        </div>
      )}

      {loading === 'empty' && (
        <label htmlFor="file">
          Choose a file
        </label>
      )}

      {loading === 'has' && !!preview && (
        <video controls>
          <source src={preview}/>
        </video>
      )}

      <input id="file" type="file" onChange={handleFileChange} />
    </Container>
  )
};
