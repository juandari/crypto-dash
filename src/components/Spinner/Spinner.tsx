import React from 'react'

function Spinner() {
  return (
    <div className="flex items-center justify-center space-x-1 animate-pulse">
      <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
      <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
      <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
    </div>
  )
}

export default Spinner
