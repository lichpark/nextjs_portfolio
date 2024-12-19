import Image from "next/image";
import KeyValTextDiv from "../components/contact/KeyValTextDiv";
import Texts from "../components/texts";

export const metadata = {
  title: "contract page",
  description: "contract page",
};

const Page = () => {
  const KeyValTextList = [
    {
      keyText: "이름",
      valText: ["박종률"],
      keyClassNm:
        "text-3xl font-bold pb-4 border-b-2 flex items-center justify-center w-fit ",
      valClassNm: "text-2xl flex items-center justify-center pt-7 pb-10 w-fit",
      wrpclasNm: "flex flex-col items-center justify-center contact_chg",
      keyval: "0",
    },
    {
      keyText: "생년월일",
      valText: ["1985.02.07"],
      keyClassNm:
        "text-3xl font-bold pb-4 border-b-2 flex items-center justify-center w-fit",
      valClassNm: "text-2xl flex items-center justify-center pt-7 pb-10 w-fit",
      wrpclasNm: "flex flex-col items-center justify-center contact_chg",
      keyval: "1",
    },
    {
      keyText: "연락처",
      valText: ["010-3136-2085", "lichpark0@hanmail.net"],
      keyClassNm:
        "text-3xl font-bold pb-4 border-b-2 flex items-center justify-center w-fit",
      valClassNm: "text-2xl flex items-center justify-center pt-5 w-fit",
      wrpclasNm: "flex flex-col items-center justify-center contact_chg",
      keyval: "2",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-24 px-12 bg-red-50 w-full h-full">
      <Texts
        classnm={"text-5xl mb-10 bold mobile_contact_title"}
        type={""}
        text={"ABOUT ME"}
      />
      <div className="grid grid-cols-3 gap-x-40 contact_mobile">
        {KeyValTextList.map((v, idx) => (
          <KeyValTextDiv {...v} />
        ))}
      </div>
      <div style={{ marginTop: "5%" }}>
        <Texts
          classnm={"text-5xl mb-10 bold mobile_contact_title"}
          type={""}
          text={"Lighthouse inspection"}
        />
      </div>
      <div style={{ textAlign: "center", width: "100%", height: "100%" }}>
        <Image
          width={1200}
          height={800}
          src={"/imgs/lighthouse.webp"}
          alt={"chrome lighthouse 검사결과"}
          quality={100}
          priority={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </section>
  );
};

export default Page;
