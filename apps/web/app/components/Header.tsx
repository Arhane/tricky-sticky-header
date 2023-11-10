"use client";

import { useScrollDirection } from "../hooks/useScrollDirection";
import { useMemo } from "react";
import { Breadcrumb } from "react-instantsearch-hooks-web";
import { ProductActions } from "./ProductActions";

export function Header() {
  const direction = useScrollDirection();
  const classnames = useMemo(() => {
    return direction === "down" ? "-top-16" : "top-0";
  }, [direction]);

  return (
    <div className={`transition-all duration-500 ${classnames} sticky z-100`}>
      <div className={`h-16 bg-black`}>
        <div className={`p-5 font-bold text-white relative`}>
          Disappearing Header
        </div>
      </div>

      <div className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white">
        <div id="category-title" className="w-40">
          <Breadcrumb
            attributes={[
              "hierarchicalCategories.lvl0",
              "hierarchicalCategories.lvl1",
              "hierarchicalCategories.lvl2",
            ]}
          />
        </div>

        <ProductActions></ProductActions>
      </div>
    </div>
  );
}
