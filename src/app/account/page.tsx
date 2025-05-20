// import LeftMenu from "@/components/LeftMenu";
// import NavMenu from "@/components/NavMenu";
import { PageStructure } from "@/components/PageStructure";
import { CardBox } from "@/components/ui/CardBox";
import { FilledButton } from "@/components/ui/FilledButton";
import { RoundedButton } from "@/components/ui/RoundedButton";
import { RoundedInfo } from "@/components/ui/RoundedInfo";
import Image from "next/image";

// Data Arrays
const infoCards = [
  {
    icon: "/img/icons/info-1.svg",
    amount: "$5200.450",
    growth: "+30%",
    perGrowth: "per week",
    growthColor: "#12B034",
    description: "Income from 70 Tasks on this Month",
  },
  {
    icon: "/img/icons/info-2.svg",
    amount: "+52",
    growth: "+10",
    perGrowth: "today",
    growthColor: "#0051FF",
    description: "New Customer assigned this Week",
  },
  {
    icon: "/img/icons/info-3.svg",
    amount: "+26",
    growth: "+3",
    perGrowth: "today",
    growthColor: "#DF8200",
    description: "New Tasks added to this Week",
  },
];

const filledButtonIcons = [
  "/img/icons/ac-1.svg",
  "/img/icons/ac-2.svg",
  "/img/icons/ac-3.svg",
  "/img/icons/ac-4.svg",
  "/img/icons/ac-5.svg",
  "/img/icons/ac-6.svg",
];

const roundedButtonIcons = [
  "/img/icons/ac-11.svg",
  "/img/icons/ac-22.svg",
  "/img/icons/ac-33.svg",
];

const roundedInfo = [
  "/img/icons/ab-1.svg",
  "/img/icons/ab-2.svg",
  "/img/icons/ab-3.svg",
  "/img/icons/ab-4.svg",
  "/img/icons/ab-5.svg",
  "/img/icons/ab-6.svg",
  "/img/icons/ab-7.svg",
  "/img/icons/ab-8.svg"
];

const webLinkIcons = [
  "/img/icons/ab-11.svg",
  "/img/icons/ab-22.svg",
  "/img/icons/ab-33.svg",
  "/img/icons/ab-44.svg",
];

const profileDetails = [
  {
    label: "First Name",
    value: "Toukir",
    iconIndex: 0,
  },
  {
    label: "Last Name",
    value: "Rahman",
    iconIndex: 0,
  },
  {
    label: "Email",
    value: "to.toukir.rahman@gmail.com",
    iconIndex: 1,
  },
  {
    label: "Phone Number",
    value: "+8801753778070",
    iconIndex: 2,
  },
  {
    label: "On the web",
    isWeb: true,
    iconIndex: 3,
    webIcons: webLinkIcons,
  },
  {
    label: "Profile Created",
    value: "03-08-2007",
    iconIndex: 4,
  },
];



