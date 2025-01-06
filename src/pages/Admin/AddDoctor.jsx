import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false);
  const [docName, setDocName] = useState('');
  const [docEmail, setDocEmail] = useState('');
  const [docPassword, setDocPassword] = useState('');
  const [docExperience, setDocExperience] = useState('1 Year');
  const [docSpeciality, setDocSpeciality] = useState('General Physician');
  const [docEducation, setDocEducation] = useState('');
  const [docFees, setDocFees] = useState('');
  const [docAddress1, setDocAddress1] = useState('');
  const [docAddress2, setDocAddress2] = useState('');
  const [docAbout, setDocAbout] = useState('');
 


  return (
    <form className="m-5 w-full">
      <p className="mb-3 text-lg font-bold">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p className="text-sm font-bold">
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Doctor Name</p>
              <input onChange={(e)=> setDocName(e.target.value)} value={docName} className="border border-gray-600 rounded px-3 py-2" type="text" placeholder="name" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Doctor Email</p>
              <input onChange={(e)=> setDocEmail(e.target.value)} value={docEmail} className="border border-gray-600 rounded px-3 py-2"  type="email" placeholder="email" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Doctor Password</p>
              <input onChange={(e)=> setDocPassword(e.target.value)} value={docPassword} className="border border-gray-600 rounded px-3 py-2"  type="password" placeholder="password" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Experience</p>
              <select onChange={(e)=> setDocExperience(e.target.value)} value={docExperience} className="border border-gray-600 rounded px-3 py-2"  name="" id="">
                <option className="text-gray-800" value="1 Year">1 Year</option>
                <option className="text-gray-800" value="2 Year">2 Year</option>
                <option className="text-gray-800" value="3 Year">3 Year</option>
                <option className="text-gray-800" value="4 Year">4 Year</option>
                <option className="text-gray-800" value="5 Year">5 Year</option>
                <option className="text-gray-800" value="6 Year">6 Year</option>
                <option className="text-gray-800" value="7 Year">7 Year</option>
                <option className="text-gray-800" value="8 Year">8 Year</option>
                <option className="text-gray-800" value="9 Year">9 Year</option>
                <option className="text-gray-800" value="10 Year">10 Year</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Fees</p>
              <input onChange={(e)=> setDocFees(e.target.value)} value={docFees} className="border border-gray-600 rounded px-3 py-2"  type="number" placeholder="fees" required />
            </div>

          </div>

          <div className="flex-1 flex flex-col gap-4">

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Speciality</p>
              <select onChange={(e)=> setDocSpeciality(e.target.value)} value={docSpeciality} className="border border-gray-600 rounded px-3 py-2"  name="" id="">
                <option className="text-gray-800" value="General Physician">General physician</option>
                <option className="text-gray-800" value="Gynecologist">Gynecologist</option>
                <option className="text-gray-800" value="Dermatologist">Dermatologist</option>
                <option className="text-gray-800" value="Pediatricians">Pediatricians</option>
                <option className="text-gray-800" value="Neurologist">Neurologist</option>
                <option className="text-gray-800" value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-700">Education</p>
              <input onChange={(e)=> setDocEducation(e.target.value)} value={docEducation} className="border border-gray-600 rounded px-3 py-2"  type="text" placeholder="Education" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold text-gr">Address</p>
              <input onChange={(e)=> setDocAddress1(e.target.value)} value={docAddress1} className="border border-gray-600 rounded px-3 py-2"  type="text" placeholder="address1" required />
              <input onChange={(e)=> setDocAddress2(e.target.value)} value={docAddress2} className="border border-gray-600 rounded px-3 py-2"  type="text" placeholder="address2" required />
            </div>
            
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About</p>
          <textarea
            onChange={(e) => setDocAbout(e.target.value)} value={docAbout}
            className="border border-gray-600 w-full rounded px-3 py-2" 
            placeholder="write about doctor"
            rows={5}
            required
          ></textarea>
        </div>

        <button className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Add Doctor</button>
      </div>
    </form>
  );
};

export default AddDoctor;
