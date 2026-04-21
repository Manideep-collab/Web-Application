import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Autocomplete = () => {
  usePageTitle("Autocomplete");
  const [activeTab, setActiveTab] = useState("multiple");
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const data = [
  "Python", "Java", "JavaScript", "TypeScript", "C", "C++", "C#",
  "Go", "Rust", "Kotlin", "Swift", "Ruby", "PHP",
  "R", "MATLAB", "Dart", "Scala", "Perl",
  "Haskell", "Lua", "Elixir", "Clojure",
  "Objective-C", "Groovy", "Assembly",
  "SQL", "Python", "PL/SQL", "T-SQL",
  "HTML", "CSS", "Sass", "Less",
  "Bash", "Shell", "PowerShell",
  "Julia", "COBOL", "Fortran", "Ada",
  "F#", "OCaml", "Nim", "Zig",
  "Crystal", "Solidity", "V", "Hack"
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const filteredList = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filteredList);
  };

  // SINGLE SELECT
  const handleSelectSingle = (value) => {
    setInput(value);
    setFiltered([]);
  };

  // MULTIPLE SELECT
  const handleSelectMultiple = (value) => {
    if (!selectedTags.includes(value)) {
      setSelectedTags([...selectedTags, value]);
    }
    setInput("");
    setFiltered([]);
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div style={styles.container}>
      <h2>Autocomplete</h2>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={activeTab === "single" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("single")}
        >
          Single Values
        </button>

        <button
          style={activeTab === "multiple" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("multiple")}
        >
          Multiple Values
        </button>
      </div>

      <div style={styles.box}>

        <label>Tags :</label>

        {/* MULTIPLE TAG VIEW */}
        {activeTab === "multiple" && (
          <div style={styles.tagContainer}>
            {selectedTags.map((tag, index) => (
              <span key={index} style={styles.tag}>
                {tag}
                <span onClick={() => removeTag(tag)} style={styles.remove}>
                  ✖
                </span>
              </span>
            ))}
          </div>
        )}

        <input
          value={input}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Suggestions */}
        {filtered.length > 0 && (
          <div style={styles.dropdown}>
            {filtered.map((item, index) => (
              <div
                key={index}
                style={styles.item}
                onClick={() =>
                  activeTab === "single"
                    ? handleSelectSingle(item)
                    : handleSelectMultiple(item)
                }
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;

const styles = {
  container: {
    padding: "20px",
    marginTop: "10px"
  },
  
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px"
  },
  tab: {
    padding: "10px",
    background: "#ddd",
    border: "none",
    cursor: "pointer"
  },
  activeTab: {
    padding: "10px",
    background: "#3c8dbc",
    color: "white",
    border: "none"
  },
  box: {
    background: "white",
    padding: "20px",
    width: "60%"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "1px solid #ccc"
  },
  dropdown: {
    border: "1px solid #ccc",
    maxHeight: "200px",
    overflowY: "auto"
  },
  item: {
    padding: "10px",
    cursor: "pointer"
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    marginBottom: "10px"
  },
  tag: {
    background: "#3c8dbc",
    color: "white",
    padding: "5px 10px",
    display: "flex",
    alignItems: "center"
  },
  remove: {
    marginLeft: "5px",
    cursor: "pointer"
  }
};