import { atom } from "recoil";

interface user {
  name: string;
  part: string;
}

export const part = atom<user>({
  key: "devPart",
  default: { name: "안채연", part: "front" },
});
