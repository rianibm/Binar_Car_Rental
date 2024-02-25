import React from "react";
import { Input } from "antd/lib";
import type { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchBar: React.FC = () => (
  <Search
    placeholder="Search car"
    allowClear
    enterButton="Search"
    size="large"
    onSearch={onSearch}
  />
);

export default SearchBar;
