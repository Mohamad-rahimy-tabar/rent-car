import bitcoin from "../../../../public/images/Bitcoin.png";
import visa from "../../../../public/images/Visa.png";
import paypal from "../../../../public/images/PayPal.png";
import security from "../../../../public/images/ic-security-safety.png";
import car from "../../../../public/images/car2.png";
import Image from "next/image";
import generateRateStars from "../../../../utils/generateRateStars";

export default function RentalSummary() {
  return (
    <section className="w-full flex flex-col md:flex-row-reverse gap-4 stroke-[#FBAD39] fill-[#FBAD39]">
      {/* car detail */}
      <div className="w-full p-2 md:flex-1">
        <div className="bg-primary-white w-full flex flex-col gap-5 md:gap-8 rounded-md shadow-md p-4">
          {/* header */}
          <div className="w-full flex flex-col">
            <h1 className="text-secondinary-Default font-bold text-base md:text-lg">
              Rental Summary
            </h1>
            <h2 className="text-secondinary-light-300 text-xs md:text-sm">
              Prices may change depending on the length of the rental and the price of your rental
              car.
            </h2>
          </div>
          {/* image */}
          <div className="w-full flex gap-2 items-stretch">
            <div className="w-1/3 md:w-1/2 bg-primary-dark-500 rounded-md py-6 px-2 md:px-4">
              <div className="aspect-w-3 aspect-h-1">
                <Image src={car} className="w-full h-full object-center object-cover" alt="car" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 justify-center">
              <h1 className="font-bold text-secondinary-Default text-base md:text-2xl">
                Nissan GT - R
              </h1>
              <div className="flex items-center gap-2">
                <span className="flex items-center">{generateRateStars(4)}</span>
                <span className="text-secondinary-light-300 text-xs md:text-sm">440+ Reviewer</span>
              </div>
            </div>
          </div>
          <hr className="h-[2px] border-none w-full bg-[#C3D4E966]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-secondinary-light-300 text-sm md:text-base">Subtotal</span>
              <span className="text-secondinary-Default text-sm md:text-base font-bold">
                $80.00
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-secondinary-light-300 text-sm md:text-base">Tax</span>
              <span className="text-secondinary-Default font-bold text-sm md:text-base">$0</span>
            </div>
          </div>
          <div className="bg-[#F6F7F9] p-4 rounded-md flex gap-2 items-center justify-between">
            <input
              type="text"
              className="placeholder:text-secondinary-light-300 placeholder:text-xs focus:ring-0 placeholder:md:text-sm outline-none border-none bg-[#F6F7F9] flex-1"
              placeholder="Apply promo code"
            />
            <button className="text-secondinary-Default font-bold text-xs md:text-sm">
              Apply now
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-secondinary-Default font-bold text-base md:text-lg">
                Total Rental Price
              </span>
              <span className="text-xs md:text-sm text-secondinary-light-300">
                Overall price and includes rental discount
              </span>
            </div>
            <div>
              <span className="font-bold text-secondinary-Default text-lg md:text-2xl ">
                $80.00
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* all forms */}
      <div className="p-2 w-full flex flex-col gap-4 md:w-3/5">
        {/* billing info */}
        <div className="rounded-md flex flex-col gap-5 bg-primary-white shadow-md p-5">
          {/* header */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg md:text-xl">Billing Info</h1>
              <span className="text-secondinary-light-300 text-xs md:text-sm">Step 1 of 4</span>
            </div>
            <div className=" text-secondinary-light-300 text-xs md:text-sm">
              <span>Please enter your billing info</span>
            </div>
          </div>
          {/* form */}
          <form className="">
            <div className="flex flex-col gap-5">
              {/* first line */}
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              {/* second line */}
              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Address"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Town / City
                  </label>
                  <input
                    type="text"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Town or city"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </form>
        </div>
        {/* Rental info */}
        <div className="rounded-md flex flex-col gap-5 bg-primary-white shadow-md p-5">
          {/* header */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg md:text-xl">Rental Info</h1>
              <span className="text-secondinary-light-300 text-xs md:text-sm">Step 2 of 4</span>
            </div>
            <div className=" text-secondinary-light-300 text-xs md:text-sm">
              <span>Please select your rental date</span>
            </div>
          </div>
          {/* pick up */}
          <div className="flex items-center">
            <span className="w-2 h-2 mr-4 bg-primary-dark-500 ring-4 ring-primary-light-100 rounded-full"></span>
            <h1 className="font-bold text-sm md:text-base">Pick - Up</h1>
          </div>
          {/* form */}
          <form className="">
            <div className="flex flex-col gap-5">
              {/* first line */}
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Locations
                  </label>
                  <select className="text-secondinary-light-300 border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9]">
                    <option className="">Select Your City</option>
                    <option className="p-2">German</option>
                    <option className="p-2">USA</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Date
                  </label>
                  <input
                    type="date"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              {/* second line */}
              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Time
                  </label>
                  <input
                    type="time"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Address"
                  />
                </div>
                <div className="hidden md:flex flex-col gap-2 md:gap-4 flex-1"></div>
              </div>
            </div>
            <div></div>
          </form>
          {/* Drop - Off */}
          <div className="flex items-center">
            <span className="w-2 h-2 mr-4 bg-primary-dark-500 ring-4 ring-primary-light-100 rounded-full"></span>
            <h1 className="font-bold text-sm md:text-base">Drop - Off</h1>
          </div>
          {/* form */}
          <form className="">
            <div className="flex flex-col gap-5">
              {/* first line */}
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Locations
                  </label>
                  <select className="text-secondinary-light-300 border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9]">
                    <option className="">Select Your City</option>
                    <option className="p-2">German</option>
                    <option className="p-2">USA</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Date
                  </label>
                  <input
                    type="date"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              {/* second line */}
              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="flex flex-col gap-2 md:gap-4 flex-1">
                  <label className="text-secondinary-Default text-sm md:text-base font-bold">
                    Time
                  </label>
                  <input
                    type="time"
                    className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-[#F6F7F9] placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                    placeholder="Address"
                  />
                </div>
                <div className="hidden md:flex flex-col gap-2 md:gap-4 flex-1"></div>
              </div>
            </div>
            <div></div>
          </form>
        </div>
        {/* payment methode */}
        <div className="rounded-md flex flex-col gap-5 bg-primary-white shadow-md p-5">
          {/* header */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg md:text-xl">Payment Method</h1>
              <span className="text-secondinary-light-300 text-xs md:text-sm">Step 3 of 4</span>
            </div>
            <div className=" text-secondinary-light-300 text-xs md:text-sm">
              <span>Please enter your payment method</span>
            </div>
          </div>
          {/* form */}
          <form className="">
            <div className="flex flex-col gap-5">
              {/* credit cart */}
              <div className="bg-[#F6F7F9] flex flex-col gap-10 rounded-md p-4">
                <div className="w-full flex items-center justify-between">
                  {/* radio btn */}
                  <div className="">
                    <input type="radio" name="payment" className="focus:ring-0" />
                    <label className="ml-5 text-secondinary-Default font-bold text-sm md:text-base">
                      Credit Card
                    </label>
                  </div>
                  {/* logo */}
                  <div>
                    <Image src={visa} className="" alt="credit card" />
                  </div>
                </div>
                <div className="flex gap-4 flex-col">
                  {/* first line */}
                  <div className="flex w-full flex-col gap-4 md:flex-row">
                    <div className="flex flex-col gap-2 md:gap-4 flex-1">
                      <label className="text-secondinary-Default text-sm md:text-base font-bold">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-primary-white placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                        placeholder="Card Number"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 flex-1">
                      <label className="text-secondinary-Default text-sm md:text-base font-bold">
                        Expration Date
                      </label>
                      <input
                        type="date"
                        className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-primary-white placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                      />
                    </div>
                  </div>
                  {/* second line */}
                  <div className="flex w-full flex-col gap-4 md:flex-row">
                    <div className="flex flex-col gap-2 md:gap-4 flex-1">
                      <label className="text-secondinary-Default text-sm md:text-base font-bold">
                        Card Holder
                      </label>
                      <input
                        type="text"
                        className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-primary-white placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                        placeholder="Card Holder"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 flex-1">
                      <label className="text-secondinary-Default text-sm md:text-base font-bold">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="border-none outline-none text-xs md:text-sm py-2 px-4 md:py-4 md:px-6 rounded-md w-full bg-primary-white placeholder:text-xs md:placeholder:text-sm placeholder:text-secondinary-light-300"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* paypal */}
              <div className="bg-[#F6F7F9] rounded-md p-4">
                <div className="w-full flex items-center justify-between">
                  {/* radio btn */}
                  <div className="">
                    <input type="radio" name="payment" className="focus:ring-0" />
                    <label className="ml-5 text-secondinary-Default font-bold text-sm md:text-base">
                      PayPal
                    </label>
                  </div>
                  {/* logo */}
                  <div>
                    <Image src={paypal} className="" alt="paypal" />
                  </div>
                </div>
              </div>
              {/* bitcoin */}
              <div className="bg-[#F6F7F9] rounded-md p-4">
                <div className="flex items-center justify-between w-full">
                  {/* radio btn */}
                  <div className="">
                    <input type="radio" name="payment" className="focus:ring-0" />
                    <label className="ml-5 text-secondinary-Default font-bold text-sm md:text-base">
                      Bitcoin
                    </label>
                  </div>
                  {/* logo */}
                  <div>
                    <Image src={bitcoin} className="" alt="credit card" />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </form>
        </div>
        {/* confirmation */}
        <div className="rounded-md flex flex-col gap-5 bg-primary-white shadow-md p-5">
          {/* header */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg md:text-xl">Confirmation</h1>
              <span className="text-secondinary-light-300 text-xs md:text-sm">Step 4 of 4</span>
            </div>
            <div className="text-secondinary-light-300 text-xs md:text-sm">
              <span>We are getting to the end. Just few clicks and your rental is ready!</span>
            </div>
          </div>
          {/* check box */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center rounded-md bg-[#F6F7F9] p-2 md:p-6">
              <input
                id="agree"
                type="checkbox"
                className="rounded-sm border-secondinary-light-300 focus:ring-0"
              />
              <label htmlFor="agree" className="text-[#1F2544] ml-4 text-xs md:text-base font-bold">
                I agree with sending an Marketing and newsletter emails. No spam, promissed!
              </label>
            </div>
            <div className="flex items-center rounded-md bg-[#F6F7F9] p-2 md:p-6">
              <input
                id="privacy"
                type="checkbox"
                className="rounded-sm border-secondinary-light-300 focus:ring-0"
              />
              <label
                htmlFor="privacy"
                className="text-[#1F2544] ml-4 text-xs md:text-base font-bold"
              >
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
          </div>
          {/* rental btn */}
          <div className="w-full flex items-center">
            <button className="rounded-md text-primary-white bg-primary-dark-500 text-sm p-3 md:p-4 md:text-base">
              Rent Now
            </button>
          </div>
          {/* safe data */}
          <div className="w-full flex flex-col gap-4">
            <div>
              <Image src={security} alt="ic-security" />
            </div>
            <div className="w-full flex flex-col gap-1">
              <h1 className="text-secondinary-Default text-sm md:text-lg font-bold">
                All your data are safe
              </h1>
              <h2 className="text-secondinary-light-300 text-xs md:text-sm">
                We are using the most advanced security to provide you the best experience ever.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
