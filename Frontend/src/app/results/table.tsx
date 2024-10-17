import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const ResultTable = ({ data }: { data: any }) => {
  // Determine if the congratulatory message should be displayed
  const shouldShowCongratulations =
    (data.rank <= 25 && (data.category === "ARETEOX" || data.category === "METIOX")) ||
    (data.rank <= 20 && (data.category === "APOLLOX" || data.category === "ATHENOX"));

    const handleSubmit = async (e:any) => { // Make the function asynchronous
      e.preventDefault();
      const modifyPdf = async () => { // Define the modifyPdf function
        // Fetch an existing PDF document
        const url = '/Certificates/certi.pdf';
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
  
        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
        // Embed the Helvetica font
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
        // Get the first page of the document
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
  
        // Get the width and height of the first page
        const { width, height } = firstPage.getSize();
  
        // text and fontSize
        const text = data.name;
        const fontSize = 40;
  
        // Finding out the width of text
        const textWidth = helveticaFont.widthOfTextAtSize(text, fontSize);
  
        // Define the center of text
        const centerX = (width - textWidth) / 3;
  
        // Draw a string of text diagonally across the first page
        firstPage.drawText(text, {
          x: centerX,
          y: 335,
          size: fontSize,
          font: helveticaFont,
          color: rgb(0, 0, 0),
        });
  
        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save();
  
        // Trigger the browser to download the PDF document with a dynamic filename
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const url1 = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        const filename = `${data.name}_Certification.pdf`; // Construct the filename
        a.href = url1;
        a.download = filename; // Set the filename
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      };
  
      await modifyPdf(); // Call the modifyPdf function
    };
    

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="md:w-[60%] bg-transparent backdrop-blur-xl text-white md:text-2xl p-8 rounded-lg shadow-xl">
        <table className="w-full table-auto border-collapse border border-white">
          <thead>
            <tr>
              <th className="border border-white px-4 py-2 text-left">NAME</th>
              <th className="border border-white px-4 py-2 text-right">{data.name}</th>
            </tr>
            <tr>
              <th className="border border-white px-4 py-2 text-left">CATEGORY</th>
              <th className="border border-white px-4 py-2 text-right">{data.category}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-white">
              <td className="border border-white px-4 py-2">RANK</td>
              <td className="border border-white px-4 py-2 text-right">{data.rank}</td>
            </tr>
            <tr className="border-t border-white">
              <td className="border border-white px-4 py-2">TOTAL MARKS OBTAINED</td>
              <td className="border border-white px-4 py-2 text-right">{data.totalMarks}</td>
            </tr>
          </tbody>
        </table>

        {/* Conditional message for congratulations */}
        {shouldShowCongratulations && (
          <div className="mt-4 text-center text-green-400 font-semibold">
            Congratulations!! You are selected for the interview for round 2.
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button className="bg-white text-blue-900 py-2 px-6 rounded-lg shadow-md hover:bg-gray-200" onClick={handleSubmit}>
            DOWNLOAD CERTIFICATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
