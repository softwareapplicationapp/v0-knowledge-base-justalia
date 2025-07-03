"use client"

import { useMemo } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), [])

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      ["clean"],
    ],
  }

  return <ReactQuill theme="snow" value={value} onChange={onChange} modules={modules} />
}
