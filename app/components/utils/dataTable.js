"use client";
import React, { useState } from "react";

import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Filters from "./filters";
const DataTable = ({ data }) => {
  console.log(data);
  const [columnFilters, setColumnFilters] = useState([]);
  const columns = [
    {
      accessorKey: "id",
      header: "id",
      cell: (props) => <p>{props.getValue()}</p>,
      filterFn: "includesString",
      enableColumnFilter: true,
    },
    {
      accessorKey: "first_name",
      header: "first name",
      cell: (props) => <p>{props.getValue()}</p>,
      filterFn: "includesString",
      enableColumnFilter: true,
    },
    {
      accessorKey: "last_name",
      header: "last name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "company",
      header: "company",
      cell: (props) => <p>{props.getValue()}</p>,
      size: 225,
    },
    {
      accessorKey: "status",
      header: "status",
      cell: (props) =>
        props.getValue() == true ? (
          <span className="rounded-full bg-green-700 text-white p-2">Paid</span>
        ) : (
          <span className="rounded-full bg-yellow-500 text-black p-2 text-xs">
            UnPaid
          </span>
        ),
    },
    {
      accessorKey: "code",
      header: "Amount",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-11/12">
      <div className="container mx-auto">
        <div className="flex justify-between w-full pt-4 items-center">
          <Filters
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
          />
          <div className="text-xl font-bold">
            <button className="bg-blue-800 text-white p-4 text-sm font-normal rounded-lg px-6">
              Add Product
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:justify-between w-full px-4 mb-2 mt-4 items-center"></div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="">
              <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
                {table.getHeaderGroups().map((headerGroup) =>
                  headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 relative"
                      width={header.getSize()}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <svg
                        className="w-4 h-4 absolute right-0 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.335 6.514 6.91 1.464a1.122 1.122 0 0 0-1.818 0l-3.426 5.05a.988.988 0 0 0 .91 1.511h6.851a.988.988 0 0 0 .91-1.511Zm-8.67 6.972 3.426 5.05a1.121 1.121 0 0 0 1.818 0l3.426-5.05a.988.988 0 0 0-.909-1.511H2.574a.987.987 0 0 0-.909 1.511Z"
                        ></path>
                      </svg>
                      {header.column.columnDef.header}
                    </th>
                  ))
                )}
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700 text-center">
              {table.getRowModel().rows.map((row) => (
                <tr className="py-10 bg-gray-100 hover:bg-gray-200 font-medium">
                  {row.getVisibleCells().map((cell) => (
                    <td className="px-4 py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}

                  <td className="px-4 py-4" width={220}>
                    <div className="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
                      <button className="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </button>
                      <button className="items-center px-2 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row items-center justify-between w-full px-4 py-4 text-sm text-gray-500  mx-auto">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
          <div className="flex items-center justify-between space-x-2">
            <a
              href="#"
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
              className="bg-sky-950 text-white p-2 rounded-md hover:bg-sky-800"
            >
              Previous
            </a>

            <a
              href="#"
              onClick={() => table.nextPage()}
              isDisabled={!table.getCanNextPage()}
              className="bg-sky-950 text-white p-2 rounded-md hover:bg-sky-800"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
