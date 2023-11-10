"use client";

import { Hit } from "../components/Hit";

import { InfiniteHits } from "../components/InfiniteHits";
import { InstantSearch } from "../components/InstantSearch";
import { Header } from "../components/Header";

export function Store() {
  return (
    <InstantSearch>
      <div className="max-w-6xl mx-auto mb-10">
        <Header></Header>

        <div className="mx-6 my-2" id="products">
          <InfiniteHits hitComponent={Hit} />
        </div>

        <p id="love">
          Carefully crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </InstantSearch>
  );
}
