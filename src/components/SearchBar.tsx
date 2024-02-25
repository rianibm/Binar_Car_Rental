import React from "react";
import { Input, Button } from "antd";
import type { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchBar: React.FC = () => (
  <Search
    placeholder="Search car"
    allowClear
    enterButton={
      <Button className="bg-white text-primary border border-primary">
        Search
      </Button>
    }
    size="large"
    onSearch={onSearch}
  />
);

export default SearchBar;
