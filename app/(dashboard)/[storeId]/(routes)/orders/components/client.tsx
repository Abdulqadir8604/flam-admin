"use client"

import {Heading} from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {useParams, useRouter} from "next/navigation";
import React from "react";
import {OrderColumn, columns} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";

interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
                                                                    data
                                                                }) => {

    const router = useRouter()
    const params = useParams()

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description={"Manage orders for your store"}
            />
            <Separator />
            <DataTable columns={columns} data={data} searchKey={"products"} />
        </>
    )
}