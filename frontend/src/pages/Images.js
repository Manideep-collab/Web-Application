import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Images = () => {
  usePageTitle("Images");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [images, setImages] = useState([]);

  const handleUpload = () => {
    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    const newImage = {
      name: fileName || file.name,
      url: imageURL
    };

    setImages([...images, newImage]);
    setFile(null);
    setFileName("");
  };

  const handleDelete = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  return (
    <div style={styles.container}>
      <h2>Uploading / Downloading Image</h2>

      {/* Upload Section */}
      <div style={styles.uploadRow}>
        <div>
          <label>Select File :</label><br />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div>
          <label>File Name :</label><br />
          <input
            type="text"
            placeholder="File Name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            style={styles.input}
          />
        </div>

        <button style={styles.uploadBtn} onClick={handleUpload}>
          Upload
        </button>
      </div>

      {/* Image List */}
      <h3 style={{ marginTop: "30px" }}>List Of Images :</h3>

      <div style={styles.grid}>
        {images.map((img, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              {img.name}
              <span
                style={styles.delete}
                onClick={() => handleDelete(index)}
              >
                ❌
              </span>
            </div>

            <div style={styles.cardBody}>
              <img src={img.url} alt="" style={styles.image} />
              <a href={img.url} download>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;

const styles = {
  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "5px"
  },

  uploadRow: {
    display: "flex",
    gap: "20px",
    alignItems: "end"
  },

  input: {
    padding: "6px",
    border: "1px solid #ccc"
  },

  uploadBtn: {
    background: "green",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer"
  },

  grid: {
    display: "flex",
    gap: "20px",
    marginTop: "15px"
  },

  card: {
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  },

  cardHeader: {
    background: "#3c8dbc",
    color: "white",
    padding: "5px",
    display: "flex",
    justifyContent: "space-between"
  },

  delete: {
    cursor: "pointer"
  },

  cardBody: {
    padding: "10px",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover"
  }
};