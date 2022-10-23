import React from "react";
import { SearchResultItem } from "./SearchResultItem";
interface SearchResultModalTypes {
  description: string;
  id: string;
  image: string;
  title: string;
}
type Prop = {
  data: SearchResultModalTypes[];
};
export const SearchResultModal = ({ data }: Prop) => {
  return (
    <div className="Search_Result_Modal">
      {data === null ? (
        <span>No Result</span>
      ) : (
        data.map((l, index) => (
          <SearchResultItem
            title={l.title}
            image={l.image}
            rate="0.0"
            description={l.description}
          />
        ))
      )}
    </div>
  );
};
