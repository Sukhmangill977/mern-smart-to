import React from "react";

function AISummary({ tasks }) {
  const totalTasks = tasks.task.length + tasks.inProgress.length + tasks.complete.length;

  const summaryText = () => {
    if (totalTasks === 0) return "You haven't added any tasks yet. Let's get started! 🚀";

    const parts = [];
    if (tasks.task.length) parts.push(`${tasks.task.length} to-do`);
    if (tasks.inProgress.length) parts.push(`${tasks.inProgress.length} in progress`);
    if (tasks.complete.length) parts.push(`${tasks.complete.length} completed`);

    return `📊 You currently have ${totalTasks} tasks: ${parts.join(", ")}.`;
  };

  return (
    <div style={{
      marginTop: "2rem",
      padding: "1rem",
      borderTop: "1px solid #ccc",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px"
    }}>
      <h3>🧠 AI Summary</h3>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{summaryText()}</p>
    </div>
  );
}

export default AISummary;
