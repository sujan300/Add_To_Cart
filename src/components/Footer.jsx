import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className="container text-center py-2">
                <p>&copy; { new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    </>
  )
}

export default Footer