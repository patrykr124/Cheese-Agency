import React from "react";

function Price() {
  return (
    <div id="offer" className="price_section paddingSection">
      <div className="container px-10 lg:px-0">
        <div className="price_title flex flex-col justify-center items-center mb-16">
          <h2 className="price_text_title text-center mb-10 xl:text-3xl text-2xl">
            Price
          </h2>
          <p className="description text-center lg:w-1/2 w-5/6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod
            eveniet illo quaerat vitae, tempora soluta placeat quisquam
            doloremque accusamus.
          </p>
        </div>
        <div className="price_box_section">
          <div className="price_container flex lg:flex-row flex-col gap-20 lg:gap-60 justify-center ">
            <div className="price_one_box mt-9">
              <div className="price_one_price flex flex-col text-center mb-10">
                <h4 className="font-bold text-2xl">ESSENTIAL</h4>
                <p className="description">
                  For basic websites and <br></br>project
                </p>
              </div>
              <div className="price_one_main flex flex-col items-center text-center ">
                <p className="mb-10">
                  <span className="text-5xl">59</span> USD/Year
                </p>
                <button className="button_hero items-center font-bold overflow-hidden relative px-14 py-3  bg-transparent border-2 ">
                  Buy Now
                </button>
              </div>
              <div className="coll_botton flex flex-col items-center lg:items-start">
                <div className="price_one_feature my-10">Features:</div>
                <div className="price_one_detailBox">
                  <div className="price_one_detail flex items-center pb-4">
                    <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                    <p>1 Site</p>
                  </div>
                  <div className="price_one_detail flex items-center pb-4">
                    <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                    <p>Premium Support</p>
                  </div>
                  <div className="price_one_detail flex items-center pb-4">
                    <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                    <p>50 Pro Widgets</p>
                  </div>
                  <div className="price_one_detail flex items-center pb-4">
                    <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                    <p>Theme Builder</p>
                  </div>
                  <div className="price_one_detail flex items-center pb-4">
                    <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                    <p>Dynamic Content</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="price_one_box border-2 p-8">
              <div className="price_one_price flex flex-col text-center mb-10">
                <h4 className="font-bold text-2xl">ADVANCED</h4>
                <p className="description">
                  For professional and<br></br> Ecommerce websites
                </p>
              </div>
              <div className="price_one_main flex flex-col items-center text-center ">
                <p className="mb-10">
                  <span className="text-5xl">99</span> USD/Year
                </p>
                <button className="button_hero items-center font-bold overflow-hidden relative px-14 py-3  bg-transparent border-2 ">
                  Buy Now
                </button>
              </div>
              <div className="coll_botton flex flex-col items-center lg:items-start">

              <div className="price_one_feature my-10">Features:</div>
              <div className="price_one_detailBox text-center flex flex-col">
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Up to 3 Sites</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Premium Support</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>82 Pro Widgets</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Theme Builder</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Dynamic Content</p>
                </div>
              </div>
              </div>
            </div>

            <div className="price_one_box">
            <div className="coll_botton flex flex-col items-center lg:items-start">

              <div className="price_one_price flex flex-col text-center mb-10 mt-9">
                <h4 className="font-bold text-2xl">EXPERT</h4>
                <p className="description">
                  For freelancers who need<br></br> multiple sites
                </p>
              </div>
              <div className="price_one_main flex flex-col items-center text-center ">
                <p className="mb-10">
                  <span className="text-5xl">199</span> USD/Year
                </p>
                <button className="button_hero items-center font-bold overflow-hidden relative px-14 py-3  bg-transparent border-2 ">
                  Buy Now
                </button>
              </div>
              <div className="price_one_feature my-10 ">Features:</div>
              <div className="price_one_detailBox ">
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Up to 25 Sites</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Premium Support</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Custom Code & CSS</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Ecommerce Features</p>
                </div>
                <div className="price_one_detail flex items-center pb-4">
                  <i class="fa-regular fa-circle-check text-xl mr-5"></i>
                  <p>Dynamic Content</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="price_description_box flex items-center justify-center mt-14">
            <div className="price_description text-center  w-5/6 lg:w-2/3">
              <p className="description">
                The above prices do not include applicable taxes based on your
                billing address. The final price will be displayed on the
                checkout page, before the payment is completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
