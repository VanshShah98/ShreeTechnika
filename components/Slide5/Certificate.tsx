
export default function Certificate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-black p-4 md:p-8" id="CertificateSlide">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-3xl p-6 md:p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Certificate of Achievement</h1>
        <img src="/ISO.svg" width={600} height={400} alt="Certificate" className="rounded-lg shadow-md mb-6" />
        <div className="text-center space-y-2">
          <p className="text-gray-500 dark:text-gray-400">Issued to Shree Technika</p>
          <p className="text-gray-500 dark:text-gray-400">Awarded on 27th December 2019</p>
          <p className="text-gray-500 dark:text-gray-400">
          We are proud to announce that Shree Technika has been awarded the ISO 9001 certification, demonstrating our commitment to quality and excellence in providing inspection services, engineering, and supply of equipment.
          </p>
        </div>
      </div>
    </div>
  )
}