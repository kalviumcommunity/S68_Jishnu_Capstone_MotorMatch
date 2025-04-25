
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Image, Upload } from "lucide-react";

type CarImageUpload = {
  file?: File;
  previewUrl?: string;
  uploading: boolean;
  uploadProgress: number;
};

function ImageDropzone({
  label,
  onFile,
  image,
  accept,
}: {
  label: string;
  onFile: (f: File) => void;
  image: CarImageUpload;
  accept?: string;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState(false);

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.length) onFile(e.dataTransfer.files[0]);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) onFile(e.target.files[0]);
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(true);
  }
  function handleDragLeave() {
    setDragActive(false);
  }
  return (
    <div
      className={`relative group border-2 ${
        dragActive ? "border-blue-500/70" : "border-dashed border-gray-300"
      } rounded-xl bg-gray-50 flex flex-col items-center justify-center aspect-[4/3] w-full max-w-xs mx-auto transition-colors cursor-pointer mb-2`}
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {image.previewUrl ? (
        <img
          src={image.previewUrl}
          alt={label}
          className="object-cover w-full h-48 rounded-xl"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-48 text-gray-400 gap-2">
          <Upload className="w-8 h-8 mb-1" />
          <span className="font-medium">{label}</span>
          <span className="text-xs text-gray-400">(JPG/PNG, Max 5MB)</span>
        </div>
      )}
      <input
        type="file"
        accept={accept || ".jpg,.jpeg,.png"}
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleChange}
      />
      {image.uploading && (
        <div className="absolute bottom-2 left-2 right-2 z-10">
          <Progress value={image.uploadProgress} />
        </div>
      )}
    </div>
  );
}

export default function ListCarDetailsPage() {
  // Three upload slots for main, interior, engine images
  const [images, setImages] = useState<
    { [key: string]: CarImageUpload }
  >({
    main: { uploading: false, uploadProgress: 0 },
    interior: { uploading: false, uploadProgress: 0 },
    engine: { uploading: false, uploadProgress: 0 },
  });

  // Simulate upload progress for demo
  function uploadImage(key: string, file: File) {
    const url = URL.createObjectURL(file);
    setImages((curr) => ({
      ...curr,
      [key]: {
        ...curr[key],
        file,
        previewUrl: url,
        uploading: true,
        uploadProgress: 0,
      },
    }));

    let prog = 0;
    const interval = setInterval(() => {
      prog += 15 + Math.random() * 30;
      if (prog >= 100) {
        setImages((curr) => ({
          ...curr,
          [key]: {
            ...curr[key],
            uploading: false,
            uploadProgress: 100,
          },
        }));
        clearInterval(interval);
      } else {
        setImages((curr) => ({
          ...curr,
          [key]: { ...curr[key], uploading: true, uploadProgress: prog },
        }));
      }
    }, 200);
  }

  // Sample car/seller fields for step 2
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    location: "",
    description: "",
    sellerName: "",
    sellerPhone: "",
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  // Form submit handler
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Listing submitted! (Demo only)");
  }

  return (
    <div className="min-h-[85vh] py-12 px-2 bg-gradient-to-br from-purple-100 via-white to-blue-100">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700 tracking-tight">
          List Your Car Details
        </h1>
        <form className="space-y-7" onSubmit={handleSubmit}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
              <ImageDropzone
                label="Main Car Photo"
                image={images.main}
                onFile={(file) => uploadImage("main", file)}
              />
              <ImageDropzone
                label="Interior Shot"
                image={images.interior}
                onFile={(file) => uploadImage("interior", file)}
              />
              <ImageDropzone
                label="Engine Photo"
                image={images.engine}
                onFile={(file) => uploadImage("engine", file)}
              />
            </div>
            <p className="text-xs text-gray-500 text-center">
              Drag & drop, or click to upload images
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              placeholder="Make (e.g. Toyota)"
              name="make"
              value={form.make}
              onChange={handleInput}
              required
            />
            <Input
              placeholder="Model (e.g. Corolla)"
              name="model"
              value={form.model}
              onChange={handleInput}
              required
            />
            <Input
              placeholder="Year (e.g. 2022)"
              name="year"
              value={form.year}
              onChange={handleInput}
              required
              type="number"
              min={1970}
              max={2030}
            />
            <Input
              placeholder="Price (USD)"
              name="price"
              value={form.price}
              onChange={handleInput}
              required
              type="number"
              min={0}
            />
            <Input
              placeholder="Location"
              name="location"
              value={form.location}
              onChange={handleInput}
              required
            />
          </div>
          <Textarea
            placeholder="Car Description (highlight features, condition, etc)"
            name="description"
            value={form.description}
            onChange={handleInput}
            className="min-h-[70px]"
            required
          />
          <div className="flex flex-col md:flex-row gap-5">
            <Input
              placeholder="Your Name"
              name="sellerName"
              value={form.sellerName}
              onChange={handleInput}
              required
            />
            <Input
              placeholder="Phone Number"
              name="sellerPhone"
              value={form.sellerPhone}
              onChange={handleInput}
              required
              type="tel"
            />
          </div>
          <Button
            className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-violet-700 hover:to-indigo-500 text-white shadow-lg animate-fade-in"
            type="submit"
          >
            Submit Listing
          </Button>
        </form>
      </div>
    </div>
  );
}
