import React from "react";
type SearchResultModalProps = {
  searchText: String;
};
export const SearchResultModal = ({ searchText }: SearchResultModalProps) => {
  return (
    <div className="Search_Result_Modal">თქვენ ეძებთ ფილმს: {searchText}</div>
  );
};