const Account = () => {
  return (
    <>
      <PageStructure>
          <div className="w-full ps-[100px] flex flex-col space-x-[10px]">
            {/* Info Cards */}
            <div className="grid grid-cols-4 gap-3 mt-7 mb-10 align-center place-items-center">
              <h1 className="text-[32px] font-bold text-[#0C0D11] leading-[32px]">
                Profile<br />Information
              </h1>

              {infoCards.map((card, index) => (
                <div key={index} className="flex items-start justify-start space-x-3">
                  <RoundedInfo>
                    <Image src={card.icon} width={18} height={18} alt="icon" />
                  </RoundedInfo>
                  <div className="flex flex-col">
                    <h1 className="text-[20px] text-[#0C0D11]/[.75] font-bold flex items-center space-x-1">
                      {card.amount}
                      <span className="ms-2 h-[24px] w-auto rounded-[30px] text-[13px] text-white flex items-center px-3"
                      style={{ backgroundColor: card.growthColor }}>
                        {card.growth}
                        <span className="text-white/[.5] text-[12px] font-semibold ps-1">{card.perGrowth}</span>
                      </span>
                    </h1>
                    <p className="text-[#0C0D11]/[.5] text-[14px] font-semibold">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Section */}
            <div className="w-full flex space-x-[10px]">
              {/* Left Profile Card */}
              <div className="flex flex-col flex-1/3 space-y-[10px]">
                <CardBox className="relative flex flex-col items-center justify-center">
                  <Image className="mt-3" src="/img/users/user.svg" width={170} height={170} alt="user" />
                  <div className="py-3 text-center">
                    <h1 className="text-2xl font-bold text-[#0C0D11]/[.75]">Toukir Rahman</h1>
                    <p className="mb-2 text-sm text-[#0C0D11]/[.5] font-semibold">
                      Front-End Developer | UX-UI Designer
                    </p>
                    <span className="w-auto h-[28px] bg-[#0051FF]/[.15] text-[#0051FF] text-sm font-semibold flex items-center justify-center px-4 rounded-[28px]">
                      Premium Membership
                    </span>
                  </div>

                  {/* Filled Buttons */}
                  <div className="mt-3 flex items-center justify-center space-x-1">
                    {filledButtonIcons.map((icon, index) => (
                      <FilledButton key={index}>
                        <Image width={17} height={17} src={icon} alt="icon" />
                      </FilledButton>
                    ))}
                  </div>

                  {/* Top Right Rounded Buttons */}
                  <div className="absolute w-full px-[25px] top-[25px] left-0 right-0 flex items-center justify-between">
                    <RoundedButton>
                      <Image width={20} height={20} src={roundedButtonIcons[0]} alt="icon" />
                    </RoundedButton>
                    <div className="flex items-center space-x-1">
                      {roundedButtonIcons.slice(1).map((icon, index) => (
                        <RoundedButton key={index}>
                          <Image width={20} height={20} src={icon} alt="icon" />
                        </RoundedButton>
                      ))}
                    </div>
                  </div>
                </CardBox>

                <CardBox className="relative flex flex-col items-center justify-center">
                  <div className="w-full ps-[5px] top-[25px] left-0 right-0 flex items-center justify-between">
                    <p className="text-[18px] text-[#0C0D11] font-semibold">Detailed About</p>
                    <div className="flex items-center space-x-1">
                      {roundedButtonIcons.slice(1).map((icon, index) => (
                        <RoundedButton key={index}>
                          <Image width={20} height={20} src={icon} alt="icon" />
                        </RoundedButton>
                      ))}
                    </div>
                  </div>

                  <div className="w-full flex flex-col space-y-3 pt-4">
                    {profileDetails.map((item, index) => (
                      <div key={index} className="w-full flex items-center justify-between">
                        <div className="flex items-start justify-self-start">
                          <RoundedInfo>
                            <Image
                              width={item.isWeb ? 26 : 20}
                              height={item.isWeb ? 26 : 20}
                              src={roundedInfo[item.iconIndex]}
                              alt="icon"
                            />
                          </RoundedInfo>
                          <div className="flex flex-col ms-2">
                            <p className="text-sm font-semibold text-[#0C0D11]/[.45]">
                              {item.label}
                            </p>
                            {item.isWeb ? (
                              <div className="flex items-center space-x-1">
                                {item.webIcons.map((icon, idx) => (
                                  <RoundedButton key={idx}>
                                    <Image width={20} height={20} src={icon} alt="web icon" />
                                  </RoundedButton>
                                ))}
                              </div>
                              ) : (
                              <h3 className="text-[18px] font-semibold text-[#0C0D11]/[.65]">
                                {item.value}
                              </h3>
                            )}
                          </div>
                        </div>
                        <FilledButton>
                          <Image width={18} height={18} src={roundedInfo[5]} alt="edit icon"/>
                        </FilledButton>
                      </div>
                    ))}
                  </div>
                </CardBox>
              </div>

              {/* Right Side CardBox */}
              <div className="flex flex-col flex-2/3">
                <CardBox>
                  <p>sdfasdfsdfasdf</p>
                </CardBox>
              </div>
            </div>
          </div>
      </PageStructure>
    </>
  );
};

export default Account;
