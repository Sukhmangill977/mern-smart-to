// components/SmartTaskSuggestor.js
import React, { useEffect, useState } from "react";

const SmartTaskSuggestor = ({ tasks, onAddSuggestedTask }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const generateSuggestions = () => {
      const today = new Date();
      const day = today.getDay(); // 0 is Sunday

      let newSuggestions = [];

      const titles = tasks.flat().map((task) => task.title.toLowerCase());

      if (titles.includes("team meeting")) {
        newSuggestions.push({
          title: "Prepare meeting agenda",
          priority: "Medium",
          deadline: new Date().toISOString().split("T")[0],
        });
      }

      if (day === 0) {
        newSuggestions.push({
          title: "Plan for the week",
          priority: "High",
          deadline: new Date().toISOString().split("T")[0],
        });
      }

      setSuggestions(newSuggestions);
    };

    generateSuggestions();
  }, [tasks]);

  return (
    <div style={{ padding: "1rem", backgroundColor: "#f7f7f7", borderRadius: "8px", marginBottom: "20px" }}>
      <h4>💡 Smart Suggestions</h4>
      {suggestions.length === 0 ? (
        <p>No smart suggestions at the moment.</p>
      ) : (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{suggestion.title}</strong> — {suggestion.priority}
              <br />
              <span>📅 {suggestion.deadline}</span>
              <br />
              <button
                style={{ marginTop: "5px", backgroundColor: "#4caf50", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}
                onClick={() => onAddSuggestedTask(suggestion)}
              >
                ➕ Add to Tasks
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SmartTaskSuggestor;
