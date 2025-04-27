import LeftMenu from "@/components/LeftMenu";
import NavMenu from "@/components/NavMenu";
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
    description: "Income from 70 Tasks on this Month",
  },
  {
    icon: "/img/icons/info-2.svg",
    amount: "$5200.450",
    growth: "+30%",
    description: "Income from 70 Tasks on this Month",
  },
  {
    icon: "/img/icons/info-3.svg",
    amount: "$5200.450",
    growth: "+30%",
    description: "Income from 70 Tasks on this Month",
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

const Account = () => {
  return (
    <>
      <PageStructure>
        <NavMenu />
        <div className="flex items-center space-x-[20px] w-full">
          <LeftMenu />
          <div className="w-full flex flex-col space-x-[10px]">
            {/* Info Cards */}
            <div className="grid grid-cols-4 gap-3 mt-7 mb-8 align-center place-items-center">
              <h1 className="text-[32px] font-bold text-[#0C0D11] leading-[32px]">
                Profile<br />Information
              </h1>

              {infoCards.map((card, index) => (
                <div key={index} className="flex items-start justify-start space-x-3">
                  <RoundedInfo>
                    <Image src={card.icon} width={20} height={20} alt="icon" />
                  </RoundedInfo>
                  <div className="flex flex-col">
                    <h1 className="text-[20px] text-[#0C0D11] font-semibold flex items-center space-x-1">
                      {card.amount}
                      <span className="ms-2 h-[24px] w-auto rounded-[30px] bg-[#12B034] text-[12px] text-white flex items-center px-3">
                        {card.growth}
                        <span className="text-white/[.7] ps-1">per week</span>
                      </span>
                    </h1>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Section */}
            <div className="w-full flex space-x-[10px]">
              {/* Left Profile Card */}
              <div className="flex flex-col flex-1/3">
                <CardBox className="relative flex flex-col items-center justify-center">
                  <Image src="/img/users/user.svg" width={170} height={170} alt="user" />
                  <h1 className="text-2xl font-bold text-[#0C0D11]">Toukir Rahman</h1>
                  <p className="mb-2 text-sm text-[#0C0D11]/[.75] font-semibold">
                    Front-End Developer | UX-UI Designer
                  </p>
                  <span className="w-auto h-[28px] bg-[#0051FF]/[.15] text-[#0051FF] text-sm font-semibold flex items-center justify-center px-4 rounded-[28px]">
                    Premium Membership
                  </span>

                  {/* Filled Buttons */}
                  <div className="mt-3 flex items-center justify-center space-x-1">
                    {filledButtonIcons.map((icon, index) => (
                      <FilledButton key={index}>
                        <Image width={20} height={20} src={icon} alt="icon" />
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
              </div>

              {/* Right Side CardBox */}
              <div className="flex flex-col flex-2/3">
                <CardBox>
                  <p>sdfasdfsdfasdf</p>
                </CardBox>
              </div>
            </div>
          </div>
        </div>
      </PageStructure>
    </>
  );
};

export default Account;
