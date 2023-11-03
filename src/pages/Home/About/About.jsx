import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="py-32">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="absolute top-1/2 right-5 w-1/2 rounded-lg shadow-2xl border-8 border-white" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-[#FF3811] mb-6">About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn bg-[#FF3811] text-white mt-8">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
