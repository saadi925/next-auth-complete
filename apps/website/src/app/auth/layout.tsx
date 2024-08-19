import React from 'react';

const AuthLayout = ({ children } : any) => {
  
  return (
    <div className="  flex items-center justify-center w-full flex-row-reverse  ">

        <div className="w-full p-2  flex-1 flex flex-col items-center mt-2 md:mt-0  ">
          <h1 className='px-6 text-4xl'>
            Welcome Back to <span className="text-blue-500 font-mono">AI</span> <span className="text-blue-500">Art</span>
          </h1>
       <div className="max-w-sm p-6 rounded-xl h-full w-full relative ">
       {children}
       <p className='mt-3'>
        credits :  <span className='text-sky-500 underline'>
        Saad Bukhari
        </span>
       </p>
       </div>
        </div>
        <div className=" hidden bg-cover  md:flex justify-center items-center  bg-center flex-1 overflow-hidden  brightness-50 h-screen  rounded-lg -z-10   " style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/painting-mountain-with-words-name-desert_1198763-215.jpg?w=740')" }}>
       
        </div>     
    </div>
  );
};

export default AuthLayout;
