const Hero = () => {
  return (
    <div className="w-3/4 mx-auto my-20 flex">
      <div className="w-[40%] p-10 flex justify-center items-center">
        <div className="h-60 w-60 bg-sky-200"></div>
      </div>
      <div className="w-[60%]">
        <p className="text-6xl font-bold mb-5">GlucoTrust&#8482;</p>
        <p className="text-3xl mb-5">
          This formula was made exclusively with safe and natural ingredients.
          The remedy won’t result in side effects, though consumers who
          currently treat a medical condition with medication might want to
          speak with their doctor first.
        </p>
        <button className="cta-btn text-3xl font-semibold">
          Claim your Discount Now &rarr;
        </button>
      </div>
    </div>
  );
};
export default Hero;
