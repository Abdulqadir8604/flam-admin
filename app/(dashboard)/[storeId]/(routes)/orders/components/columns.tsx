"use client"

import {ColumnDef} from "@tanstack/react-table"

import {CellAction} from "./cell-action"

export type OrderColumn = {
    id: string
    phone: string;
    address: string;
    isPaid: boolean;
    totalPrice: string;
    products: string;
    createdAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
      accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "totalPrice",
        header: "Total Price",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
        cell: ({row}) => <span className="text-green-500">{row.original.isPaid ? "Yes" : "No"}</span>
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
];