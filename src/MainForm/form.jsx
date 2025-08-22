import { useState } from "react";
import AppitizersAccordion from "../components/Appetizers/appetizers.jsx";
import TiffinsAccordion from "../components/Tiffins/tiffins.jsx";
import CurriesAccordion from "../components/Curries/curries.jsx";
import BiryanisAccordion from "../components/Biryani & Rice Varieties/biryani.jsx";
import FreshBreadsAccordion from "../components/Fresh Breads/freshbread.jsx";
import ChineseAccordion from "../components/Chinese/chinese.jsx";


function Form() {
  const [selectedAppitizers, setSelectedAppitizers] = useState([]);
  const [selectedTiffins,setSelectedTiffins] = useState([])
  const[selectedCurries,setSelectedCurries] = useState([])
  const[selectedBiryanis,setSelectedBiryanis] = useState([])
  const[selectedFreshBreads,setSelectedFreshBreads] = useState([])
  const[selectedChinese,setSelectedChinese] = useState([])
  const [submitted, setSubmitted] = useState(false);

  const prepareSelectedAppitizers = () => {
    if (selectedAppitizers.length === 0) return "No items selected";
    return selectedAppitizers.join(", ");
  };

   const prepareSelectedTiffins = () => {
    if (selectedTiffins.length === 0) return "No items selected";
    return selectedTiffins.join(", ");
  };

   const prepareSelectedCurries = () => {
    if (selectedCurries.length === 0) return "No items selected";
    return selectedCurries.join(", ");
  };

   const prepareSelectedBiryanis = () => {
    if (selectedBiryanis.length === 0) return "No items selected";
    return selectedBiryanis.join(", ");
  };

  const prepareSelectedFreshBreads = () => {
    if (selectedFreshBreads.length === 0) return "No items selected";
    return selectedFreshBreads.join(", ");
  };

   const prepareSelectedChinese = () => {
    if (selectedChinese.length === 0) return "No items selected";
    return selectedChinese.join(", ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "🍽️ New Catering Request from Bharat Bhavan Website");

    try {
      const response = await fetch("https://formsubmit.co/muttireddyramya9@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setSelectedAppitizers([]);
        setSelectedTiffins([])
        setSelectedCurries([])
        setSelectedBiryanis([])
        setSelectedFreshBreads([])
        setSelectedChinese([])
      } else {
        alert("⚠️ Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("⚠️ Something went wrong. Please check your internet.");
    }
  };

  return (
    <div className="bg-[#728D3E] border-gray border-[1px] min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 space-y-6 w-full max-w-screen-lg">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden inputs */}
            <input type="hidden" name="Appetizers" value={prepareSelectedAppitizers()} />
            <input type="hidden" name="Tiffins" value={prepareSelectedTiffins()} />
            <input type="hidden" name="Curries" value={prepareSelectedCurries()} />
            <input type="hidden" name="Biryanis" value={prepareSelectedBiryanis()} />
            <input type="hidden" name="FreshBreads" value={prepareSelectedFreshBreads()} />
            <input type="hidden" name="Chinese" value={prepareSelectedChinese()} />
          
            

            {/* Header */}
            <div className="flex items-center gap-5 border-b-2 justify-center">
              <div className="text-center pb-6">
                <h2 className="text-2xl font-bold text-[#CD7D1C]">Bharat Bhavan Catering</h2>
                <h4 className="text-[#728D3E] mt-2">
                  Indian Vegetarian Restaurants in Frisco TX
                </h4>
              </div>
            </div>

            {/* Accordions */}
             <AppitizersAccordion selectedAppitizers={selectedAppitizers}  setSelectedAppitizers={setSelectedAppitizers}/>
             <TiffinsAccordion selectedTiffins={selectedTiffins}  setSelectedTiffins={setSelectedTiffins}/>
             <CurriesAccordion selectedCurries={selectedCurries} setSelectedCurries={setSelectedCurries} />
             <BiryanisAccordion selectedBiryanis={selectedBiryanis} setSelectedBiryanis={setSelectedBiryanis} />
             <FreshBreadsAccordion selectedFreshBreads={selectedFreshBreads}  setSelectedFreshBreads={setSelectedFreshBreads}/>
             <ChineseAccordion selectedChinese={selectedChinese} setSelectedChinese={setSelectedChinese} />

           
           
           {/* Event Name */}
            <div>
              <label className="block text-[#CD7D1C] mb-1 font-semibold">Event Name</label>
              <input
                type="text"
                name="Event Name"
                required
                className="w-full border border-[#728D3E] rounded px-3 py-2 shadow-sm"
                placeholder="E.g. Birthday, Wedding, Corporate Lunch"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-[#CD7D1C] mb-1 font-semibold">Number of Guests</label>
              <input
                type="number"
                name="Number of Guests"
                required
                min={1}
                max={1200}
                className="w-full border border-[#728D3E] rounded px-3 py-2"
                placeholder="E.g. 100"
              />
            </div>

            {/* Event Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#CD7D1C] mb-1 font-semibold">Event Date</label>
                <input
                  type="date"
                  name="Event Date"
                  required
                  className="w-full border border-[#728D3E] rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-[#CD7D1C] mb-1 font-semibold">Event Time</label>
                <input
                  type="time"
                  name="Event Time"
                  required
                  className="w-full border border-[#728D3E] rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <label className="block text-[#CD7D1C] mb-1 font-semibold">Delivery Address</label>
              <textarea
                name="Delivery Address"
                rows={3}
                required
                className="w-full border border-[#728D3E] rounded px-3 py-2"
                placeholder="Street, City, Zip Code"
              ></textarea>
            </div>

           

            {/* Contact Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#CD7D1C] mb-1 font-semibold">Contact Email</label>
                <input
                  type="email"
                  name="Contact Email"
                  required
                  className="w-full border border-[#728D3E] rounded px-3 py-2"
                  placeholder="contact@example.com"
                />
              </div>
              <div>
                <label className="block text-[#CD7D1C] mb-1 font-semibold">Contact Phone</label>
                <input
                  type="tel"
                  name="Contact Phone"
                  required
                  className="w-full border border-[#728D3E] rounded px-3 py-2"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-[#CD7D1C] mb-1 font-semibold">Additional Notes</label>
              <textarea
                name="Additional Notes"
                rows={4}
                className="w-full border border-[#728D3E] rounded px-3 py-2"
                placeholder="Menu preferences, delivery instructions, etc."
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#CD7D1C] text-white font-medium py-2 rounded hover:bg-[#728D3E] transition"
              >
                Submit Catering Request
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-[#728D3E]">🎉 Thank you!</h2>
            <p className="mt-2 text-gray-600">
              We received your catering request. Our team will contact you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-[#CD7D1C] text-white px-6 py-2 rounded hover:bg-[#728D3E] transition"
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
