'use client';
import useNavigationStore from '@/store/navigationStore';
import React from 'react';
import classNames from 'classnames';

type Tab = {
  name: string;
  tabIndex: number;
};

type NavbarTabProps = {
  tab: Tab;
};

const tabs = [
  {
    name: 'Your',
    tabIndex: 0,
  },
  {
    name: 'All',
    tabIndex: 1,
  },
  {
    name: 'Blocked',
    tabIndex: 2,
  },
];

const NavbarTab = ({ tab }: NavbarTabProps) => {
  const [selectedTab, setSelectedTab] = useNavigationStore((state) => [
    state.selectedTab,
    state.setSelectedTab,
  ]);

  const { name, tabIndex } = tab;

  return (
    <div
      onClick={() => {
        setSelectedTab(tabIndex);
      }}
      className={classNames(
        'text-gray-500 px-4 py-4 cursor-pointer',
        selectedTab === tabIndex
          ? 'border-b-2 border-rose-500 font-semibold'
          : ''
      )}
    >
      {name}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 shadow-md py-2 bg-gray-100">
      <div className="flex items-center w-full space-x-3 px-10">
        {tabs.map((tab, idx) => {
          return <NavbarTab tab={tab} key={idx} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
