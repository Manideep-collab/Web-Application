import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Collapse = () => {
  usePageTitle("Collapsible Content");
  const [activeTab, setActiveTab] = useState("multiple");

  // SINGLE → only one open
  const [singleOpen, setSingleOpen] = useState(null);

  // MULTIPLE → many open
  const [multiOpen, setMultiOpen] = useState([]);

  const items = [
    {
      title: "Set Clear Goals",
      content: "Define what you want and break it into small achievable steps."
    },
    {
      title: "Stay Consistent",
      content: "Consistency beats motivation. Show up every day."
    },
    {
      title: "Learn From Experts",
      content: "Follow mentors and learn from real-world scenarios."
    }
  ];

  // SINGLE toggle
  const toggleSingle = (index) => {
    setSingleOpen(singleOpen === index ? null : index);
  };

  // MULTIPLE toggle
  const toggleMultiple = (index) => {
    if (multiOpen.includes(index)) {
      setMultiOpen(multiOpen.filter((i) => i !== index));
    } else {
      setMultiOpen([...multiOpen, index]);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Collapsible Content</h2>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={activeTab === "single" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("single")}
        >
          Single Collapse
        </button>

        <button
          style={activeTab === "multiple" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("multiple")}
        >
          Multiple Collapse
        </button>
      </div>

      <div style={styles.box}>

        {items.map((item, index) => {
          const isOpen =
            activeTab === "single"
              ? singleOpen === index
              : multiOpen.includes(index);

          return (
            <div key={index}>
              <div
                style={styles.header}
                onClick={() =>
                  activeTab === "single"
                    ? toggleSingle(index)
                    : toggleMultiple(index)
                }
              >
                {item.title}
                <span>{isOpen ? "-" : "+"}</span>
              </div>

              {isOpen && (
                <div style={styles.content}>
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collapse;

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
    padding: "20px"
  },
  header: {
    background: "#3c8dbc",
    color: "white",
    padding: "15px",
    marginBottom: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    padding: "15px",
    background: "#f4f6f9",
    marginBottom: "10px"
  }
};