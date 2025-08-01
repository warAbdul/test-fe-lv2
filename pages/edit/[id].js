import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookForm from "../../components/BookForm";
import { fetchBook, updateBook } from "../../utils/api";

export default function EditBook() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) fetchBook(id).then(setBook);
  }, [id]);

  const handleSubmit = async (data) => {
    await updateBook(id, data);
    router.push("/");
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Buku</h1>
      <BookForm initialData={book} onSubmit={handleSubmit} />
    </div>
  );
}
