'use client';
import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import classNames from 'classnames';

type Props = {};

const Filter = (props: Props) => {
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const toggleFilterDropdown = () => setFilterDropdownOpen(!filterDropdownOpen);

  return (
    <div className="relative">
      <div
        onClick={toggleFilterDropdown}
        className={classNames(
          'px-2 py-2 flex items-center space-x-1 rounded-lg text-gray-400 cursor-pointer',
          filterDropdownOpen ? 'bg-gray-200' : 'bg-gray-100'
        )}
      >
        <BsFilter />
        <span>Filter</span>
      </div>

      {/* Filter Dropdown Menu */}
      {filterDropdownOpen && (
        <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg py-2"></div>
      )}
    </div>
  );
};

export default Filter;
