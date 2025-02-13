import { images } from "../../../public/assets";
import ImageComponent from "../common/Image";
import ProgressBar from "../common/ProgressBar";
import SoundServices from "./SoundServices";

const SoundSolutions = () => {

  
    return (
      <div className="min-h-screen text-white py-2 px-4 sm:px-6 lg:px-8">
        {/* Hero Image Section */}
        <div className="max-w-7xl mx-auto ">
          
        <ImageComponent
                 title=""
                   imageSrc={images.png.img20}
                   />
          {/* Title Section */}
          <div className=" mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Sound System Solutions
            </h1>
            <ProgressBar/>
          </div>
  
          {/* Solutions Grid */}
       <SoundServices/>
        </div>
      </div>
    );
  };
  
  export default SoundSolutions;