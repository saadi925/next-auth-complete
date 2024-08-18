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
        <div className=" hidden bg-cover  md:flex justify-center items-center  bg-center flex-1 overflow-hidden  brightness-50 h-screen  rounded-lg -z-10   " style={{ backgroundImage: "url('https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719605.jpg?t=st=1722727181~exp=1722730781~hmac=e9e61c2ba3119d4b86af2f82c54cfaf3c9b3f6b692a9f661a2aca44bbcae78c1&w=740')" }}>
       
        </div>     
    </div>
  );
};

export default AuthLayout;
