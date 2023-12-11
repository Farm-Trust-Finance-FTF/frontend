import { bright, paul, mars, adams, gino } from "../public/img/team";
interface TeamItems {
  img: string;
  title: string;
  role: string;
}

export const teamItems: TeamItems[] = [
  {
    img: gino,
    title: "Gino Osahon",
    role: "Blockchain Developer",
  },
  {
    img: mars,
    title: "Marcellus Ifeany",
    role: "Blockchain Developer",
  },
  {
    img: paul,
    title: "Okafor Paul",
    role: "Product Designer",
  },
  {
    img: adams,
    title: "Great (Ifeanyichukwu) Adams",
    role: "Fullstack/Blochain Developer",
  },
  {
    img: bright,
    title: "Bright Lazarus",
    role: "Frontend Developer",
  },
];
