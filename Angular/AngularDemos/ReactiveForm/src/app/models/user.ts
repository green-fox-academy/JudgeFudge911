import { Achievement } from "./achievement";

export interface User {
  username: string;
  profilePictureUrl?: string;
  achievements: Achievement[];
}
