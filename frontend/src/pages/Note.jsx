import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";
import { setCurrentNote } from "@app/slices/noteSlice";
import SunEditor from "suneditor-react";
import noteApi from "@api/note";
import toast from "@utils/toast";

export default function Note() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const editor = useRef();

  const pages = useSelector((state) => state.pages);

  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState("");

  const getNote = async () => {
    try {
      const { data } = await noteApi.getNoteBySlug(slug);
      setNote(data.content);
      setIsLoading(false);
      dispatch(
        setCurrentNote({
          image: pages[data.page].image || "",
          path: `${pages[data.page].title} / ${data.title}`,
        })
      );
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const updateNoteContent = async (content) => {
    await noteApi.updateNoteBySlug(slug, { content });
  };

  const handleNoteChange = (content) => {
    debounce(() => {
      setNote(content);
      updateNoteContent(content);
    }, 1000)();
  };

  const handlePredictNextWords = () => {
    const text = editor.current.getText().split(" ");
    const word =
      text.length >= 3
        ? text.slice(-3).join(" ")
        : text.length >= 2
        ? text.slice(-2).join(" ")
        : text.join(" ");
    if (word.length > 0) {
      alert(word);
    }
  };

  const handleKeyDown = (event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if ((event.ctrlKey || event.metaKey) && charCode === "s") {
      event.preventDefault();
      toast.info("Saving...");
      updateNoteContent(note);
    } else if ((event.ctrlKey || event.metaKey) && charCode === " ") {
      event.preventDefault();
      handlePredictNextWords();
    }
  };

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  useEffect(() => {
    getNote();
  }, [slug]);

  if (isLoading) return <></>;

  return (
    <>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        setContents={note}
        onChange={handleNoteChange}
        onKeyDown={handleKeyDown}
        placeholder="Please type here..."
        height="100%"
        setDefaultStyle="font-size: 16px;"
      />
    </>
  );
}
