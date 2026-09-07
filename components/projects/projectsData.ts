import { ProjectData } from "./ProjectCard";

export interface ProjectMeta {
  key: string;
  imageSrc: string;
  focalAnchor: "top" | "center" | "bottom";
  featured: boolean;
}

export const PROJECTS_CATALOG: ProjectMeta[] = [
  {
    key: "capella",
    imageSrc: "/assets/projects/CAPELLA HOTEL - DIRIYAH.png",
    focalAnchor: "top",
    featured: true,
  },
  {
    key: "sindalahIsland",
    imageSrc: "/assets/projects/sindalah-island.jpg",
    focalAnchor: "center",
    featured: true,
  },
  {
    key: "salmanPark",
    imageSrc: "/assets/projects/KING SALMAN PARK.png",
    focalAnchor: "center",
    featured: true,
  },
  {
    key: "qiddiya",
    imageSrc: "/assets/projects/Motor Sport Hotel -- Qiddiya.png",
    focalAnchor: "top",
    featured: true,
  },
  {
    key: "airportLogistics",
    imageSrc: "/assets/projects/King Fahd International Airport - Logistics Warehouse.png",
    focalAnchor: "center",
    featured: true,
  },
  {
    key: "masarNumu",
    imageSrc: "/assets/projects/MASAR NUMU RESIDENTIAL TOWER.png",
    focalAnchor: "top",
    featured: true,
  },
  {
    key: "informationTower",
    imageSrc: "/assets/projects/Ministry of Information Tower.png",
    focalAnchor: "center",
    featured: true,
  },
  {
    key: "rafalTower",
    imageSrc: "/assets/projects/Rafal Tower - Ascot.png",
    focalAnchor: "top",
    featured: false,
  },
  {
    key: "salmanUniversity",
    imageSrc: "/assets/projects/KING SALMAN UNIVERSITY.png",
    focalAnchor: "center",
    featured: false,
  },
  {
    key: "zahranTowers",
    imageSrc: "/assets/projects/ZAHRAN TOWERS.png",
    focalAnchor: "center",
    featured: false,
  },
];
