import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../services/axios";

interface ImageUploaderProps {
  uploadUrl: string;
  onSuccess?: (data: any) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ uploadUrl, onSuccess }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("image", file); 
      const res = await apiClient.put(uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (onSuccess) onSuccess(data);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      mutate(selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
      
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-60 h-32 object-cover rounded shadow"
        />
      )}

      <button
        onClick={handleUpload}
        className="btn btn-primary"
        disabled={!selectedFile || isPending}
      >
        {isPending ? "Uploading..." : "Upload"}
      </button>

      {isSuccess && <p className="text-green-600">Uploaded successfully!</p>}
      {error && <p className="text-red-600">Upload failed. Try again.</p>}
    </div>
  );
};

export default ImageUploader;
