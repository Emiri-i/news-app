import React, { useEffect, useContext } from "react";
import { newsItemsContext } from "../store/newsItemContext";

import "./SelectCategory.scss";

const SelectCategory: React.FC = () => {
  const newsCtx = useContext(newsItemsContext);
  const categoryList = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  useEffect(() => {
    clickCategory();
  }, []);
  useEffect(() => {
    changeCategory();
  }, [newsCtx.newsCategoryName]);
  const clickCategory = (e?: React.MouseEvent) => {
    if (e) {
      const eventTarget = e.target as HTMLElement;
      newsCtx.setNewsCategoryName(eventTarget.innerHTML.toLowerCase());
    }
  };

  const changeCategory = () => {
    const categoryElement =
      document.querySelectorAll<HTMLInputElement>(".category");
    categoryElement.forEach((el: HTMLElement) => {
      if (newsCtx.newsCategoryName === el.innerHTML.toLowerCase()) {
        el.className = "category current";
      } else {
        el.className = "category";
      }
    });
  };

  return (
    <div className="category-wrapper">
      {categoryList.map((list) => (
        <button onClick={clickCategory} className="category">
          {list}
        </button>
      ))}
    </div>
  );
};

export default SelectCategory;
