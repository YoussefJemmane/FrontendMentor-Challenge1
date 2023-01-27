
function App() {
  return (
  
      <div className="grid h-screen place-items-center bg-lightgrey">
      <div className="rounded-2xl border shadow-lg w-80 bg-white mobile:mx-4 ">
        <div className="flex justify-center m-3">
          <img src="../public/image-qr-code.png" alt="" className="rounded-2xl  "/>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center font-outfit text-p text-darkblue mt-3 mx-5 text-2xl font-bold">Improve your front-end skills by building projects</h1>
        </div>
        <div className="flex justify-center ">
          <p className="text-center text-grayishblue font-outfit text-p mx-7 mb-10 mt-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the nest level</p>
        </div>
      </div>
    
    </div>
    
    
  )
}

export default App
