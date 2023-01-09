import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentNote } from '@app/slices/noteSlice';
import SunEditor from "suneditor-react";
import noteApi from "@api/note";

export default function Note() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const pages = useSelector(state => state.pages);

  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState("");

  const getNote = async () => {
    try {
      const { data } = await noteApi.getNoteBySlug(slug);
      setNote(data.content);
      setIsLoading(false);
      dispatch(setCurrentNote({
        image: pages[data.page].image || '',
        path: `${pages[data.page].title} / ${data.title}` 
      }))
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleNoteChange = (content) => {
    setNote(content);
  };

  useEffect(() => {
    getNote();
  }, [slug]);

  if (isLoading) return <></>;

  return <SunEditor 
    setContents={note} 
    onChange={handleNoteChange} 
    placeholder="Please type here..." 
    height="100%" 
    setDefaultStyle="font-size: 16px;"  
  />;
}
