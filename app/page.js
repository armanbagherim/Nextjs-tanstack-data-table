"use client";
import DataTable from "./components/utils/dataTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./components/utils/loader";
import Errors from "./components/utils/Errors";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getData"],
    queryFn: async () => {
      const data = await axios.get(
        "https://mocki.io/v1/3361b3fd-79ad-45c2-aba4-3ee66cc9230c"
      );
      return data.data;
    },
  });

  if (isLoading) return <Loader />;
  if (isError) return <Errors type="error" />;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <DataTable data={data} />
    </main>
  );
}
