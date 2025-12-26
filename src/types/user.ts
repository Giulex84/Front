export type UserProfile = {
  username: string;
  bio?: string;
  skills?: string[];
  badges: BadgeType[];
  createdPacts: number;
  completedPacts: number;
};

export type BadgeType =
  | "new"
  | "reliable"
  | "trusted"
  | "verified";
