import rhand from "../../assets/icon/rHand.png";

const KeyModules = () => {
  const data = [
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
    {
      img: rhand,
      title: "Patient Registration",
    },
  ];
  return (
    <div className="relative bg-white box-border w-full overflow-hidden flex flex-col items-start justify-start px-[20px] pt-[72px] sm:px-[60px] pb-24 gap-[36px] text-center text-17xl border-[1px] border-solid border-[#ebedf0] max-w-[100%] md:max-w-[600px] lg:max-w-[1440px]  m-auto ">
      <b className="relative leading-[150%]">Key Modules</b>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-6 ">
        {data.map((item, index) => (
          <div className="shrink-0 flex flex-row flex-wrap items-center justify-start gap-[24px] text-left text-[16px] font-['Noto Sans'] m-auto ">
            <div className="[background:linear-gradient(87.53deg,_rgba(57,_208,_94,_0.15)_15.79%,_rgba(70,_144,_199,_0.15))] box-border w-[90vw] sm:w-[424px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 px-4 gap-[12px] border-[1px] border-solid border-[#ebedf0]">
              <img
                className="relative w-4 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src={rhand}
              />
              <div className="flex-1 relative leading-[150%] inline-block h-12">
                Patient Registration
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyModules;
