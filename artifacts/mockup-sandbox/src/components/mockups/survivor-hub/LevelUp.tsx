export default function LevelUp() {
  const green = "#22C55E";
  const bg = "#0F1117";
  const surface = "#161B27";
  const border = "#1E2A3A";
  const muted = "#4B5563";
  const text = "#E2E8F0";
  const subtle = "#94A3B8";

  const cohorts = [
    {
      title: "Web Development Fundamentals",
      track: "Tech",
      trainer: "Maya R.",
      seats: 8,
      totalSeats: 12,
      credits: 40,
      milestones: 5,
      completed: 0,
      status: "open",
      tags: ["HTML", "CSS", "React"],
    },
    {
      title: "Financial Literacy & Budgeting",
      track: "Finance",
      trainer: "Jordan T.",
      seats: 3,
      totalSeats: 10,
      credits: 25,
      milestones: 4,
      completed: 0,
      status: "open",
      tags: ["Budgeting", "Credit", "Savings"],
    },
    {
      title: "Trauma-Informed Leadership",
      track: "Life Skills",
      trainer: "Sasha M.",
      seats: 0,
      totalSeats: 8,
      credits: 30,
      milestones: 6,
      completed: 0,
      status: "full",
      tags: ["Leadership", "Healing", "Advocacy"],
    },
    {
      title: "Freelance Business Launch",
      track: "Tech",
      trainer: "Denise K.",
      seats: 5,
      totalSeats: 10,
      credits: 50,
      milestones: 7,
      completed: 0,
      status: "open",
      tags: ["Freelance", "Contracts", "Marketing"],
    },
    {
      title: "Mental Wellness for Survivors",
      track: "Wellness",
      trainer: "Dr. Priya L.",
      seats: 6,
      totalSeats: 12,
      credits: 20,
      milestones: 4,
      completed: 0,
      status: "open",
      tags: ["CBT", "Grounding", "Self-care"],
    },
    {
      title: "Data Entry & Admin Certification",
      track: "Tech",
      trainer: "Carlos V.",
      seats: 2,
      totalSeats: 8,
      credits: 35,
      milestones: 5,
      completed: 0,
      status: "active",
      tags: ["Excel", "Google Workspace", "Admin"],
    },
  ];

  const myEnrollments = [
    {
      title: "Web Development Fundamentals",
      track: "Tech",
      trainer: "Maya R.",
      milestones: 5,
      completed: 2,
      escrow: 16,
      nextMilestone: "Build a responsive portfolio page",
      dueDate: "Apr 2",
    },
    {
      title: "Financial Literacy & Budgeting",
      track: "Finance",
      trainer: "Jordan T.",
      milestones: 4,
      completed: 4,
      escrow: 0,
      nextMilestone: "Completed!",
      dueDate: null,
    },
  ];

  const tracks = ["All Tracks", "Tech", "Finance", "Wellness", "Life Skills"];
  const trackColors: Record<string, string> = {
    Tech: "#3B82F6",
    Finance: "#F59E0B",
    Wellness: "#14B8A6",
    "Life Skills": "#A855F7",
  };

  const statusColor: Record<string, string> = {
    open: green,
    active: "#3B82F6",
    full: muted,
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: bg, fontFamily: "'Inter', system-ui, sans-serif", color: text, overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: surface, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        {/* Logo */}
        <div style={{ padding: "20px 16px 16px", borderBottom: `1px solid ${border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: green, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🎯</div>
            <span style={{ fontWeight: 700, fontSize: 15, color: text }}>LevelUp</span>
          </div>
          <div style={{ fontSize: 11, color: subtle }}>Training Cohort Marketplace</div>
        </div>

        {/* Nav */}
        <nav style={{ padding: "12px 8px", flex: 1 }}>
          {[
            { icon: "🏠", label: "Dashboard", active: false },
            { icon: "📚", label: "Browse Cohorts", active: true },
            { icon: "📈", label: "My Progress", active: false },
            { icon: "👨‍🏫", label: "My Trainers", active: false },
            { icon: "🏆", label: "Achievements", active: false },
            { icon: "💳", label: "Credits Wallet", active: false },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "9px 10px",
              borderRadius: 8, marginBottom: 2, cursor: "pointer",
              background: item.active ? `${green}18` : "transparent",
              color: item.active ? green : subtle,
              fontSize: 13, fontWeight: item.active ? 600 : 400,
              borderLeft: item.active ? `3px solid ${green}` : "3px solid transparent",
            }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}

          <div style={{ marginTop: 24, padding: "0 10px 8px", fontSize: 11, color: muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>Trainer Tools</div>
          {[
            { icon: "➕", label: "Create Cohort" },
            { icon: "✅", label: "Validate Milestones" },
            { icon: "💰", label: "Payout History" },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "9px 10px",
              borderRadius: 8, marginBottom: 2, cursor: "pointer",
              color: subtle, fontSize: 13,
            }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>

        {/* Credits badge */}
        <div style={{ margin: "0 12px 16px", padding: "12px", background: `${green}10`, borderRadius: 10, border: `1px solid ${green}30` }}>
          <div style={{ fontSize: 11, color: subtle, marginBottom: 4 }}>My Credit Balance</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: green }}>148 SC</div>
          <div style={{ fontSize: 11, color: subtle, marginTop: 2 }}>16 SC in escrow</div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: text }}>Browse Cohorts</h1>
              <div style={{ fontSize: 13, color: subtle, marginTop: 4 }}>Enroll in a training program and grow your skills</div>
            </div>
            <button style={{ background: green, color: "#000", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              + Create Cohort
            </button>
          </div>

          {/* Stats bar */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
            {[
              { label: "Open Cohorts", value: "18", icon: "📚", color: green },
              { label: "Enrolled Learners", value: "342", icon: "👥", color: "#3B82F6" },
              { label: "Milestones Validated", value: "1,204", icon: "✅", color: "#F59E0B" },
              { label: "Credits Released", value: "8,910 SC", icon: "💳", color: "#A855F7" },
            ].map((stat) => (
              <div key={stat.label} style={{ flex: 1, background: surface, borderRadius: 10, padding: "14px 16px", border: `1px solid ${border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 16 }}>{stat.icon}</span>
                  <span style={{ fontSize: 12, color: subtle }}>{stat.label}</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: stat.color }}>{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Track filters */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {tracks.map((track, i) => (
              <button key={track} style={{
                padding: "7px 14px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 12, fontWeight: 500,
                background: i === 0 ? green : `${border}`,
                color: i === 0 ? "#000" : subtle,
              }}>{track}</button>
            ))}
            <div style={{ flex: 1 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "7px 12px" }}>
              <span style={{ color: muted, fontSize: 14 }}>🔍</span>
              <span style={{ fontSize: 12, color: muted }}>Search cohorts…</span>
            </div>
          </div>

          {/* Cohort grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {cohorts.map((cohort) => {
              const trackColor = trackColors[cohort.track] || green;
              return (
                <div key={cohort.title} style={{
                  background: surface, borderRadius: 12, padding: "16px",
                  border: `1px solid ${border}`, cursor: "pointer",
                  opacity: cohort.status === "full" ? 0.7 : 1,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: trackColor, background: `${trackColor}18`, padding: "3px 8px", borderRadius: 20 }}>
                      {cohort.track}
                    </span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: statusColor[cohort.status], background: `${statusColor[cohort.status]}15`, padding: "3px 8px", borderRadius: 20 }}>
                      {cohort.status === "full" ? "Full" : cohort.status === "active" ? "Active" : "Open"}
                    </span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: text, marginBottom: 8, lineHeight: 1.4 }}>{cohort.title}</div>
                  <div style={{ fontSize: 12, color: subtle, marginBottom: 12 }}>
                    👨‍🏫 {cohort.trainer} &nbsp;·&nbsp; {cohort.milestones} milestones
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {cohort.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 10, color: muted, background: border, padding: "2px 8px", borderRadius: 10 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTop: `1px solid ${border}` }}>
                    <div>
                      <div style={{ fontSize: 11, color: subtle }}>Seats</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: cohort.seats === 0 ? muted : text }}>
                        {cohort.seats === 0 ? "Full" : `${cohort.seats}/${cohort.totalSeats}`}
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: subtle }}>Cost</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: green }}>{cohort.credits} SC</div>
                    </div>
                    <button style={{
                      background: cohort.status === "full" ? border : green,
                      color: cohort.status === "full" ? muted : "#000",
                      border: "none", borderRadius: 7, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: cohort.status === "full" ? "not-allowed" : "pointer",
                    }}>
                      {cohort.status === "full" ? "Waitlist" : "Enroll"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right panel — My Progress */}
        <div style={{ width: 300, background: surface, borderLeft: `1px solid ${border}`, display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "20px 16px 14px", borderBottom: `1px solid ${border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: text }}>📈 My Enrollments</div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px" }}>
            {myEnrollments.map((enr) => {
              const pct = Math.round((enr.completed / enr.milestones) * 100);
              return (
                <div key={enr.title} style={{ background: bg, borderRadius: 10, padding: "14px", marginBottom: 12, border: `1px solid ${border}` }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: text, marginBottom: 6, lineHeight: 1.4 }}>{enr.title}</div>
                  <div style={{ fontSize: 11, color: subtle, marginBottom: 10 }}>with {enr.trainer}</div>

                  {/* Progress bar */}
                  <div style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: subtle, marginBottom: 4 }}>
                      <span>Milestones</span>
                      <span style={{ color: pct === 100 ? green : text }}>{enr.completed}/{enr.milestones}</span>
                    </div>
                    <div style={{ height: 6, background: border, borderRadius: 99 }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: pct === 100 ? green : "#3B82F6", borderRadius: 99 }} />
                    </div>
                  </div>

                  {pct === 100 ? (
                    <div style={{ fontSize: 12, color: green, fontWeight: 600, marginTop: 8 }}>🏆 Completed — credits released!</div>
                  ) : (
                    <>
                      <div style={{ fontSize: 11, color: subtle, marginTop: 8 }}>Next milestone:</div>
                      <div style={{ fontSize: 12, color: text, marginTop: 2, marginBottom: 8 }}>{enr.nextMilestone}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 11, color: "#F59E0B" }}>⏳ {enr.escrow} SC in escrow</span>
                        <span style={{ fontSize: 11, color: subtle }}>Due {enr.dueDate}</span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            {/* Milestone validation panel for trainers */}
            <div style={{ marginTop: 8, padding: "14px", background: `${green}08`, borderRadius: 10, border: `1px solid ${green}20` }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: green, marginBottom: 10 }}>✅ Pending Validations</div>
              {[
                { learner: "Amara J.", milestone: "Portfolio site deployed", cohort: "Web Dev" },
                { learner: "Tiana B.", milestone: "Budget spreadsheet submitted", cohort: "Finance" },
              ].map((v) => (
                <div key={v.learner} style={{ marginBottom: 10, padding: "10px", background: surface, borderRadius: 8, border: `1px solid ${border}` }}>
                  <div style={{ fontSize: 12, color: text, fontWeight: 500 }}>{v.learner}</div>
                  <div style={{ fontSize: 11, color: subtle, marginBottom: 8 }}>{v.milestone}</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button style={{ flex: 1, background: green, color: "#000", border: "none", borderRadius: 6, padding: "5px 0", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>Approve</button>
                    <button style={{ flex: 1, background: border, color: subtle, border: "none", borderRadius: 6, padding: "5px 0", fontSize: 11, cursor: "pointer" }}>Review</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
