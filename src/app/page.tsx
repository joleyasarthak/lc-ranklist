import CheckUsername from "@/components/CheckUsername";
import RankTable from "@/components/RankTable/RankTable";

export default function Home() {
  return (
    <>
      <div className="">
        <CheckUsername />
        <RankTable />
      </div>
    </>
  );
}
