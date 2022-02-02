import React from 'react'

export type ButtonProps = {
  children: React.ReactNode
  active?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, active, ...restProps }: ButtonProps) {
  return (
    <button
      {...restProps}
      className={`${
        active
          ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
          : 'border-gray-300'
      } px-4 py-1 border whitespace-nowrap rounded-md hover:bg-yellow-100 hover:text-yellow-800 hover:border-yellow-300`}
    >
      {children}
    </button>
  )
}

export default Button
