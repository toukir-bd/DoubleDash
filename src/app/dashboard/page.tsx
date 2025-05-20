
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PageStructure } from "@/components/PageStructure";

const dashboard = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return (
    <>
      <PageStructure>
        <div className="py-3 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-[#0C0D11]">Welcome {session.user?.email}</h1>
          <p className="text-md font-semibold text-[#0C0D11]">This is your System Dashboard!</p>
        </div>
      </PageStructure>
    </>
  );
};

export default dashboard;