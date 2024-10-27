// 'use client'

import Link from "next/link";

// for render in client side
export default function Home() {
  console.log("App Home Page.")
  return (
    <>
    <div className="text-center bg-amber-100 h-full w-full">
      This is Application start page.
      or It's a home page.

      <div className="">
      <Link href="/adminData/dashboard" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Go to Admin Dashboard
      </Link>

      <Link href="/adminData/manageData" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
      Got to Admin manage data page
      </Link>

      <Link href="/addProject" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Add Projects
      </Link>

      <Link href="/editProject" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
      Edit projects
      </Link>
      </div>
      
      </div>
      </>
  
      
     );
}
