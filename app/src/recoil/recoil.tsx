import { atom } from "recoil";

export const part = atom<string>({
  key: "part",
  default: "front",
});

export const name = atom<string>({
  key: "name",
  default: "안채연",
});

export const team = atom<string>({
  key: "team",
  default: "",
});

export const token = atom<string>({
  key: "token",
  default: "",
});
