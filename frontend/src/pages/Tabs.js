import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Tabs = () => {
  usePageTitle("Tabs");
  const [activeTab, setActiveTab] = useState("plan");

  return (
    <div style={styles.container}>
      <h2>Tabs</h2>

      {/* Tabs Header */}
      <div style={styles.tabHeader}>
        <button
          style={activeTab === "plan" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("plan")}
        >
          Plan to Succeed
        </button>

        <button
          style={activeTab === "unlearn" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("unlearn")}
        >
          UnLearning
        </button>

        <button
          style={activeTab === "ways" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("ways")}
        >
          Ways of Unlearning
        </button>
      </div>

      {/* Content Box */}
      <div style={styles.contentBox}>
        {activeTab === "plan" && (
          <div>
            <p>
              Success doesn't happen randomly. You need a clear plan, daily
              discipline, and consistent effort. Focus on building small habits
              that lead to long-term results.
            </p>

            <p>
              Set realistic goals, track your progress, and adjust your strategy
              regularly. The key is consistency, not perfection.
            </p>

            <input placeholder="Enter your goal..." style={styles.input} />
            <input placeholder="Time to achieve..." style={styles.input} />
          </div>
        )}

        {activeTab === "unlearn" && (
          <div>
            <p>
              Sometimes, growth requires letting go of outdated knowledge.
              Technology evolves rapidly, and sticking to old methods can slow
              you down.
            </p>

            <p>
              Be open to new ideas, question your assumptions, and continuously
              upgrade your mindset.
            </p>

            <input placeholder="What to unlearn..." style={styles.input} />
            <input placeholder="Why remove it..." style={styles.input} />
          </div>
        )}

        {activeTab === "ways" && (
          <div>
            <p>
              Unlearning is not easy, but it is necessary. Replace old habits
              with new ones that align with current trends and technologies.
            </p>

            <p>
              Learn from real-world projects, collaborate with others, and stay
              updated with industry practices.
            </p>

            <input placeholder="New skill to learn..." style={styles.input} />
            <input placeholder="Resources to use..." style={styles.input} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;

const styles = {
  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)"
  },

  tabHeader: {
    display: "flex",
    borderBottom: "2px solid #ddd",
    marginBottom: "20px"
  },

  tab: {
    padding: "10px 20px",
    border: "none",
    background: "#f4f4f4",
    cursor: "pointer",
    marginRight: "5px"
  },

  activeTab: {
    padding: "10px 20px",
    border: "none",
    background: "#3c8dbc",
    color: "white",
    cursor: "pointer",
    marginRight: "5px"
  },

  contentBox: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    background: "#fafafa"
  },

  input: {
    display: "block",
    width: "300px",
    padding: "8px",
    marginTop: "10px",
    border: "1px solid #ccc"
  }
};