"use client";

import { useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, use, useEffect } from "react";
import { debounceTimeout } from "@/lib/constants";
import useNote from "@/hooks/useNote";

type Props = {
  noteId: string;
  startingNoteText: string;
};

let updateTimeout: NodeJS.Timeout;

function NoteTextInput({ noteId, startingNoteText }: Props) {
  const noteIdParam = useSearchParams().get("noteId") || "";
  const { noteText, setNoteText } = useNote();

  useEffect(() => {
    if (noteIdParam === noteId) {
      setNoteText(startingNoteText);
    }
  }, [startingNoteText, noteIdParam, noteId, , setNoteText]);

  const handleUpdateNotes = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    setNoteText(text);

    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      updateNoteAction(noteId, text);
    }, debounceTimeout);
  };

  return (
    <Textarea
      value={noteText}
      onChange={handleUpdateNotes}
      placeholder="Type your note here..."
      className="custom-scrollbar placeholder:text-muted-foreground mb-4 h-full max-w-4xl resize-none border p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
    />
  );
}

export default NoteTextInput;
