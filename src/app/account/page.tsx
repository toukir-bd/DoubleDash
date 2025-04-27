
import LeftMenu from "@/components/LeftMenu";
import NavMenu from "@/components/NavMenu";
import { PageStructure } from "@/components/PageStructure";
import { CardBox } from "@/components/ui/CardBox";
import { FilledButton } from "@/components/ui/FilledButton";
import { RoundedButton } from "@/components/ui/RoundedButton";
import Image from "next/image";

const account = () => {
  return (
    <>
      <PageStructure>
        <NavMenu/>
        <div className="flex items-center space-x-[20px] w-full">
          <LeftMenu></LeftMenu>
          <div className="w-full flex space-x-[10px]">
            <div className="flex flex-col flex-1/3">
              <CardBox className="relative flex flex-col items-center justify-center">
                <Image src="./img/users/user.svg" width={170} height={170} alt="user"/>
                <h1 className="text-2xl font-bold text-[#0C0D11]">Toukir Rahman</h1>
                <p className="mb-2 text-sm text-[#0C0D11]/[.75] font-semibold">Front-End Developer | UX-UI Designer</p>
                <span className="w-auto h-[28px] bg-[#0051FF]/[.15] text-[#0051FF] text-sm font-semibold flex items-center justify-center px-4 rounded-[28px]">Premium Membership</span>
                <div className="mt-3 flex items-center justify-center space-x-1">
                  <FilledButton/>
                  <FilledButton/>
                  <FilledButton/>
                  <FilledButton/>
                  <FilledButton/>
                  <FilledButton/>
                </div>
                <div className="absolute w-full px-[20px] top-[20px] left-0 right-0 flex items-center justify-between">
                    <RoundedButton/>
                    <div className="flex items-center space-x-1">
                      <RoundedButton/>
                      <RoundedButton/>
                    </div>
                </div>
              </CardBox>
            </div>
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

export default account;