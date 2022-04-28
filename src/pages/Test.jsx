import React from "react";

function Test() {
  return (
    <div>
      <div class="center">
        <div class="property-card">
          <div class="property-image">
            <div class="property-image-title">
              {/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
            </div>
          </div>
          <div class="property-description">
            <h5> Card Title </h5>
            <p>
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </p>
          </div>
          <div className="row h-16 mt-[32rem] flex">
            <div className="col-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold pt-2 pb-6 px-8 rounded text-center w-[25rem] rounded-r-none">
                Verdadeiro
              </button>
            </div>
            <div className="col-6">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold pt-2 pb-6 px-8 rounded text-center w-[25rem] rounded-l-none">
                Falso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
