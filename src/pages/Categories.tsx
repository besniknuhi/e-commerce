import { Link } from "react-router-dom";
import styles from "./categories.module.css";
import CategoriesProducts from "../Components/categories/CategoriesProducts";
import { items, navCat } from "../assets/AllData";
import { useState, useEffect } from "react";

interface Items {
  id: number;
  category: string;
  img: string;
  description: string;
  price: number;
  otherImgs: string[] | string;
  specs: string;
  texture: string;
  weight: string;
  size: string;
}

export default function CategoriesItems() {
  const [item, setItem] = useState<{ name: string }>({ name: "all" });
  const [projects, setProjects] = useState<Items[]>([]);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(items);
    } else {
      const newProjects = items.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setItem({ name: target.textContent!.toLowerCase() });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-chevron-left"
              >
                <path d="M15 6l-6 6l6 6"></path>
              </svg>
              Home
            </Link>
            <h3> ALL</h3>
          </div>
          <div className={styles.filterButtons}>
            {navCat.map((item, index) => {
              return (
                <button
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  key={index}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.gridItems}>
          {projects.map((item) => {
            return <CategoriesProducts item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}
