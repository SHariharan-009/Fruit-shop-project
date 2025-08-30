import React, { useContext } from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { myContext } from '../Context/Context';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

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

    const handleAdd = (header) => {

        const newData = items.map((item) => {
            if (item.header === header) {

                const newCount = (item.count || 1) + 1;

                if (newCount > item.quantity) {

                    alert("Maximum 10 ONLY")
                }
                return {
                    ...item,
                    count: newCount
                };
            }
            return item;
        });
        setitems(newData);
    };

    const handleMinus = (header) => {

        const newData = items.map((item) => {

            if (item.header === header) {

                const newCount = (item.count) - 1;

                if (newCount < item.minquantity) {
                    alert("minimum 1")
                }

                return {
                    ...item,
                    count: newCount
                };
            }
            return item;
        });
        setitems(newData);
    };

    const totalAmount = items?.reduce((sum, item) => sum + item.label * item.count, 0);

    const discount = (totalAmount >= 1000) ? totalAmount * 0.10 : 0;

    const finalAmount = totalAmount >= 1000 ? totalAmount - discount : totalAmount;

    const delfunc = (header) => {

        const del = items.filter((item) => (item.header !== header))

        setitems(del)

        alert("selected cart item deleted successfully")

    }

    return (
        <div>
            <div >
                <table className='w-full border-collapse mt-10 '>
                    <thead className='bg-gray-200 text-left text-xl font-bold border-b-2 content-center'>
                        <tr className=''>
                            <td className='p-4'>Product name</td>
                            <td className='p-4'>Product image</td>
                            <td className='p-4'>Price</td>
                            <td className='p-4'>kg/Parcel/Pocket</td>
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

                                <button onClick={() => handleMinus(data.header)} className='border w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-blue-400'><FaMinus /></button>

                                <p>{data.count}</p>

                                <button onClick={() => handleAdd(data.header)} className='border w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-blue-400'><IoMdAdd /></button>

                            </td>
                            <td className='pl-5'><label >{data.label * data.count}</label></td>

                            <td><button onClick={() => delfunc(data.header)}><MdDelete className='cursor-pointer hover:text-red-700 flex items-center justify-center ' /></button></td>
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