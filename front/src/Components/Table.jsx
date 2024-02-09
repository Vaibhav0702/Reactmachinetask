import React, { useEffect } from 'react'

export const Table = ({ data }) => {

    return (

        <div className="relative shadow-md w-[80%] h-[170px] border bg-white rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-white rounded-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                  
                    {
                        data && data?.map((e) => {
                         
                            return( <tr key={e.id} className="odd:bg-[#f6f6f6] even:bg-white ">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                   {e.id}
                                </th>
                                <td className="px-6 py-4">
                                    {e.name}
                                </td>
                                <td className="px-6 py-4">
                                    {e.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {e.price}
                                </td>
                            </tr> )

                           
                        })
                    }

                </tbody>
            </table>
        </div>

    )
}
