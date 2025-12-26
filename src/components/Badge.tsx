type BadgeType = "Verified" | "Active" | "New" | "Community";

const badgeStyles: Record<BadgeType, { label: string; bg: string; color: string }> = {
  Verified: { label: "Verified", bg: "#E6F4EA", color: "#137333" },
  Active: { label: "Active", bg: "#E8F0FE", color: "#1A73E8" },
  New: { label: "New", bg: "#FEF7E0", color: "#B06000" },
  Community: { label: "Community", bg: "#F1F3F4", color: "#5F6368" },
};

export default function Badge({ type }: { type: BadgeType }) {
  const s = badgeStyles[type];
  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        padding: "0.25rem 0.6rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        fontWeight: 600,
        marginRight: "0.4rem",
        display: "inline-block",
      }}
      title={s.label}
    >
      {s.label}
    </span>
  );
}

export type { BadgeType };
