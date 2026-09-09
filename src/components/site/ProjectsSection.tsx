// ProjectsSection.tsx
import { useState } from "react";
import { projects } from "./data";
import { useAvailableProjects } from "@/lib/useImageProbe";

interface ProjectMeta {
  id: number;
  title: string;
  description: string;
}

const MAX_IMAGES = 50;

const arrowButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 99999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "46px",
  height: "84px",
  backgroundColor: "rgba(28, 26, 23, 0.82)", // deep graphite
  color: "#efeae1", // warm off-white chevron
  border: "none",
  borderRadius: 0,
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: 1,
  paddingBottom: "2px",
  cursor: "pointer",
  pointerEvents: "auto",
  boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
};

function ProjectCard({ id, project }: { id: number; project: ProjectMeta }) {
  const [currentImg, setCurrentImg] = useState(1);

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev < MAX_IMAGES ? prev + 1 : 1));
  };

  const handleImageError = () => setCurrentImg(1);

  return (
    <article className="panel flex flex-col overflow-hidden">
      <div
        onContextMenu={(e) => 
