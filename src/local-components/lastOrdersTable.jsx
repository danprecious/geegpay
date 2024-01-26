import { tableData } from "@/utils/reusableData";
import React from "react";

const LastOrdersTable = () => {
  return (
    <table className="w-full text-left ">
      <thead className="">
        <tr className="text-gray-400 py-2">
          <th className="py-4">Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Invoice</th>
        </tr>
      </thead>

      <tbody>
        {tableData.map(({name, date, amount, status}) => (
            <tr className=" slim-border border-b-[1px]">
                <td className="py-4">{name}</td>
                <td className="">{date}</td>
                <td>{amount}</td>
                <td>{status}</td>
                <td className="">View</td>
                
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LastOrdersTable;
