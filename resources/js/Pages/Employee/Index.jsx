import { router } from '@inertiajs/react';
import React, { useState } from 'react';

const EmployeeList = ({ employees, query }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState(query || '');
    const itemsPerPage = 10;

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // search ค่าที่พิมพ์ในช่อง input
        router.get('/employees', { search });

    };
    return (
        <div className='min-h-screen bg-sky-900'>
            <h1 className='pt-5 pb-8 font-medium tracking-wide font-serif text-amber-400 text-center text-3xl '>Employee List</h1>

            <form onSubmit={handleSearch} className="my-4 mx-3">
                <input
                    type="text"
                    class="w-80 p-2 border-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" class="px-4 py-2 mx-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 active:scale-95 transition">
                    Search
                </button>
            </form>

            {/* เมื่อค้นหาไม่พบข้อมูลจะแสดงข้อความ Not Found */}
            {employees.data.length === 0 ? (
                // ถ้าอยากให้ขึ้นแบบ notfound
                // <div className='pt-5 pb-8 font-medium tracking-wide font-serif text-white text-center text-2xl'>- Not found -</div>
                <table class="bg-neutral-200 w-full border-collapse border border-slate-500 ...">
                    <thead>
                        <tr>
                            <th class="bg-neutral-500 border border-slate-600 ...">ID</th>
                            <th class="bg-neutral-500 border border-slate-600 ...">FirstName</th>
                            <th class="bg-neutral-500 border border-slate-600 ...">LastName</th>
                            <th class="bg-neutral-500 border border-slate-600 ...">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="bg-neutral-300 text-center border border-slate-700 ...">-</td>
                            <td class="text-center border border-slate-700 ...">-</td>
                            <td class="text-center border border-slate-700 ...">-</td>
                            <td class="text-center border border-slate-700 ...">-</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <>
                    <table class="bg-neutral-200 w-full border-collapse border border-slate-500 ...">
                        <thead>
                            <tr>
                                <th class="bg-neutral-500 border border-slate-600 ...">ID</th>
                                <th class="bg-neutral-500 border border-slate-600 ...">FirstName</th>
                                <th class="bg-neutral-500 border border-slate-600 ...">LastName</th>
                                <th class="bg-neutral-500 border border-slate-600 ...">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.data.map((employee, index) => (
                                <tr key={index}>
                                    <td class="bg-neutral-300 text-center border border-slate-700 ...">{employee.emp_no}</td>
                                    <td class="text-center border border-slate-700 ...">{employee.first_name}</td>
                                    <td class="text-center border border-slate-700 ...">{employee.last_name}</td>
                                    <td class="text-center border border-slate-700 ...">{employee.birth_date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default EmployeeList;
