import { SavedQRsList } from "@/components/favorites/favorites";

export default function Favorites() {
  return (
    <div className="flex flex-col items-center min-h-[75vh] w-full px-6 md:px-10 py-8 gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Saved QR Codes
        </h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Manage, preview, and delete your saved QR code configurations in Cyberlim
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <SavedQRsList />
      </div>
    </div>
  );
}
