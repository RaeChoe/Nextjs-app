"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function Controls() {
  const { id } = useParams();
  const router = useRouter();

  const handleDelete = () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (!ok) return; // 취소 시 중단

    const options = { method: "DELETE" };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
      .then(resp => resp.json())
      .then(() => {
        router.push("/"); //삭제후 홈으로 이동
        router.refresh(); //목록 새로고침
      });
  };

  return (
    <div className="d-flex gap-1">
      <Link className="btn btn-primary" href="/create">
        Create
      </Link>
      {id && (
        <>
          <Link className="btn btn-secondary" href={`/update/${id}`}>
            Update
          </Link>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}
