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
                if (newCount > 10) {
                    alert("FRUIT LIMIT 10KG ONLY")
                }
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
            else {
                alert("Order accepts minimum 1kg only")
            }
            return item;
        });
        setitems(newData);
    };

    const totalAmount = items?.reduce((sum, item) => sum + item.label * item.count, 0);

    const discount = (totalAmount >= 1000) ? totalAmount * 0.10 : 0;

    const finalAmount = totalAmount >= 1000 ? totalAmount - discount : totalAmount;

    const delfunc = (data) => {

        const del = items.filter((item) => (item.id !== data.id))

        setitems(del)

        // setitems(items)

        alert("selected cart item deleted successfully")

    }

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
                            <td className='p-4'>delete item</td>
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

                            <td><button className='cursor-pointer hover:text-red-700' onClick={() => delfunc(data.id)}>Del</button></td>
                        </tr>
                    ))}
                </table>

                <table className='max-w-[500px] justify-center border border-gray-300 text-left text-sm font-bold mt-10 rounded-4xl'>

                    <tr className='bg-gray-100 text-[20px]'>
                        <td className='p-4 border'>No of items</td>
                        <td className='p-4 border'>Total amount</td>
                        <td className='p-4 border '>10% - Discount </td>
                        <td className='p-4 border '>Final amount</td>
                    </tr>
                    {/* {items?.map((sum, item) => ( */}
                    <tr className='hover:bg-gray-50 text-[15px]'>
                        <td className="p-4 border">{items?.length}</td>
                        <td className="p-4 border">{totalAmount.toFixed(2)}</td>
                        <td className="p-4 border">Rs. {discount.toFixed(2)}</td>
                        <td className="p-4 border">Rs. {finalAmount.toFixed(2)}</td>
                    </tr>
                    {/* ))} */}
                </table>
                <label className='text-red-600 text-[16px]'>"Get 10% discount on purchases over ₹1000."

                </label>

            </div >
        </div >
    )
}

export default cartdetails