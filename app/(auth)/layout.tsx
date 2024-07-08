import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return <div className="h-screen flex justify-center items-center w-full p-4">{children}</div>;
}

export default AuthLayout