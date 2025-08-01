import { useRouter } from "next/router";
import BookForm from "../components/BookForm";
import { createBook } from "../utils/api";

export default function AddBook() {
  const router = useRouter();

  const handleSubmit = async (data) => {
    await createBook(data);
    router.push("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Tambah Buku Baru</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}
