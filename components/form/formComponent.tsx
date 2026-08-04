import { useForm } from "react-hook-form";
import { QRCodeProps } from "@/types/qrProps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QRFormProps {
  onSubmit: (data: QRCodeProps) => void;
  defaultValues?: Partial<QRCodeProps>;
}

export function QRForm({ onSubmit, defaultValues }: QRFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QRCodeProps>({ defaultValues });

  return (
    <Card className="w-full border border-border/50 bg-background/80 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Cyberlim QR Customizer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* URL */}
          <div className="space-y-2">
            <Label htmlFor="url" className="text-sm font-semibold">
              Target URL / Text *
            </Label>
            <Input
              id="url"
              {...register("url", { required: "This field is required" })}
              placeholder="https://example.com"
              className="bg-card/50"
            />
            {errors.url && (
              <p className="text-sm font-medium text-destructive">
                {errors.url.message}
              </p>
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-semibold">
              Title / Label
            </Label>
            <Input
              id="title"
              {...register("title")}
              placeholder="e.g., My Personal QR"
              className="bg-card/50"
            />
          </div>

          {/* Size */}
          <div className="space-y-2">
            <Label htmlFor="size" className="text-sm font-semibold">
              Size (px)
            </Label>
            <Input
              id="size"
              type="number"
              {...register("size", { valueAsNumber: true })}
              className="bg-card/50"
            />
          </div>

          {/* Colors */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bgColor" className="text-sm font-semibold">
                Background Color
              </Label>
              <Input
                id="bgColor"
                type="color"
                className="h-10 w-full p-1 cursor-pointer bg-card/50"
                {...register("bgColor")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fgColor" className="text-sm font-semibold">
                QR Color
              </Label>
              <Input
                id="fgColor"
                type="color"
                className="h-10 w-full p-1 cursor-pointer bg-card/50"
                {...register("fgColor")}
              />
            </div>
          </div>

          {/* Error Correction Level */}
          <div className="space-y-2">
            <Label htmlFor="level" className="text-sm font-semibold">
              Error Correction Level
            </Label>
            <Select {...register("level")}>
              <SelectTrigger className="bg-card/50">
                <SelectValue placeholder="Select correction level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="L">Low (7% recovery)</SelectItem>
                <SelectItem value="M">Medium (15% recovery)</SelectItem>
                <SelectItem value="Q">High (25% recovery)</SelectItem>
                <SelectItem value="H">Maximum (30% recovery)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Embedded Image Settings */}
          <Card className="mt-6 border border-border/40 bg-card/30">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-semibold text-primary">
                Embedded Logo (Optional)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="imageSrc" className="text-xs font-medium">
                  Logo Image URL
                </Label>
                <Input
                  id="imageSrc"
                  {...register("imageSettings.src")}
                  placeholder="https://example.com/logo.png"
                  className="bg-background/60"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="imageWidth" className="text-xs font-medium">
                    Width (px)
                  </Label>
                  <Input
                    id="imageWidth"
                    type="number"
                    {...register("imageSettings.width", {
                      valueAsNumber: true,
                    })}
                    className="bg-background/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageHeight" className="text-xs font-medium">
                    Height (px)
                  </Label>
                  <Input
                    id="imageHeight"
                    type="number"
                    {...register("imageSettings.height", {
                      valueAsNumber: true,
                    })}
                    className="bg-background/60"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 text-white font-bold py-3 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            Generate QR Code
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
