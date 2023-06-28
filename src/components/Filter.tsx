'use client';
import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import useUserStore from '@/store/userStore';
import toast from 'react-hot-toast';
import useFilterStore from '@/store/filterStore';

type FilterData = {
  subscription: boolean;
  burner: boolean;
  cardholder: string;
};

const Filter = () => {
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const toggleFilterDropdown = () => setFilterDropdownOpen(!filterDropdownOpen);
  const [setUserId, userId] = useUserStore((state) => [
    state.setUserId,
    state.userId,
  ]);

  const [setSubscription, setBurner] = useFilterStore((state) => [
    state.setSubscription,
    state.setBurner,
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterData>();

  const onSubmit = handleSubmit((data) => {
    setUserId(parseInt(data.cardholder));
    setSubscription(data.subscription);
    setBurner(data.burner);
    toggleFilterDropdown();
    toast.success('User set to: User ' + data.cardholder);
  });

  const handleClearFilter = () => {
    reset();
    setSubscription(false);
    setBurner(false);
    toast.success('Filter Cleared!');
  };

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
        <form
          onSubmit={onSubmit}
          className="absolute top-12 right-0 w-80 sm:w-96 bg-white shadow-lg rounded-lg py-2 pb-6 px-4"
        >
          <div className="border-b-2 py-2 text-black">
            <h4 className="px-4 font-semibold">Filters</h4>
          </div>

          {/* Types  */}
          <div className="p-4 border-b-2 space-y-2">
            <p>Type</p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  {...register('subscription')}
                  id="subscription"
                  type="checkbox"
                />
                <label htmlFor="subscription">Subscription</label>
              </div>

              <div className="flex items-center space-x-2">
                <input {...register('burner')} id="burner" type="checkbox" />
                <label htmlFor="burner">Burner</label>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-2 w-full">
            <p>Cardholder</p>
            <select
              id="cardholder"
              placeholder="Select Cardholder"
              className="w-full px-4 py-2 bg-gray-100 rounded-md"
              {...register('cardholder')}
            >
              <option disabled={userId === 1} defaultChecked value={1}>
                User 1
              </option>
              <option disabled={userId === 2} value={2}>
                User 2
              </option>
            </select>
          </div>

          <div className="flex space-x-2 items-center w-full px-4">
            <button className="px-6 py-2 rounded-lg bg-rose-600 text-white w-full">
              Apply
            </button>
            <button
              type="button"
              onClick={handleClearFilter}
              className="px-6 py-2 rounded-lg bg-gray-100 w-full"
            >
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Filter;
