export default function DeleteBtn({
  onDelete,
  qr,
}: {
  onDelete: () => void;
  qr: { id: string };
}) {
  const handleDelete = async () => {
    const res = await fetch(`/api/qrcode/${qr.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      onDelete();
    } else {
      console.error("Error deleting QR code");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="mt-2 px-4 py-1.5 bg-destructive/90 text-destructive-foreground text-sm font-semibold rounded-lg hover:bg-destructive shadow-sm transition-all hover:scale-105 cursor-pointer"
    >
      Delete
    </button>
  );
}
