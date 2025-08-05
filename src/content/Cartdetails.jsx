import React, { useContext } from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { myContext } from '../Context/Context';
import { useState } from 'react';
import { trend } from '../data/trend';

const cartdetails = () => {

    const { items, setitems } = useContext(myContext)
    console.log(items, "items")
    const [countData, setCountData] = useState(1)


    // const handleAdd = (id) => {

    //     setCountData((prev) => prev + 1)

    //     const newData = items?.map((data) =>

    //         data?.id === id ? { ...data, count: countData, label: countData * data.label } : data
    //     )
    //     console.log("newData0", newData)
    //     setitems(newData)
    // }
    // console.log(items, "items2")

    // const handleMinus = (id) => {

    //     const newData = items?.map((data) =>

    //         data?.id === id ? { ...data, count: countData, label: countData * data.label } : data
    //     )
    //     console.log("newData0", newData)
    //     setitems(newData)
    // }



    const handleAdd = (id) => {
        const newData = items.map((item) => {
            if (item.id === id) {
                const newCount = (item.count || 1) + 1;
                return {
                    ...item,
                    count: newCount
                    // label: newCount * Number(item.label),  // Use a separate `labelPerKg` field
                };
            }
            return item;
        });
        setitems(newData);
    };

    const handleMinus = (id) => {
        const newData = items.map((item) => {
            if (item.id === id && item.count > 1) {
                const newCount = item.count - 1;
                return {
                    ...item,
                    count: newCount
                    // label: newCount * Number(item.label),
                };
            }
            return item;
        });
        setitems(newData);
    };
    return (
        <div>
            <div >
                <table className='w-full border-collapse mt-10 '>
                    <thead className='bg-gray-200 text-left text-xl font-bold border-b-2'>
                        <tr className=''>
                            <td className='p-4'>Product name</td>
                            <td className='p-4'>Product image</td>
                            <td className='p-4'>Price</td>
                            <td className='p-4'>kg</td>
                            <td className='p-4'>Tot rate</td>
                        </tr>
                    </thead>
                    {items?.map((data) => (
                        <tr className='border-b-2 text-lg font-medium'>
                            <td className='pl-5'> <label >{data?.header}</label></td>

                            <td className='w-[80px] h-[80px] object-cover rounded'><img src={data?.img} /></td>

                            <td className='p-4'><label >{data?.label}</label></td>

                            <td className='p-4'>
                                <button onClick={() => handleMinus(data.id)} className='border w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-blue-400'><FaMinus /></button>

                                <p>{data.count}</p>

                                <button onClick={() => handleAdd(data.id)} className='border w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-blue-400'><IoMdAdd /></button>

                            </td>
                            <td className='pl-5'><label >{data.label * data.count}</label></td>
                        </tr>
                    ))}
                </table>
                <table className='max-w-[400px] border border-gray-300 text-left text-sm font-bold mt-10 rounded-4xl'>
                    <tr className='bg-gray-100 text-[20px]'>
                        <td className='p-4 border'>Items</td>
                        <td className='p-4 border '>Discount 10%</td>
                        <td className='p-4 border '>Total amount</td>
                    </tr>
                    <tr className='hover:bg-gray-50 text-[15px]'>
                        <td className="p-4 border">s</td>
                        <td className="p-4 border">s</td>
                        <td className="p-4 border">s</td>
                    </tr>
                </table>
            </div >
        </div >
    )
}

export default cartdetails