import { SelectBudgetOptions } from '@/constants/options';
import { SelectTravelsList } from '@/constants/options';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-autocomplete';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { AI_PROMPT } from '@/constants/options';
import { chatSession } from '@/service/AIModel';

function CreateTrip() {
  const [place, setPlace] = useState('');
  const [formData, setFormData] = useState({}); // ✅ Correctly initialized as an object

  const handleInputChange = (name, value) => {
    
    setFormData((prev) => ({
      ...prev, // ✅ Ensures proper state updates
      [name]: value
    }));
  };

  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);


  const onGenerateTrip=async()=>{
    if(formData?.noOfDays>5&& !formData?.budget ||!formData?.traveler ){
      toast("Please Fill all details");
      return;
    }
    


   const FINAL_PROMPT=AI_PROMPT
   .replace('{location}',formData?.location)
   .replace('{totalDays}',formData?.noOfDays)
   .replace('{traveler}',formData?.traveler)
   .replace('{budget}',formData?.budget)
   .replace('{totalDays}',formData?.noOfDays)

   console.log(FINAL_PROMPT);

   const result = await chatSession.sendMessage(FINAL_PROMPT);

   console.log(result?.response?.text()); 
  }
  return (
    <div className="min-h-screen w-screen flex justify-center bg-white pt-10 ">
      <div className='w-full max-w-6xl px-5 py-10 bg-white-100 rounded-lg '>
        <h2 className='font-bold text-3xl text-blue-500'>Tell us your travel preferences 🏕️🌴</h2>
        <p className='mt-3 text-gray-500 text-xl'>
          Just provide basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>

        <div className='mt-20 flex flex-col gap-9'>
          {/* Destination Selection */}
          <div>
            <h2 className='text-xl my-3 font-medium text-blue-500'>What is Your Destination?</h2>
            <GooglePlacesAutocomplete
  className='w-full border-2 border-blue-400 rounded-lg p-2 text-lg bg-blue-200 text-blue-600'
  apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
  onPlaceSelected={(place) => {
    if (!place || !place.formatted_address) {
      console.error("Invalid place selected:", place);
      return;
    }
    setPlace(place.formatted_address);
    handleInputChange('location', place.formatted_address);
  }}
  options={{
    types: ['(cities)'],
  }}
/>
          </div>

          {/* Trip Duration */}
          <div>
            <h2 className='text-xl my-3 font-medium text-blue-500 '>How many days are you planning your trip?</h2>
            <input
              type="number"
              placeholder='Ex: 3'
              className='w-full border-2 border-blue-400 rounded-lg p-2 text-lg bg-blue-200 text-blue-600'
              onChange={(e) => handleInputChange('noOfDays', e.target.value)} // ✅ Stores data correctly
            />
          </div>

          {/* Travel Companion Selection */}
          <div>
            <h2 className='text-xl my-3 font-medium text-blue-600'>Who do you plan on traveling with on your next adventure?</h2>
            <div className='grid grid-cols-3 gap-5 mt-5 cursor-pointer text-blue-700'>
              {SelectTravelsList.map((item, index) => (
                <div key={index} 
                     className={`p-4 border-2 border-blue-300 rounded-lg hover:shadow-lg cursor-pointer ${
                       formData?.traveler === item.people ? "shadow-lg border-black" : ""
                     }`}
                     onClick={() => handleInputChange('traveler', item.people)} // ✅ Saves selection
                >
                  <h2 className='text-4xl'>{item.icon}</h2>
                  <div>
                    <h3 className='text-lg font-bold'>{item.title}</h3>
                    <p className='text-gray-500'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div>
            <h2 className='cursor-pointer text-xl my-3 font-medium text-blue-600'>What is your Budget?</h2>
            <div className='grid grid-cols-3 gap-5 mt-5 text-blue-700'>
              {SelectBudgetOptions.map((item, index) => (
                <div key={index} 
                     className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                       formData?.budget === item.title ? "shadow-lg border-black" : ""
                     }`}
                     onClick={() => handleInputChange('budget', item.title)} // ✅ Stores selected budget
                >
                  <h2 className='text-4xl'>{item.icon}</h2>
                  <div>
                    <h3 className='text-lg font-bold'>{item.title}</h3>
                    <p className='text-gray-500'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className='my-10 flex justify-end '>
            <Button className="bg-blue-700" onClick={onGenerateTrip}>
              Generate Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
