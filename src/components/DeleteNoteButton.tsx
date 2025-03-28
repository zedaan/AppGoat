"use client"

type Props = {
  noteId: string;
  deleteNoteLocally: (noteId: string) => void;
}

function DeleteNoteButton({ noteId, deleteNoteLocally }: Props) {
  return <div>Delete Note Button</div>
}

export default DeleteNoteButton;